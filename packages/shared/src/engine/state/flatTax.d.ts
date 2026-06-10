/**
 * Flat-Tax State Calculator Factory — Tax Year 2025
 *
 * Creates a generic calculator for states that levy a single flat rate on
 * taxable income. Each state's deduction / exemption rules are read from
 * the FLAT_TAX_CONSTANTS record so one code path covers PA, IL, MA, NC,
 * MI, IN, CO, KY, and UT.
 *
 * Special-case handling:
 *   - PA: No deductions or exemptions — flat 3.07% on most income.
 *   - CO: Uses federal taxable income as starting point (no further deductions).
 *   - MA: 5% flat for initial implementation. Short-term capital gains (12%)
 *         noted but not split out yet.
 *   - UT: Taxpayer credit = 6% of (federal std deduction + personal exemptions).
 */
import type { StateCalculator } from './stateRegistry.js';
/**
 * Create a StateCalculator for a flat-tax state.
 *
 * @param stateCode  Two-letter state code (must exist in FLAT_TAX_CONSTANTS).
 * @returns          A StateCalculator whose `.calculate()` method performs the
 *                   full flat-tax computation.
 */
export declare function createFlatTaxCalculator(stateCode: string): StateCalculator;
