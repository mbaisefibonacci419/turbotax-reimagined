/**
 * Eligibility Screening Engine (the "brain")
 *
 * Pure, deterministic function that screens a filer for credits and deductions
 * using ONLY Tier-1 categorical inputs (filing status, age bands, dependent
 * age-group presence, income-type presence, and a few yes/no discovery answers).
 *
 * HARD CONSTRAINTS (Eligibility Determination Agent boundaries):
 *  - The LLM never calls this and never decides eligibility — this module is the
 *    sole source of truth for eligibility.
 *  - It NEVER consumes actual dollar amounts. Benefit ranges are static statutory
 *    maximums pulled from the deterministic tax engine constants (@nimbus/engine),
 *    never computed from the filer's money.
 *  - It gives no advice, no optimization, no data-entry guidance — only a status,
 *    a benefit range, a confidence, the qualifying inputs, and a plain-language why.
 *
 * Statuses:
 *  - eligible   : categorical conditions clearly met, no unknown gating amount.
 *  - likely     : qualifying trigger present; only an amount (which we don't ask
 *                 for) remains to confirm the dollar value.
 *  - need_info  : a yes/no discovery answer is still missing, OR the benefit is
 *                 gated by an income amount we deliberately never collect.
 *  - ineligible : a categorical disqualifier is present.
 */

import { FilingStatus } from '@nimbus/engine';
import {
  CHILD_TAX_CREDIT,
  DEPENDENT_CARE,
  EDUCATION_CREDITS,
  SAVERS_CREDIT,
  STUDENT_LOAN_INTEREST,
  HSA,
  IRA,
  EDUCATOR_EXPENSES,
  ADOPTION_CREDIT,
  EV_CREDIT,
  SCHEDULE_1A,
  SCHEDULE_R,
  FOREIGN_TAX_CREDIT,
} from '@nimbus/engine';

// ─── Types ─────────────────────────────────────────

export type ScreeningStatus = 'eligible' | 'likely' | 'need_info' | 'ineligible';
export type ScreeningConfidence = 'high' | 'medium' | 'low';
export type ScreeningCategory = 'credit' | 'deduction';

/**
 * Tier-1 categorical inputs. NO dollar amounts, NO exact dates of birth.
 * Age is captured as bands; dependents as age-group presence flags.
 */
export interface ScreeningInputs {
  filingStatus?: FilingStatus;
  /** Convenience: MFJ or QSS. */
  isMarried?: boolean;

  // Age bands (no exact DOB retained)
  age65Plus?: boolean;
  spouseAge65Plus?: boolean;

  // Dependent age-group presence (no names, no counts beyond presence)
  hasDepUnder13?: boolean;
  hasDepUnder17?: boolean;
  hasDepCollege?: boolean;       // 17–24
  hasOtherDependent?: boolean;   // any non-child-tax-credit dependent

  // Income-type presence
  hasW2?: boolean;
  hasSelfEmployment?: boolean;   // 1099-NEC / 1099-K / Schedule C
  hasForeignTaxPaid?: boolean;

  // Targeted yes/no discovery answers (undefined = not asked yet)
  paidStudentLoanInterest?: boolean;
  contributedRetirement?: boolean;
  paidTuition?: boolean;
  paidDependentCare?: boolean;
  hasHDHP?: boolean;
  marketplaceInsurance?: boolean;
  earnedTipsOrOvertime?: boolean;
  boughtEV?: boolean;
  installedCleanEnergy?: boolean;
  isK12Educator?: boolean;
  adoptedChild?: boolean;
}

export interface BenefitRange {
  /** Statutory maximum benefit (per return unless `perUnit` is set). */
  max: number;
  /** Optional lower bound for a typical range. */
  min?: number;
  /** e.g. "per child", "per student". When set, max is per that unit. */
  perUnit?: string;
}

export interface ScreeningResult {
  id: string;
  label: string;
  category: ScreeningCategory;
  status: ScreeningStatus;
  benefitRange?: BenefitRange;
  confidence: ScreeningConfidence;
  /** Human-readable Tier-1 facts that drove this result. */
  qualifyingInputs: string[];
  /** Plain-language explanation of why they (may) qualify. No advice. */
  why: string;
  /** Existing wizard discovery key (for overview highlighting), if any. */
  discoveryKey?: string;
  /** Wizard step to continue in. */
  stepId: string;
}

// ─── Helpers ───────────────────────────────────────

