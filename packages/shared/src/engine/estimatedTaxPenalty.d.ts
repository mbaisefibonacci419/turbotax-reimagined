import { FilingStatus, EstimatedTaxPenaltyResult, AnnualizedIncomeInfo } from '../types/index.js';
/**
 * Calculate Estimated Tax Penalty (Form 2210).
 *
 * You may owe a penalty if you didn't pay enough tax through withholding
 * and estimated payments during the year.
 *
 * Safe harbors (no penalty if):
 *   1. Tax owed after withholding/payments < $1,000
 *   2. Payments ≥ 90% of current year tax
 *   3. Payments ≥ 100% of prior year tax (110% if AGI > $150k/$75k MFS)
 *
 * Penalty is computed using the per-quarter day-count method (Form 2210 Part IV):
 *   For each quarter's underpayment, penalty = underpayment × rate × days / 365
 *   where days are broken out by IRS rate period boundaries.
 *
 * When annualized income data is provided, also computes the annualized
 * income installment method (Schedule AI) and returns the lesser penalty.
 *
 * @authority
 *   IRC: Section 6654 — failure by individual to pay estimated income tax
 *   IRC: Section 6654(d)(2) — annualized income installment method
 *   IRC: Section 6621(a)(2) — underpayment rate = federal short-term rate + 3%
 *   Form: Form 2210
 *   Form: Form 2210, Schedule AI
 * @scope Estimated tax penalty with safe harbors, per-quarter day-count, and annualized income
 * @limitations
 *   Does not model mid-quarter payments (assumes equal quarterly payments)
 *   Annualized method does not model itemized deduction variations by period
 */
export declare function calculateEstimatedTaxPenalty(currentYearTax: number, totalPayments: number, // Withholding + estimated payments
priorYearTax: number | undefined, // undefined = unknown (no prior year safe harbor)
agi: number, filingStatus: FilingStatus, annualizedIncome?: AnnualizedIncomeInfo): EstimatedTaxPenaltyResult;
