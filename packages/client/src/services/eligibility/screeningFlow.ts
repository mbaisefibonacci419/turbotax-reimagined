/**
 * Eligibility Screening Flow (the conversational "planner")
 *
 * Deterministically decides WHICH progressive question to ask next and the
 * exact option pills to show. The LLM is never involved in choosing questions
 * or determining eligibility — this planner owns the flow; delivery copy is
 * fixed (works offline / in Private mode).
 *
 * Question budget: at most MAX_QUESTIONS turns. Any Tier-1 input already known
 * from the return is reused, never re-asked. Freed budget is spent on targeted
 * yes/no discovery (bundled into a single "select all that apply" turn).
 *
 * All answers live ONLY in the ephemeral session (no exact DOB, no dollars,
 * no PII retained). Age is captured as bands; dependents as age-group presence.
 */

import { FilingStatus } from '@nimbus/engine';
import type { ChatOption, TaxReturn } from '@nimbus/engine';
import { getAgeAtEndOfYear } from '../../utils/dateValidation';
import type { ScreeningInputs } from './eligibilityScreening';

export const MAX_QUESTIONS = 6;

export type ScreeningScope = 'credits' | 'deductions';

export interface ScreeningSession {
  scope: ScreeningScope;
  inputs: ScreeningInputs;
  askedQuestionIds: string[];
  /** The question currently shown, awaiting an answer. */
  pendingQuestionId: string | null;
  questionsAsked: number;
  /** Whether dependents are fully known (so we don't ask). */
  dependentsKnown: boolean;
  /** Whether W-2 + self-employment presence is known (so we don't ask). */
  incomeKnown: boolean;
}

export interface ScreeningQuestion {
  id: string;
  message: string;
  options: ChatOption[];
  multiSelect?: boolean;
}

// ─── Filing status mapping ─────────────────────────

const FILING_STATUS_VALUES: Record<string, FilingStatus> = {
  single: FilingStatus.Single,
  mfj: FilingStatus.MarriedFilingJointly,
  mfs: FilingStatus.MarriedFilingSeparately,
  hoh: FilingStatus.HeadOfHousehold,
  qss: FilingStatus.QualifyingSurvivingSpouse,
};

function isMarried(inputs: ScreeningInputs): boolean {
  return (
    !!inputs.isMarried ||
    inputs.filingStatus === FilingStatus.MarriedFilingJointly ||
    inputs.filingStatus === FilingStatus.QualifyingSurvivingSpouse
  );
}

// ─── Derive Tier-1 inputs from an existing return ──

/**
 * Pull whatever Tier-1 facts we can from the return so we don't re-ask them.
 * Reads only categorical signals — never copies dollar amounts into the session.
 */