function isMFJ(inputs: ScreeningInputs): boolean {
  if (inputs.isMarried) return true;
  return (
    inputs.filingStatus === FilingStatus.MarriedFilingJointly ||
    inputs.filingStatus === FilingStatus.QualifyingSurvivingSpouse
  );
}

function isMFS(inputs: ScreeningInputs): boolean {
  return inputs.filingStatus === FilingStatus.MarriedFilingSeparately;
}

// ─── Core Screener ─────────────────────────────────

/**
 * Screen all supported credits and deductions from Tier-1 inputs.
 * Returns a result for every item that is at least relevant; clearly
 * irrelevant items are omitted (not surfaced as `ineligible` noise).
 */
export function screenEligibility(inputs: ScreeningInputs): ScreeningResult[] {
  const results: ScreeningResult[] = [];
  const mfj = isMFJ(inputs);
  const mfs = isMFS(inputs);

  // ── 1. Child Tax Credit ──────────────────────────
  if (inputs.hasDepUnder17) {
    results.push({
      id: 'child_tax_credit',
      label: 'Child Tax Credit',
      category: 'credit',
      status: 'likely',
      benefitRange: { max: CHILD_TAX_CREDIT.PER_CHILD, perUnit: 'per child' },
      confidence: 'high',
      qualifyingInputs: ['You have a child under 17'],
      why: `Filers with a qualifying child under 17 can claim up to $${CHILD_TAX_CREDIT.PER_CHILD.toLocaleString()} per child. The final amount depends on your income, which phases the credit out at higher levels.`,
      discoveryKey: 'child_credit',
      stepId: 'child_tax_credit',
    });
  }

  // ── 2. Other Dependent Credit ────────────────────
  if (inputs.hasOtherDependent) {
    results.push({
      id: 'other_dependent_credit',
      label: 'Credit for Other Dependents',
      category: 'credit',
      status: 'likely',
      benefitRange: { max: CHILD_TAX_CREDIT.PER_OTHER_DEPENDENT, perUnit: 'per dependent' },
      confidence: 'high',
      qualifyingInputs: ['You support a dependent who is not a qualifying child'],
      why: `Dependents who don't qualify for the Child Tax Credit (such as older children or relatives) may qualify for up to $${CHILD_TAX_CREDIT.PER_OTHER_DEPENDENT} each.`,
      discoveryKey: 'child_credit',
      stepId: 'child_tax_credit',
    });
  }

  // ── 3. Child & Dependent Care Credit ─────────────
  if (inputs.hasDepUnder13) {
    const hasEarned = !!inputs.hasW2 || !!inputs.hasSelfEmployment;
    const careMax = Math.round(DEPENDENT_CARE.EXPENSE_LIMIT_TWO_PLUS * DEPENDENT_CARE.MAX_RATE); // up to $2,100
    if (hasEarned) {
      const known = inputs.paidDependentCare === true;
      results.push({
        id: 'dependent_care',
        label: 'Child & Dependent Care Credit',
        category: 'credit',
        status: known ? 'likely' : 'need_info',
        benefitRange: { max: careMax },
        confidence: 'medium',
        qualifyingInputs: [
          'You have a dependent under 13',
          'You have earned income',
        ],
        why: known
          ? 'You paid for care for a dependent under 13 so you could work — this credit covers a percentage of those costs.'
          : 'If you paid for childcare or dependent care so you (and your spouse) could work, you may qualify. We just need to know whether you paid for care.',
        discoveryKey: 'dependent_care',
        stepId: 'dependent_care',
      });
    }
  }

  // ── 4. Earned Income Tax Credit ──────────────────
  if (!mfs && (inputs.hasW2 || inputs.hasSelfEmployment)) {
    const hasQualifyingChild = !!inputs.hasDepUnder17 || !!inputs.hasDepCollege;
    results.push({
      id: 'eitc',
      label: 'Earned Income Tax Credit',
      category: 'credit',
      status: 'need_info',
      confidence: 'low',
      qualifyingInputs: [
        'You have earned income',
        ...(hasQualifyingChild ? ['You have a qualifying child'] : []),
      ],
      why: 'This refundable credit is for low-to-moderate income workers. Whether you qualify — and how much — depends on your income, which we calculate automatically once it\'s entered.',
      discoveryKey: 'eitc',
      stepId: 'credits_overview',
    });
  }

  // ── 5. Education Credits (AOTC / LLC) ────────────
  if (!mfs && inputs.hasDepCollege) {
    const known = inputs.paidTuition === true;
    results.push({
      id: 'education_credit',
      label: 'Education Credits (AOTC / Lifetime Learning)',
      category: 'credit',
      status: known ? 'likely' : 'need_info',
      benefitRange: { max: EDUCATION_CREDITS.AOTC_MAX, perUnit: 'per student' },
      confidence: 'medium',
      qualifyingInputs: ['You have a dependent of college age (17–24)'],
      why: known
        ? `You paid college tuition for a dependent — the American Opportunity Credit is worth up to $${EDUCATION_CREDITS.AOTC_MAX.toLocaleString()} per student.`
        : `If you paid college tuition or fees for a dependent, education credits are worth up to $${EDUCATION_CREDITS.AOTC_MAX.toLocaleString()} per student.`,
      discoveryKey: 'education_credit',
      stepId: 'education_credits',
    });
  }

  // ── 6. Saver's Credit ────────────────────────────
  if (inputs.contributedRetirement !== undefined && inputs.contributedRetirement) {
    const max = mfj ? SAVERS_CREDIT.CONTRIBUTION_LIMIT_MFJ * 0.5 : SAVERS_CREDIT.CONTRIBUTION_LIMIT * 0.5;
    results.push({
      id: 'savers_credit',
      label: "Saver's Credit",
      category: 'credit',
      status: 'need_info',
      benefitRange: { max },
      confidence: 'medium',
      qualifyingInputs: ['You contributed to a retirement account'],
      why: 'Low-to-moderate income savers can get a credit worth up to 50% of their retirement contributions. The rate depends on your income, which determines whether you qualify.',
      discoveryKey: 'savers_credit',
      stepId: 'savers_credit',
    });
  }

  // ── 7. Elderly / Disabled Credit ─────────────────
  if (inputs.age65Plus || inputs.spouseAge65Plus) {
    results.push({
      id: 'elderly_disabled',
      label: 'Credit for the Elderly or Disabled',
      category: 'credit',
      status: 'need_info',
      benefitRange: { max: Math.round(SCHEDULE_R.INITIAL_AMOUNT_MFJ_BOTH * SCHEDULE_R.CREDIT_RATE) },
      confidence: 'low',
      qualifyingInputs: [inputs.age65Plus ? 'You are 65 or older' : 'Your spouse is 65 or older'],
      why: 'Filers 65+ (or permanently disabled) with limited income may qualify for this credit. Eligibility is tightly income-restricted, so it depends on the income you enter.',
      discoveryKey: 'elderly_disabled',
      stepId: 'elderly_disabled',
    });
  }

  // ── 8. Premium Tax Credit ────────────────────────
  if (inputs.marketplaceInsurance !== undefined && inputs.marketplaceInsurance) {
    results.push({
      id: 'premium_tax_credit',
      label: 'Premium Tax Credit',
      category: 'credit',
      status: 'need_info',
      confidence: 'medium',
      qualifyingInputs: ['You had Marketplace health insurance (Form 1095-A)'],
      why: 'If you bought health insurance through the Marketplace, this credit helps cover premiums. The amount is reconciled from your 1095-A and income.',
      discoveryKey: 'premium_tax_credit',
      stepId: 'premium_tax_credit',
    });
  }

  // ── 9. Adoption Credit ───────────────────────────
  if (inputs.adoptedChild !== undefined && inputs.adoptedChild) {
    results.push({
      id: 'adoption_credit',
      label: 'Adoption Credit',
      category: 'credit',
      status: 'likely',
      benefitRange: { max: ADOPTION_CREDIT.MAX_CREDIT, perUnit: 'per child' },
      confidence: 'medium',
      qualifyingInputs: ['You adopted or began adopting a child'],
      why: `Qualified adoption expenses can be credited up to $${ADOPTION_CREDIT.MAX_CREDIT.toLocaleString()} per child, subject to an income phase-out at higher incomes.`,
      discoveryKey: 'adoption_credit',
      stepId: 'adoption_credit',
    });
  }

  // ── 10. Clean Vehicle (EV) Credit ────────────────
  if (inputs.boughtEV !== undefined && inputs.boughtEV) {
    results.push({
      id: 'ev_credit',
      label: 'Clean Vehicle Credit',
      category: 'credit',
      status: 'need_info',
      benefitRange: { max: EV_CREDIT.NEW_VEHICLE_MAX },
      confidence: 'medium',
      qualifyingInputs: ['You bought an electric or plug-in hybrid vehicle'],
      why: `New clean vehicles can qualify for up to $${EV_CREDIT.NEW_VEHICLE_MAX.toLocaleString()} (used up to $${EV_CREDIT.USED_VEHICLE_MAX.toLocaleString()}). Eligibility depends on the vehicle's price, the model, and your income.`,
      discoveryKey: 'ev_credit',
      stepId: 'ev_credit',
    });
  }

  // ── 11. Residential Clean Energy Credit ──────────
  if (inputs.installedCleanEnergy !== undefined && inputs.installedCleanEnergy) {
    results.push({
      id: 'clean_energy',
      label: 'Residential Clean Energy Credit',
      category: 'credit',
      status: 'likely',
      confidence: 'medium',
      qualifyingInputs: ['You installed solar, battery, or other clean energy'],
      why: 'Solar, battery storage, geothermal, and similar systems qualify for a credit worth 30% of the cost. The dollar value depends on what you spent.',
      discoveryKey: 'clean_energy',
      stepId: 'clean_energy',
    });
  }

  // ── 12. Foreign Tax Credit ───────────────────────
  if (inputs.hasForeignTaxPaid !== undefined && inputs.hasForeignTaxPaid) {
    results.push({
      id: 'foreign_tax_credit',
      label: 'Foreign Tax Credit',
      category: 'credit',
      status: 'likely',
      benefitRange: { max: mfj ? FOREIGN_TAX_CREDIT.SIMPLIFIED_ELECTION_LIMIT_MFJ : FOREIGN_TAX_CREDIT.SIMPLIFIED_ELECTION_LIMIT },
      confidence: 'medium',
      qualifyingInputs: ['You paid income tax to a foreign country'],
      why: 'Tax paid to a foreign country (often shown on a 1099-DIV or K-1) can be claimed as a credit to avoid double taxation.',
      discoveryKey: 'foreign_tax_credit',
      stepId: 'foreign_tax_credit',
    });
  }

  // ── 13. Student Loan Interest Deduction ──────────
  if (inputs.paidStudentLoanInterest !== undefined && inputs.paidStudentLoanInterest) {
    results.push({
      id: 'student_loan',
      label: 'Student Loan Interest',
      category: 'deduction',
      status: 'likely',
      benefitRange: { max: STUDENT_LOAN_INTEREST.MAX_DEDUCTION },
      confidence: 'high',
      qualifyingInputs: ['You paid interest on student loans'],
      why: `You can deduct up to $${STUDENT_LOAN_INTEREST.MAX_DEDUCTION.toLocaleString()} of student loan interest — even without itemizing. It phases out at higher incomes.`,
      discoveryKey: 'ded_student_loan',
      stepId: 'student_loan_ded',
    });
  }

  // ── 14. HSA Contributions ────────────────────────
  if (inputs.hasHDHP !== undefined && inputs.hasHDHP) {
    results.push({
      id: 'hsa',
      label: 'HSA Contributions',
      category: 'deduction',
      status: 'need_info',
      benefitRange: { min: HSA.INDIVIDUAL_LIMIT, max: HSA.FAMILY_LIMIT },
      confidence: 'medium',
      qualifyingInputs: ['You have a high-deductible health plan'],
      why: `With an HDHP, HSA contributions are deductible up to $${HSA.INDIVIDUAL_LIMIT.toLocaleString()} (self) / $${HSA.FAMILY_LIMIT.toLocaleString()} (family). The deduction depends on how much you contributed.`,
      discoveryKey: 'ded_hsa',
      stepId: 'hsa_contributions',
    });
  }

  // ── 15. IRA Contributions ────────────────────────
  if (inputs.contributedRetirement !== undefined && inputs.contributedRetirement) {
    results.push({
      id: 'ira',
      label: 'IRA Contributions',
      category: 'deduction',
      status: 'need_info',
      benefitRange: { max: IRA.MAX_CONTRIBUTION },
      confidence: 'medium',
      qualifyingInputs: ['You contributed to a retirement account'],
      why: `Traditional IRA contributions may be deductible up to $${IRA.MAX_CONTRIBUTION.toLocaleString()}. Deductibility depends on your income and whether you're covered by a workplace plan.`,
      discoveryKey: 'ded_ira',
      stepId: 'ira_contribution_ded',
    });
  }

  // ── 16. Educator Expenses ────────────────────────
  if (inputs.isK12Educator !== undefined && inputs.isK12Educator) {
    results.push({
      id: 'educator',
      label: 'Educator Expenses',
      category: 'deduction',
      status: 'likely',
      benefitRange: { max: EDUCATOR_EXPENSES.MAX_DEDUCTION },
      confidence: 'high',
      qualifyingInputs: ['You are a K-12 educator'],
      why: `K-12 teachers can deduct up to $${EDUCATOR_EXPENSES.MAX_DEDUCTION} of classroom supplies they paid for out of pocket.`,
      discoveryKey: 'ded_educator',
      stepId: 'educator_expenses_ded',
    });
  }

  // ── 17. Senior Deduction (OBBBA) ─────────────────
  if (inputs.age65Plus || inputs.spouseAge65Plus) {
    const both = inputs.age65Plus && inputs.spouseAge65Plus;
    results.push({
      id: 'senior_deduction',
      label: 'Enhanced Senior Deduction (2025)',
      category: 'deduction',
      status: 'likely',
      benefitRange: { max: SCHEDULE_1A.SENIOR_AMOUNT * (both ? 2 : 1) },
      confidence: 'high',
      qualifyingInputs: [both ? 'You and your spouse are both 65+' : 'You (or your spouse) are 65 or older'],
      why: `New for 2025, filers 65+ get an extra deduction of up to $${SCHEDULE_1A.SENIOR_AMOUNT.toLocaleString()} per qualifying person. It phases out at higher incomes.`,
      discoveryKey: 'schedule1a',
      stepId: 'schedule1a',
    });
  }

  // ── 18. No Tax on Tips / Overtime (OBBBA) ────────
  if (inputs.earnedTipsOrOvertime !== undefined && inputs.earnedTipsOrOvertime) {
    results.push({
      id: 'tips_overtime',
      label: 'No Tax on Tips / Overtime (2025)',
      category: 'deduction',
      status: 'likely',
      benefitRange: { max: SCHEDULE_1A.TIPS_CAP },
      confidence: 'medium',
      qualifyingInputs: ['You earned tips or overtime pay'],
      why: `Under the 2025 One Big Beautiful Bill Act, qualified tips (up to $${SCHEDULE_1A.TIPS_CAP.toLocaleString()}) and overtime pay may be deductible. The amount depends on what you earned.`,
      discoveryKey: 'schedule1a',
      stepId: 'schedule1a',
    });
  }

  return results;
}

