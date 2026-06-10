/**
 * Deduction Finder — Recurrence Detection
 *
 * Computes a recurrence score (0-1) for a set of matched transactions
 * belonging to a single pattern. Used to boost scoring for subscription-like
 * patterns (e.g. monthly gym, recurring software charges).
 *
 * Only called when a pattern has `recurrenceRelevant: true`.
 * All processing runs client-side. Data never leaves the browser.
 */
import type { NormalizedTransaction, RecurrencePattern } from './deductionFinderTypes';
/**
 * Compute recurrence pattern from matched transactions for a single pattern.
 * Returns null if fewer than 2 transactions (can't compute intervals).
 */
export declare function computeRecurrence(matchedTxns: NormalizedTransaction[]): RecurrencePattern | null;
