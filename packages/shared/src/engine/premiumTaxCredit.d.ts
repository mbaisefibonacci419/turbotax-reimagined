import { FilingStatus, PremiumTaxCreditInfo, PremiumTaxCreditResult } from '../types/index.js';
/**
 * Calculate Premium Tax Credit (Form 8962).
 *
 * The PTC is a refundable credit to help individuals and families afford
 * health insurance purchased through the Marketplace.
 *
 * For 2025 (with ARP/IRA enhanced subsidies):
 *   - No upper income cliff at 400% FPL
 *   - Applicable percentages range from 0% (≤150% FPL) to 8.5% (≥400% FPL)
 *   - Monthly PTC = lesser of (enrollment premium) or (SLCSP - expected contribution)
 *   - If APTC > PTC, taxpayer must repay excess (capped for <400% FPL)
 *   - If PTC > APTC, taxpayer gets additional refundable credit
 *
 * MFS filers are generally ineligible, except domestic abuse / spousal abandonment.
 *
 * @authority
 *   IRC: Section 36B — refundable credit for coverage under a qualified health plan
 *   ACA: Section 1401 — refundable tax credit providing premium assistance
 *   IRA: Section 12001 — extension of premium tax credit enhancements
 *   Rev. Proc: 2024-35 — applicable percentage table
 *   Rev. Proc: 2024-40, Table 5 — repayment caps
 *   Form: Form 8962
 * @scope Premium Tax Credit with FPL calculation, applicable figures, APTC reconciliation
 * @limitations Assumes annual coverage (no monthly proration for coverage gaps)
 */
export declare function calculatePremiumTaxCredit(info: PremiumTaxCreditInfo, householdIncome: number, filingStatus: FilingStatus): PremiumTaxCreditResult;
/**
 * Calculate household MAGI for PTC purposes.
 * Household income = AGI + excluded foreign income + tax-exempt interest + non-taxable SS
 *
 * @authority
 *   IRC: Section 36B — refundable credit for coverage under a qualified health plan
 *   ACA: Section 1401 — refundable tax credit providing premium assistance
 *   IRA: Section 12001 — extension of premium tax credit enhancements
 *   Rev. Proc: 2024-35 — applicable percentage table
 *   Rev. Proc: 2024-40, Table 5 — repayment caps
 *   Form: Form 8962
 * @scope Premium Tax Credit household income calculation
 * @limitations Assumes annual coverage (no monthly proration for coverage gaps)
 */
export declare function calculatePTCHouseholdIncome(agi: number, feieExclusion?: number, taxExemptInterest?: number, nonTaxableSocialSecurity?: number): number;
