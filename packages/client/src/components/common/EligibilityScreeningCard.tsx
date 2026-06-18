/**
 * EligibilityScreeningCard — the on-demand entry point for the Eligibility
 * Determination Agent. Shown on the Deductions and Credits overview screens.
 *
 * Unlike the proactive NudgeCard pipeline, this never auto-surfaces a specific
 * benefit — it's a single CTA that launches conversational screening in the AI
 * assistant panel. Dismissible per scope.
 */

import { X, ArrowRight, RotateCcw } from 'lucide-react';
import { useTaxReturnStore } from '../../store/taxReturnStore';
import { useChatStore } from '../../store/chatStore';

interface Props {
  scope: 'credits' | 'deductions';
}

export default function EligibilityScreeningCard({ scope }: Props) {
  const { taxReturn, updateField } = useTaxReturnStore();
  const openPanel = useChatStore((s) => s.openPanel);
  const sendMessage = useChatStore((s) => s.sendMessage);

  if (!taxReturn) return null;

  const dismissKey = `screening:${scope}`;
  const dismissed = (taxReturn.dismissedNudges || []).includes(dismissKey);
  if (dismissed) return null;

  const record = taxReturn.eligibilityScreening;
  const hasResults = !!record && record.scope === scope;
  const recommendedCount = hasResults
    ? record!.results.filter(
        (r) =>
          r.category === (scope === 'credits' ? 'credit' : 'deduction') &&
          (r.status === 'eligible' || r.status === 'likely' || r.status === 'need_info'),
      ).length
    : 0;

  const noun = scope === 'credits' ? 'credits' : 'deductions';

  const dismiss = () => {
    const current = taxReturn.dismissedNudges || [];
    if (!current.includes(dismissKey)) {
      updateField('dismissedNudges', [...current, dismissKey]);
    }
  };

  return (
    <div className="relative rounded-lg border border-telos-blue-600/30 bg-telos-blue-600/10 p-4 mt-4">
      <button
        onClick={dismiss}
        className="absolute top-2.5 right-2.5 p-1 rounded-md text-slate-400 hover:text-slate-200 hover:bg-white/5 transition-colors"
        aria-label="Dismiss"
      >
        <X className="w-3.5 h-3.5" />
      </button>

      <div className="flex items-start gap-3 pr-6">
        <div className="flex-1 min-w-0">
          <h3 className="text-sm font-semibold text-slate-200">
            Not sure which {noun} apply to you?
          </h3>
          <p className="text-xs text-slate-400 mt-1 leading-relaxed">
            {hasResults
              ? `Your screening flagged ${recommendedCount} ${noun} to look at — see the Recommended badges below, or run it again if your situation changed.`
              : `Answer a few quick questions and I'll check 15+ ${noun} you may qualify for. Takes about a minute — nothing is selected for you.`}
          </p>

          <button
            onClick={() => {
              openPanel();
              // Always send a scope-explicit query so the eligibility agent is
              // invoked for the correct category, regardless of prior screening.
              void sendMessage(
                hasResults
                  ? `Run ${noun} screening again`
                  : `Find ${noun} I qualify for`,
              );
            }}
            className="group mt-3 inline-flex rounded-full p-[1.5px] transition-transform active:scale-[0.97]
                       bg-[linear-gradient(90deg,#ff6b6b,#ffd166,#06d6a0,#4cc9f0,#b388ff,#ff6b6b)]
                       bg-[length:200%_100%] hover:bg-[position:100%_0] [transition:background-position_0.6s_ease,transform_0.1s_ease]"
          >
            <span
              className="inline-flex items-center gap-1.5 text-xs font-semibold px-3.5 py-2 rounded-full
                         bg-white text-slate-100 group-hover:bg-white/90 transition-colors"
            >
              {hasResults && <RotateCcw className="w-3.5 h-3.5" />}
              {hasResults ? 'Run screening again' : `Find ${noun} I qualify for`}
              {!hasResults && <ArrowRight className="w-3.5 h-3.5" />}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