export function deriveInputsFromReturn(taxReturn: TaxReturn): {
  inputs: ScreeningInputs;
  dependentsKnown: boolean;
  incomeKnown: boolean;
} {
  const taxYear = taxReturn.taxYear ?? 2025;
  const discovery = (taxReturn.incomeDiscovery || {}) as Record<string, string>;
  const inputs: ScreeningInputs = {};

  // Filing status
  if (taxReturn.filingStatus !== undefined) {
    inputs.filingStatus = taxReturn.filingStatus;
    inputs.isMarried =
      taxReturn.filingStatus === FilingStatus.MarriedFilingJointly ||
      taxReturn.filingStatus === FilingStatus.QualifyingSurvivingSpouse;
  }

  // Age bands (derived from DOB; the band is kept, not the date)
  const filerAge = getAgeAtEndOfYear(taxReturn.dateOfBirth, taxYear);
  if (filerAge !== undefined) inputs.age65Plus = filerAge >= 65;
  if (inputs.isMarried) {
    const spouseAge = getAgeAtEndOfYear(taxReturn.spouseDateOfBirth, taxYear);
    if (spouseAge !== undefined) inputs.spouseAge65Plus = spouseAge >= 65;
  }

  // Dependents → age-group presence
  const deps = taxReturn.dependents || [];
  let dependentsKnown = false;
  if (deps.length > 0) {
    dependentsKnown = true;
    inputs.hasDepUnder13 = false;
    inputs.hasDepUnder17 = false;
    inputs.hasDepCollege = false;
    inputs.hasOtherDependent = false;
    for (const dep of deps) {
      const age = getAgeAtEndOfYear(dep.dateOfBirth, taxYear);
      if (age === undefined) { inputs.hasOtherDependent = true; continue; }
      if (age < 13) { inputs.hasDepUnder13 = true; inputs.hasDepUnder17 = true; }
      else if (age < 17) { inputs.hasDepUnder17 = true; }
      else if (age <= 24) { inputs.hasDepCollege = true; }
      else { inputs.hasOtherDependent = true; }
    }
  } else if (discovery['dependents_asked'] === 'yes') {
    dependentsKnown = true;
    inputs.hasDepUnder13 = false;
    inputs.hasDepUnder17 = false;
    inputs.hasDepCollege = false;
    inputs.hasOtherDependent = false;
  }

  // Income-type presence
  const w2 =
    (taxReturn.w2Income || []).length > 0 ? true :
    discovery['w2'] === 'yes' ? true :
    discovery['w2'] === 'no' ? false : undefined;
  const se =
    (taxReturn.income1099NEC || []).length > 0 || (taxReturn.income1099K || []).length > 0 ? true :
    (discovery['1099nec'] === 'yes' || discovery['1099k'] === 'yes') ? true :
    (discovery['1099nec'] === 'no' && discovery['1099k'] === 'no') ? false : undefined;
  if (w2 !== undefined) inputs.hasW2 = w2;
  if (se !== undefined) inputs.hasSelfEmployment = se;
  const incomeKnown = w2 !== undefined && se !== undefined;

  // Foreign tax (from existing investment data only)
  const divForeign = (taxReturn.income1099DIV || []).reduce(
    (s: number, d: { foreignTaxPaid?: number }) => s + (d.foreignTaxPaid || 0), 0);
  const k1Foreign = (taxReturn.incomeK1 || []).reduce(
    (s: number, k: { box15ForeignTaxPaid?: number }) => s + (k.box15ForeignTaxPaid || 0), 0);
  if (divForeign + k1Foreign > 0) inputs.hasForeignTaxPaid = true;

  // Discovery facts already evidenced by entered data (so they show as likely,
  // and we don't ask about them again). Only set TRUE signals; never false.
  if ((taxReturn.studentLoanInterest || 0) > 0) inputs.paidStudentLoanInterest = true;
  if ((taxReturn.iraContribution || 0) > 0) inputs.contributedRetirement = true;
  if ((taxReturn.hsaDeduction || 0) > 0) inputs.hasHDHP = true;
  if ((taxReturn.educatorExpenses || 0) > 0) inputs.isK12Educator = true;

  return { inputs, dependentsKnown, incomeKnown };
}

export function createSession(scope: ScreeningScope, taxReturn: TaxReturn): ScreeningSession {
  const { inputs, dependentsKnown, incomeKnown } = deriveInputsFromReturn(taxReturn);
  return {
    scope,
    inputs,
    askedQuestionIds: [],
    pendingQuestionId: null,
    questionsAsked: 0,
    dependentsKnown,
    incomeKnown,
  };
}

// ─── Discovery option catalog ──────────────────────

interface DiscoveryOption {
  value: string;
  label: string;
  description?: string;
  /** Only show if relevant to prior answers. */
  relevant: (i: ScreeningInputs) => boolean;
  /** True if we already know the answer (don't ask). */
  known: (i: ScreeningInputs) => boolean;
  apply: (i: ScreeningInputs, selected: boolean) => void;
}

const DISCOVERY_OPTIONS: DiscoveryOption[] = [
  {
    value: 'student_loan',
    label: 'Paid student loan interest',
    relevant: () => true,
    known: (i) => i.paidStudentLoanInterest !== undefined,
    apply: (i, s) => { i.paidStudentLoanInterest = s; },
  },
  {
    value: 'retirement',
    label: 'Contributed to an IRA or 401(k)',
    relevant: () => true,
    known: (i) => i.contributedRetirement !== undefined,
    apply: (i, s) => { i.contributedRetirement = s; },
  },
  {
    value: 'tuition',
    label: 'Paid college tuition',
    relevant: (i) => !!i.hasDepCollege,
    known: (i) => i.paidTuition !== undefined,
    apply: (i, s) => { i.paidTuition = s; },
  },
  {
    value: 'dependent_care',
    label: 'Paid for childcare or dependent care',
    relevant: (i) => !!i.hasDepUnder13,
    known: (i) => i.paidDependentCare !== undefined,
    apply: (i, s) => { i.paidDependentCare = s; },
  },
  {
    value: 'hdhp',
    label: 'Have a high-deductible health plan (HSA)',
    relevant: () => true,
    known: (i) => i.hasHDHP !== undefined,
    apply: (i, s) => { i.hasHDHP = s; },
  },
  {
    value: 'marketplace',
    label: 'Bought health insurance on the Marketplace',
    relevant: () => true,
    known: (i) => i.marketplaceInsurance !== undefined,
    apply: (i, s) => { i.marketplaceInsurance = s; },
  },
  {
    value: 'tips_ot',
    label: 'Earned tips or overtime pay',
    relevant: (i) => !!i.hasW2,
    known: (i) => i.earnedTipsOrOvertime !== undefined,
    apply: (i, s) => { i.earnedTipsOrOvertime = s; },
  },
  {
    value: 'educator',
    label: 'Work as a K-12 teacher',
    relevant: (i) => !!i.hasW2,
    known: (i) => i.isK12Educator !== undefined,
    apply: (i, s) => { i.isK12Educator = s; },
  },
  {
    value: 'ev',
    label: 'Bought an electric or plug-in hybrid vehicle',
    relevant: () => true,
    known: (i) => i.boughtEV !== undefined,
    apply: (i, s) => { i.boughtEV = s; },
  },
  {
    value: 'clean_energy',
    label: 'Installed solar or other clean energy',
    relevant: () => true,
    known: (i) => i.installedCleanEnergy !== undefined,
    apply: (i, s) => { i.installedCleanEnergy = s; },
  },
  {
    value: 'adoption',
    label: 'Adopted a child',
    relevant: () => true,
    known: (i) => i.adoptedChild !== undefined,
    apply: (i, s) => { i.adoptedChild = s; },
  },
];

