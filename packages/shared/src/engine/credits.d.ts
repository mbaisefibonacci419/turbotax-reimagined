import { FilingStatus, ChildTaxCreditInfo, EducationCreditInfo, CreditsResult, Dependent } from '../types/index.js';
/**
 * Calculate all tax credits: Child Tax Credit, Other Dependent Credit, Education Credits.
 *
 * Credits are split into non-refundable (reduce tax to $0) and refundable (can create refund):
 *   Non-refundable: CTC, ODC, education credit (non-refundable portion)
 *   Refundable: ACTC, AOTC 40% refundable, EITC (added in form1040.ts)
 *
 * If dependents array is provided, qualifying children and other dependents are
 * derived from actual dependent data (age, residency) rather than trusting manual counts.
 *
 * earnedIncome and incomeTaxLiability are needed for ACTC calculation.
 *
 * @authority
 *   IRC: Section 24 — child tax credit / other dependent credit
 *   IRC: Section 25A — American Opportunity and Lifetime Learning credits
 *   IRC: Section 24(d) — additional child tax credit (refundable)
 *   Rev. Proc: 2024-40, Sections 3.23-3.27 — credit thresholds and phase-outs
 *   Form: Schedule 8812, Form 8863
 * @scope CTC, ODC, ACTC, AOTC, LLC with phase-outs
 * @limitations None
 */
export declare function calculateCredits(filingStatus: FilingStatus, agi: number, childTaxCredit?: ChildTaxCreditInfo, educationCredits?: EducationCreditInfo[], dependents?: Dependent[], taxYear?: number, earnedIncome?: number, incomeTaxLiability?: number, aotcRefundableExcluded?: boolean): CreditsResult;
