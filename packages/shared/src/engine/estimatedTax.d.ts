import { FilingStatus } from '../types/index.js';
/**
 * Calculate estimated quarterly tax payments.
 * totalTaxLiability = total tax owed minus withholding.
 * Each quarter = totalTaxLiability / 4.
 *
 * @authority
 *   IRC: Section 6654 — failure by individual to pay estimated income tax
 *   Form: Form 1040-ES
 * @scope Quarterly estimated tax calculation
 * @limitations None
 */
export declare function calculateEstimatedQuarterly(totalTaxOwed: number, totalWithholding: number): {
    quarterlyPayment: number;
    annualEstimated: number;
};
/**
 * Calculate safe harbor amount (to avoid underpayment penalty).
 * 100% of current year tax, or 110% if AGI > $150k ($75k for MFS).
 *
 * @authority
 *   IRC: Section 6654 — failure by individual to pay estimated income tax
 *   IRC: Section 6654(d)(1)(C)(i) — high-income threshold halved for MFS
 *   Form: Form 1040-ES
 * @scope Safe harbor calculation to avoid underpayment penalty
 * @limitations None
 */
export declare function calculateSafeHarbor(currentYearTax: number, agi: number, filingStatus?: FilingStatus): number;
