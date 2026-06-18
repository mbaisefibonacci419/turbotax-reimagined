/**
 * EligibilityResultsCard — structured results from the Eligibility
 * Determination Agent, rendered inside an assistant chat bubble.
 *
 * The "brain" (deterministic screener) produced these results; this component
 * is purely presentational + a one-click CTA into the interview flow. It never
 * computes eligibility and never auto-selects anything for the filer.
 */

import { useState } from 'react';
import { CheckCircle2, HelpCircle, ChevronDown, ChevronRight, ArrowRight, Sparkles } from 'lucide-react';
import type { EligibilityScreeningResult } from '@nimbus/engine';
import { useTaxReturnStore } from '../../store/taxReturnStore';
import { formatBenefitRange } from '../../services/eligibility/eligibilityScreening';

const CARD_BORDER = '#D5E2EE';

interface Props {
  scope: 'credits' | 'deductions';
  results: EligibilityScreeningResult[];
}

function ResultRow({ r, onGo }: { r: EligibilityScreeningResult; onGo: (stepId: string) => void }) {
  const [expanded, setExpanded] = useState(false);
  const benefit = formatBenefitRange(r.benefitRange);
  const isQualifying = r.status === 'eligible' || r.status === 'likely';

  return (
    <div className="rounded-lg border bg-white overflow-hidden" style={{ borderColor: CARD_BORDER }}>
      <button
        onClick={() => setExpanded((v) => !v)}
        className="w-full flex items-center gap-2 px-3 py-2 text-left hover:bg-[#0077C5]/[0.04] transition-colors"
      >
        <div className="mt-0.5 shrink-0">
          {isQualifying
            ? <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            : <HelpCircle className="w-4 h-4 text-amber-500" />}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-[13px] font-semibold" style={{ color: '#1F2A30' }}>{r.label}</span>
            <span
              className={`text-[10px] px-1.5 py-0.5 rounded-full font-medium ${
                isQualifying
                  ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                  : 'bg-amber-50 text-amber-700 border border-amber-200'
              }`}
            >
              {r.status === 'eligible' ? 'Eligible' : r.status === 'likely' ? 'Likely' : 'Needs info'}
            </span>
          </div>
          {benefit && (
            <div className="text-[11px] mt-0.5" style={{ color: '#0066AB' }}>{benefit}</div>
          )}
        </div>
        {expanded
          ? <ChevronDown className="w-4 h-4 shrink-0" style={{ color: '#5D686F' }} />
          : <ChevronRight className="w-4 h-4 shrink-0" style={{ color: '#5D686F' }} />}
      </button>

      {expanded && (
        <div className="px-3 pb-3 pt-1 border-t" style={{ borderColor: CARD_BORDER }}>
          <p className="text-[12px] leading-relaxed" style={{ color: '#3D4852' }}>{r.why}</p>
          {r.qualifyingInputs.length > 0 && (
            <ul className="mt-2 space-y-0.5">
              {r.qualifyingInputs.map((q, i) => (
                <li key={i} className="text-[11px] flex items-center gap-1.5" style={{ color: '#5D686F' }}>
                  <span className="w-1 h-1 rounded-full bg-[#0077C5] shrink-0" />
                  {q}
                </li>
              ))}
            </ul>
          )}
          <button
            onClick={() => onGo(r.stepId)}
            className="mt-2.5 inline-flex items-center gap-1.5 text-[12px] font-semibold px-3 py-1.5 rounded-lg
                       bg-[#0077C5] hover:bg-[#0066AB] text-white transition-colors active:scale-[0.97]"
          >
            Start this
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      )}
    </div>
  );
}

export default function EligibilityResultsCard({ scope, results }: Props) {
  const goToStep = useTaxReturnStore((s) => s.goToStep);

  const qualifying = results.filter((r) => r.status === 'eligible' || r.status === 'likely');
  const needInfo = results.filter((r) => r.status === 'need_info');

  if (qualifying.length === 0 && needInfo.length === 0) return null;

  const overviewStep = scope === 'credits' ? 'credits_overview' : 'deductions_discovery';
  const overviewLabel = scope === 'credits' ? 'all credits' : 'all deductions';

  return (
    <div className="mt-3 pt-3 space-y-3" style={{ borderTop: `1px solid ${CARD_BORDER}` }}>
      {qualifying.length > 0 && (
        <div>
          <div className="flex items-center gap-1.5 mb-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
            <span className="text-[11px] font-bold uppercase tracking-wide" style={{ color: '#3D4852' }}>
              You likely qualify for
            </span>
          </div>
          <div className="space-y-1.5">
            {qualifying.map((r) => <ResultRow key={r.id} r={r} onGo={goToStep} />)}
          </div>
        </div>
      )}

      {needInfo.length > 0 && (
        <div>
          <div className="flex items-center gap-1.5 mb-1.5">
            <HelpCircle className="w-3.5 h-3.5 text-amber-500" />
            <span className="text-[11px] font-bold uppercase tracking-wide" style={{ color: '#3D4852' }}>
              May apply — needs a bit more info
            </span>
          </div>
          <div className="space-y-1.5">
            {needInfo.map((r) => <ResultRow key={r.id} r={r} onGo={goToStep} />)}
          </div>
        </div>
      )}

      <button
        onClick={() => goToStep(overviewStep)}
        className="w-full inline-flex items-center justify-center gap-1.5 text-[12px] font-semibold px-3 py-2 rounded-lg
                   border border-[#0077C5]/40 bg-white hover:bg-[#0077C5]/10 text-[#0066AB] transition-colors"
      >
        <Sparkles className="w-3.5 h-3.5" />
        Review {overviewLabel} on the overview
      </button>
    </div>
  );
}
