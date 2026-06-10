/**
 * Proactive Nudge Service
 *
 * Transforms deterministic suggestions and warnings into prioritized,
 * contextual nudges. The suggestion engine (getSuggestions) serves as the
 * eligibility gate — no nudge can surface without passing deterministic checks.
 *
 * Design constraint (from GPT-5.2): "LLM generates suggestions that must pass
 * deterministic eligibility checks before being shown." The LLM only enriches
 * descriptions; it never decides whether to show a nudge.
 */
import type { TaxReturn, CalculationResult } from '@nimbus/engine';
export interface ProactiveNudge {
    id: string;
    source: 'suggestion' | 'milestone';
    priority: 'high' | 'medium' | 'low';
    title: string;
    description: string;
    estimatedBenefit?: number;
    stepId?: string;
    discoveryKey?: string;
    chatPrompt: string;
    dismissible: boolean;
    variant: 'tip' | 'info';
}
/**
 * Compute proactive nudges from the current tax return state.
 * Pure function — deterministic, no side effects.
 *
 * @param currentStepId - Current wizard step (for context relevance)
 * @param currentSection - Current wizard section (for priority boosting)
 */
export declare function computeNudges(taxReturn: TaxReturn, calculation: CalculationResult | null | undefined, currentStepId: string, currentSection: string, dismissedIds?: string[]): ProactiveNudge[];
/**
 * Get only nudges relevant to the current step context.
 * Limits to maxVisible to prevent nudge fatigue.
 */
export declare function getNudgesForStep(nudges: ProactiveNudge[], currentSection: string, maxVisible?: number): ProactiveNudge[];
