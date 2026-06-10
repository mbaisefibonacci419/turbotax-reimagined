/**
 * Proactive Message Engine — evaluates whether to surface a contextual
 * Nimbus AI assistant message after wizard step transitions.
 */
import type { TaxReturn, CalculationResult } from '@nimbus/engine';
export type ProactiveTrigger = {
    type: 'high_value_suggestion';
    title: string;
    benefit: number;
    chatPrompt: string;
} | {
    type: 'new_warning';
    title: string;
    message: string;
    stepId: string;
} | {
    type: 'audit_risk_crossing';
    level: string;
    message: string;
} | {
    type: 'approaching_deadline';
    name: string;
    daysLeft: number;
    message: string;
};
export interface ProactiveEvalResult {
    trigger: ProactiveTrigger;
    message: string;
    category: string;
}
/**
 * Evaluate proactive AI surfacing rules. At most one trigger per call (priority order).
 */
export declare function evaluateProactive(taxReturn: TaxReturn, calculation: CalculationResult | null | undefined, _currentStepId: string, _currentSection: string, previousWarningCount: number, dismissedCategories: Set<string>, now?: Date): ProactiveEvalResult | null;
