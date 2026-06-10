/**
 * Transaction Cross-Validator
 *
 * Runs the deterministic pattern engine against AI-categorized transactions
 * to boost or reduce confidence:
 *
 *   AI + Pattern agree    → confidence: HIGH
 *   AI only (no pattern)  → confidence: unchanged (MEDIUM or as AI said)
 *   AI and Pattern differ → confidence: LOW (flagged for review)
 *   Pattern says X, AI says PERSONAL → confidence: LOW (flag)
 *
 * Also applies deterministic gates from the tax context:
 *   - Childcare requires minorDependentCount > 0
 *   - Medical itemized requires deductionMethod = 'itemized' (or warns)
 *   - Home office requires hasScheduleC or hasHomeOffice flag
 *   - Vehicle business use requires hasScheduleC
 */
import type { NormalizedTransaction, ReturnContext } from './deductionFinderTypes';
import type { CategorizedTransaction } from './transactionCategorizerTypes';
/**
 * Cross-validate AI-categorized transactions against the pattern engine.
 * Modifies confidence levels in place and returns gate warnings.
 *
 * @param contextHints - User-provided hints from setup screen (overrides return context for gating)
 */
export declare function crossValidate(categorized: CategorizedTransaction[], allTransactions: NormalizedTransaction[], context: ReturnContext, contextHints?: Record<string, boolean>): {
    gateWarnings: Map<number, string>;
};
