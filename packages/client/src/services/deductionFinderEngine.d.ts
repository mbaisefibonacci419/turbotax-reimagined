/**
 * Deduction Finder — Scanning Engine
 *
 * Pure function that scans normalized transactions against the pattern catalog
 * and produces ranked DeductionInsight results. Follows the assessAuditRisk()
 * accumulator pattern.
 *
 * Matching modes:
 *   - 'substring' (default): uses .includes() — works for long unambiguous strings.
 *   - 'word_boundary': uses regex with lookbehind/lookahead — for short/collision-prone tokens.
 *   - Evidence and negative tokens always use word-boundary matching.
 *
 * All processing runs client-side. Transaction data never leaves the browser.
 */
import type { NormalizedTransaction, ReturnContext, DeductionInsight, PatternRequirements } from './deductionFinderTypes';
export declare const SCORING_WEIGHTS: {
    readonly confidence: 0.4;
    readonly impact: 0.4;
    readonly ease: 0.2;
};
/** Escape regex special characters in a token. */
export declare function escapeRegex(s: string): string;
/** Build a word-boundary regex for a token.
 *  Uses negative lookbehind/lookahead so "TAX" matches "TAX PREP" but not "TAXI". */
export declare function buildWordBoundaryRegex(token: string): RegExp;
/** Evaluate a flat PatternRequirements object against a ReturnContext.
 *  All conditions are AND-ed — returns false if any fails. */
export declare function evaluateRequirements(reqs: PatternRequirements, ctx: ReturnContext): boolean;
export declare function scanForSignals(transactions: NormalizedTransaction[], context: ReturnContext, taxYear?: number): DeductionInsight[];
