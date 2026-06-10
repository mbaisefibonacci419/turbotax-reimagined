/**
 * Deduction/Credit Suggestion Service
 *
 * Pure function that analyzes a TaxReturn + CalculationResult and returns
 * proactive suggestions for credits and deductions the user likely qualifies
 * for but hasn't opted into.
 *
 * Inverts the warning system pattern: instead of "something looks wrong,"
 * this asks "what benefits might you be missing?"
 *
 * HOW TO ADD A NEW SUGGESTION:
 * 1. Add a detection block in getSuggestions() below
 * 2. Check that the discovery key is NOT already 'yes' (user opted in)
 *    and NOT 'no' (user explicitly declined)
 * 3. Push to the `suggestions` array with the correct discoveryKey and stepId
 * 4. The SuggestionsBanner component renders it with an "Enable" action
 */
import type { TaxReturn, CalculationResult } from '@nimbus/engine';
export interface TaxSuggestion {
    id: string;
    type: 'credit' | 'deduction';
    title: string;
    description: string;
    discoveryKey: string;
    stepId: string;
    estimatedBenefit?: number;
    confidence: 'high' | 'medium';
}
/**
 * Compute proactive suggestions for unclaimed credits and deductions.
 * Pure function — no side effects, deterministic output.
 */
export declare function getSuggestions(taxReturn: TaxReturn, calculation?: CalculationResult | null): TaxSuggestion[];
/** Get suggestions filtered by type. */
export declare function getCreditSuggestions(suggestions: TaxSuggestion[]): TaxSuggestion[];
/** Get suggestions filtered by type. */
export declare function getDeductionSuggestions(suggestions: TaxSuggestion[]): TaxSuggestion[];