// ─── Display helpers ───────────────────────────────

/**
 * Keep only the results that match the requested scope. Deductions screening
 * shows deductions; credits screening shows credits. Screening is run for both
 * categories internally, but each entry point presents only its own category.
 */
export function filterResultsByScope(
  results: ScreeningResult[],
  scope: 'credits' | 'deductions',
): ScreeningResult[] {
  const category: ScreeningCategory = scope === 'credits' ? 'credit' : 'deduction';
  return results.filter((r) => r.category === category);
}

/** Items the filer clearly qualifies for (show prominently). */
export function getQualifyingResults(results: ScreeningResult[]): ScreeningResult[] {
  return results.filter((r) => r.status === 'eligible' || r.status === 'likely');
}

/** Items that need one more answer before we can say. */
export function getNeedInfoResults(results: ScreeningResult[]): ScreeningResult[] {
  return results.filter((r) => r.status === 'need_info');
}

/**
 * Build a lookup of recommended items by their wizard discovery key, scoped to
 * one overview (credit/deduction). Used to badge + reorder the overview cards.
 * Only includes items the filer qualifies for or needs more info on.
 */
export function getRecommendedByKey(
  results: ScreeningResult[] | undefined,
  category: ScreeningCategory,
): Map<string, ScreeningResult> {
  const map = new Map<string, ScreeningResult>();
  if (!results) return map;
  for (const r of results) {
    if (r.category !== category) continue;
    if (r.status === 'ineligible') continue;
    if (!r.discoveryKey) continue;
    // Prefer the strongest status if two results share a discovery key.
    const existing = map.get(r.discoveryKey);
    if (!existing || statusRank(r.status) > statusRank(existing.status)) {
      map.set(r.discoveryKey, r);
    }
  }
  return map;
}

function statusRank(s: ScreeningStatus): number {
  switch (s) {
    case 'eligible': return 3;
    case 'likely': return 2;
    case 'need_info': return 1;
    default: return 0;
  }
}

/** Format a benefit range for display, e.g. "up to $2,200 per child". */
export function formatBenefitRange(range?: BenefitRange): string | null {
  if (!range) return null;
  const max = `$${Math.round(range.max).toLocaleString()}`;
  const unit = range.perUnit ? ` ${range.perUnit}` : '';
  if (range.min != null && range.min !== range.max) {
    return `$${Math.round(range.min).toLocaleString()}–${max}${unit}`;
  }
  return `up to ${max}${unit}`;
}
