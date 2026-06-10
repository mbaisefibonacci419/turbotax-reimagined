import { KiddieTaxInfo } from '../types/index.js';
/**
 * Calculate Kiddie Tax (Form 8615).
 *
 * Applies to children under 19 (or under 24 if full-time student) with
 * unearned income above the threshold.
 *
 * For 2025:
 *   - First $1,350 of unearned income: tax-free (covered by standard deduction)
 *   - Next $1,350: taxed at child's rate
 *   - Above $2,700: taxed at parent's marginal rate
 *
 * Returns the additional tax due to kiddie tax (above what child's rate would be).
 *
 * @authority
 *   IRC: Section 1(g) — certain unearned income of children taxed as if parent's income
 *   Rev. Proc: 2024-40, Section 3.03 — kiddie tax thresholds
 *   Form: Form 8615
 * @scope Unearned income of children taxed at parent's rate
 * @limitations None
 */
export interface KiddieTaxResult {
    applies: boolean;
    unearnedIncomeAboveThreshold: number;
    additionalTax: number;
}
export declare function calculateKiddieTax(info: KiddieTaxInfo): KiddieTaxResult;
