import { Form8606Info } from '../types/index.js';
/**
 * Calculate taxable portions of Roth conversions AND regular IRA distributions
 * using the pro-rata rule (Form 8606).
 *
 * When you have non-deductible (after-tax) basis in traditional IRAs, ALL
 * distributions (both regular and Roth conversions) must use the pro-rata rule
 * to determine the non-taxable portion.
 *
 * Pro-rata rule (Form 8606 Lines 9-12):
 *   Line 9: totalIRAValue = yearEndBalance + conversions + regularDistributions
 *   Line 10: nonTaxableRatio = totalBasis / totalIRAValue
 *   Line 11: nonTaxableConversion = conversionAmount × nonTaxableRatio
 *   Line 12: nonTaxableDistributions = regularDistributions × nonTaxableRatio
 *   Line 14: remainingBasis = totalBasis - Line 11 - Line 12
 *
 * @authority
 *   IRC: Section 408(d)(1)-(2) — taxability of IRA distributions
 *   IRC: Section 408A — Roth IRAs
 *   Form: Form 8606, Lines 1-15
 * @scope Nondeductible IRA basis tracking, Roth conversion and distribution pro-rata
 * @limitations Does not track multi-year basis accumulation
 */
export interface Form8606Result {
    totalBasis: number;
    nonTaxableRatio: number;
    taxableConversion: number;
    nonTaxableDistributions: number;
    taxableDistributions: number;
    regularDistributions: number;
    remainingBasis: number;
}
export declare function calculateForm8606(info: Form8606Info, regularDistributions?: number): Form8606Result;