/** Discovery options that are relevant and not yet known. Capped for tidiness. */
function activeDiscoveryOptions(inputs: ScreeningInputs): DiscoveryOption[] {
  return DISCOVERY_OPTIONS.filter((o) => o.relevant(inputs) && !o.known(inputs)).slice(0, 8);
}

// ─── Question planning ─────────────────────────────

function needsFilingStatus(s: ScreeningSession): boolean {
  if (s.askedQuestionIds.includes('filing_status')) return false;
  return s.inputs.filingStatus == null;
}
function needsAge(s: ScreeningSession): boolean {
  if (s.askedQuestionIds.includes('age')) return false;
  if (s.inputs.age65Plus === undefined) return true;
  if (isMarried(s.inputs) && s.inputs.spouseAge65Plus === undefined) return true;
  return false;
}
function needsDependents(s: ScreeningSession): boolean {
  if (s.askedQuestionIds.includes('dependents')) return false;
  return !s.dependentsKnown;
}
function needsIncome(s: ScreeningSession): boolean {
  if (s.askedQuestionIds.includes('income')) return false;
  return !s.incomeKnown;
}
function needsDiscovery(s: ScreeningSession): boolean {
  return !s.askedQuestionIds.includes('discovery') && activeDiscoveryOptions(s.inputs).length > 0;
}

function buildFilingStatusQuestion(): ScreeningQuestion {
  return {
    id: 'filing_status',
    message: "Let's see what you might qualify for. First — what's your filing status for 2025?",
    options: [
      { label: 'Single', value: 'single' },
      { label: 'Married filing jointly', value: 'mfj' },
      { label: 'Married filing separately', value: 'mfs' },
      { label: 'Head of household', value: 'hoh' },
      { label: 'Qualifying surviving spouse', value: 'qss' },
    ],
  };
}

function buildAgeQuestion(s: ScreeningSession): ScreeningQuestion {
  if (isMarried(s.inputs)) {
    return {
      id: 'age',
      message: 'Will either of you be 65 or older by the end of 2025?',
      multiSelect: true,
      options: [
        { label: "I'm 65 or older", value: 'self' },
        { label: 'My spouse is 65 or older', value: 'spouse' },
        { label: 'Neither of us', value: 'none' },
      ],
    };
  }
  return {
    id: 'age',
    message: 'Will you be 65 or older by the end of 2025?',
    options: [
      { label: 'Yes', value: 'yes' },
      { label: 'No', value: 'no' },
    ],
  };
}

function buildDependentsQuestion(): ScreeningQuestion {
  return {
    id: 'dependents',
    message: 'Do you support any of these? Select all that apply.',
    multiSelect: true,
    options: [
      { label: 'A child under 13', value: 'child_u13', description: 'Childcare may also qualify' },
      { label: 'A child 13–16', value: 'child_13_16' },
      { label: 'A student in college (17–24)', value: 'college' },
      { label: 'Another dependent', value: 'other_dep', description: 'Parent, relative, older child' },
      { label: 'No dependents', value: 'none' },
    ],
  };
}

