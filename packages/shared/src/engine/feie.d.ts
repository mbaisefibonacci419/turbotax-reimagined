import { ForeignEarnedIncomeInfo } from '../types/index.js';
/**
 * Calculate Foreign Earned Income Exclusion (Form 2555).
 *
 * For 2025: up to $130,000 of foreign earned income can be excluded.
 * If the taxpayer was present for less than a full year, the exclusion
 * is prorated based on qualifying days.
 *
 * The housing exclusion allows additional exclusion for foreign housing
 * expenses above the base amount.
 *
 * Returns the total exclusion amount (reduces total income).
 *
 * @authority
 *   IRC: Section 911 — citizens or residents of the United States living abroad
 *   Rev. Proc: 2024-40, Section 3.36 — foreign earned income exclusion amount
 *   Form: Form 2555
 * @scope Foreign earned income exclusion ($130k) and housing exclusion
 * @limitations None — stacking rule (§911(f)) is implemented in calculateIncomeTaxSection
 */
export interface FEIEResult {
    incomeExclusion: number;
    housingExclusion: number;
    totalExclusion: number;
}
export declare function calculateFEIE(info: ForeignEarnedIncomeInfo): FEIEResult;
