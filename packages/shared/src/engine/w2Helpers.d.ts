/**
 * W-2 Helper Utilities
 *
 * Provides utility functions for extracting and aggregating data from
 * W-2 Box 12 coded benefit entries and Box 13 checkboxes.
 *
 * @authority IRS Form W-2 Instructions — Box 12 Codes, Box 13 Checkboxes
 */
import { W2Income, W2Box12Code } from '../types/index.js';
/**
 * Sum W-2 Box 12 amounts for specific codes across all W-2s.
 *
 * Used for auto-deriving values that would otherwise require separate user input:
 * - Codes D, E, G, S, AA → total salary deferrals (401k, 403b, 457b, SIMPLE, Roth 401k)
 * - Code W → HSA employer contributions
 * - Code DD → employer-sponsored health coverage cost (informational)
 *
 * @param w2s - Array of W-2 income items
 * @param codes - Box 12 codes to sum (e.g., ['D', 'E', 'G'])
 * @returns Total amount across all matching Box 12 entries, rounded to 2 decimal places
 */
export declare function sumBox12Codes(w2s: W2Income[], codes: W2Box12Code[]): number;
/**
 * Check if any W-2 has the "Retirement plan" checkbox (Box 13) checked.
 *
 * This affects IRA deduction eligibility under IRC §219(g). When a taxpayer
 * or their spouse is covered by an employer retirement plan, the deductible
 * IRA contribution may be reduced or eliminated based on MAGI.
 *
 * @authority IRC §219(g) — Limitation on deduction for active participants
 * @param w2s - Array of W-2 income items
 * @returns true if any W-2 has box13.retirementPlan checked
 */
export declare function hasRetirementPlanCoverage(w2s: W2Income[]): boolean;
/**
 * Get total W-2 Box 12 salary deferrals (traditional + Roth).
 *
 * Includes codes D (401k), E (403b), F (SEP), G (457b), H (501(c)(18)(D)),
 * S (SIMPLE), AA (Roth 401k), BB (Roth 403b), EE (Roth 457b).
 *
 * @authority IRC §402(g) — Limitation on exclusion for elective deferrals
 */
export declare function totalSalaryDeferrals(w2s: W2Income[]): number;
/**
 * Get total HSA employer contributions from W-2 Box 12 code W.
 *
 * @authority IRC §223(b) — Limitations on deduction; employer contributions
 *   reported in Box 12 code W reduce the taxpayer's contribution limit.
 */
export declare function totalEmployerHSAContributions(w2s: W2Income[]): number;