function buildIncomeQuestion(): ScreeningQuestion {
  return {
    id: 'income',
    message: 'Which of these describe your 2025 income? Select all that apply.',
    multiSelect: true,
    options: [
      { label: 'A regular job (W-2)', value: 'w2' },
      { label: 'Freelance, gig, or self-employment', value: 'se' },
      { label: 'Investments with foreign tax paid', value: 'foreign' },
      { label: 'Retirement or Social Security', value: 'retirement' },
      { label: 'None of these', value: 'none' },
    ],
  };
}

function buildDiscoveryQuestion(s: ScreeningSession): ScreeningQuestion {
  const opts = activeDiscoveryOptions(s.inputs);
  return {
    id: 'discovery',
    message: 'Last one — did any of these apply to you in 2025? Select all that apply.',
    multiSelect: true,
    options: [
      ...opts.map((o) => ({ label: o.label, value: o.value, description: o.description })),
      { label: 'None of these', value: 'none' },
    ],
  };
}

/**
 * Decide the next question to ask, or null when screening is ready for results.
 */
export function planNextQuestion(s: ScreeningSession): ScreeningQuestion | null {
  if (s.questionsAsked >= MAX_QUESTIONS) return null;

  if (needsFilingStatus(s)) return buildFilingStatusQuestion();
  if (needsAge(s)) return buildAgeQuestion(s);
  if (needsDependents(s)) return buildDependentsQuestion();
  if (needsIncome(s)) return buildIncomeQuestion();
  if (needsDiscovery(s)) return buildDiscoveryQuestion(s);

  return null;
}

// ─── Answer parsing ────────────────────────────────

/**
 * Multi-select answers arrive as a comma-joined string of option LABELS
 * (per OptionPills), or the "none" value. Match by label inclusion.
 */
function parseMultiSelect(answer: string, options: ChatOption[]): Set<string> {
  const selected = new Set<string>();
  const lower = answer.toLowerCase();
  if (lower === 'none' || lower.trim() === '') return selected;
  for (const opt of options) {
    if (opt.value === 'none') continue;
    if (lower.includes(opt.label.toLowerCase())) {
      selected.add(opt.value ?? opt.label);
    }
  }
  return selected;
}

/**
 * Apply the user's answer to the pending question and advance the session.
 * Returns a NEW session object (immutable update).
 */
export function applyAnswer(session: ScreeningSession, rawValue: string): ScreeningSession {
  const s: ScreeningSession = {
    ...session,
    inputs: { ...session.inputs },
    askedQuestionIds: [...session.askedQuestionIds],
  };
  const qId = session.pendingQuestionId;
  if (!qId) return s;

  const value = rawValue.trim();

  switch (qId) {
    case 'filing_status': {
      const fs = FILING_STATUS_VALUES[value.toLowerCase()];
      if (fs !== undefined) {
        s.inputs.filingStatus = fs;
        s.inputs.isMarried =
          fs === FilingStatus.MarriedFilingJointly || fs === FilingStatus.QualifyingSurvivingSpouse;
      }
      break;
    }
    case 'age': {
      if (isMarried(s.inputs)) {
        const sel = parseMultiSelect(value, buildAgeQuestion(s).options);
        s.inputs.age65Plus = sel.has('self');
        s.inputs.spouseAge65Plus = sel.has('spouse');
      } else {
        s.inputs.age65Plus = value.toLowerCase() === 'yes';
      }
      break;
    }
    case 'dependents': {
      const sel = parseMultiSelect(value, buildDependentsQuestion().options);
      s.inputs.hasDepUnder13 = sel.has('child_u13');
      s.inputs.hasDepUnder17 = sel.has('child_u13') || sel.has('child_13_16');
      s.inputs.hasDepCollege = sel.has('college');
      s.inputs.hasOtherDependent = sel.has('other_dep');
      s.dependentsKnown = true;
      break;
    }
    case 'income': {
      const sel = parseMultiSelect(value, buildIncomeQuestion().options);
      s.inputs.hasW2 = sel.has('w2');
      s.inputs.hasSelfEmployment = sel.has('se');
      if (sel.has('foreign')) s.inputs.hasForeignTaxPaid = true;
      s.incomeKnown = true;
      break;
    }
    case 'discovery': {
      // Use the option set that was actually shown for this turn.
      const shown = activeDiscoveryOptions(session.inputs);
      const opts = buildDiscoveryQuestion(session).options;
      const sel = parseMultiSelect(value, opts);
      for (const o of shown) {
        o.apply(s.inputs, sel.has(o.value));
      }
      break;
    }
  }

  s.askedQuestionIds.push(qId);
  s.questionsAsked += 1;
  s.pendingQuestionId = null;
  return s;
}
