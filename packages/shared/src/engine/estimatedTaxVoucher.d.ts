/**
 * Estimated Tax Voucher Assessment (Form 1040-ES)
 *
 * Analyzes a completed tax return to determine whether the filer should make
 * quarterly estimated tax payments for the next tax year, and computes the
 * recommended quarterly amount using the safe harbor method.
 *
 * @authority
 *   IRC §6654 — Failure by individual to pay estimated income tax
 *   IRC §6654(d)(1)(B)(i) — 100% of current year tax safe harbor
 *   IRC §6654(d)(1)(C)(i) — 110% if AGI > $150k ($75k MFS)
 *   IRC §6654(e)(1) — $1,000 minimum threshold
 *   Form 1040-ES — Estimated Tax for Individuals
 */
import type { TaxReturn, CalculationResult } from '../types/index.js';
/** Quarterly due dates for 2026 estimated tax payments. */
export declare const ESTIMATED_TAX_2026_DUE_DATES: readonly [{
    readonly quarter: 1;
    readonly label: "Q1 2026";
    readonly date: "April 15, 2026";
}, {
    readonly quarter: 2;
    readonly label: "Q2 2026";
    readonly date: "June 15, 2026";
}, {
    readonly quarter: 3;
    readonly label: "Q3 2026";
    readonly date: "September 15, 2026";
}, {
    readonly quarter: 4;
    readonly label: "Q4 2026";
    readonly date: "January 15, 2027";
}];
export interface EstimatedPaymentRecommendation {
    /** Whether estimated payments are recommended */
    recommended: boolean;
    /** Human-readable reasons for the recommendation */
    reasons: string[];
    /** Recommended payment per quarter */
    quarterlyAmount: number;
    /** Total annual recommended payment */
    annualAmount: number;
    /** Safe harbor amount based on current year tax */
    safeHarborAmount: number;
    /** Whether filer crosses the high-income threshold */
    isHighIncome: boolean;
    /** Current year total tax (Form 1040) */
    currentYearTax: number;
    /** Projected withholding (assumes same W-2 jobs next year) */
    projectedWithholding: number;
    /** Whether the filer has self-employment income */
    hasSelfEmploymentIncome: boolean;
    /** Method used to compute the recommendation */
    calculationBasis: 'safe_harbor_current_year';
    /** Explanatory note for the user */
    note: string;
    /** Quarterly due dates */
    dueDates: typeof ESTIMATED_TAX_2026_DUE_DATES;
}
/**
 * Assess whether the filer should make estimated tax payments for 2026
 * based on their completed 2025 return.
 */
export declare function assessEstimatedPaymentNeed(taxReturn: TaxReturn, calc: CalculationResult): EstimatedPaymentRecommendation;
