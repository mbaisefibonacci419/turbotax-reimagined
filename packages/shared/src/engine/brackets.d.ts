import { FilingStatus, TaxBracket, BracketDetail, CalculationTrace } from '../types/index.js';
/**
 * Calculate progressive federal income tax for a given taxable income and filing status.
 * Returns both the total tax and a breakdown by bracket.
 *
 * @authority
 *   IRC: Section 1(a)-(d), (j) — tax rate tables by filing status
 *   Rev. Proc: 2024-40, Section 3.01 — inflation-adjusted bracket thresholds
 *   Form: Form 1040, Line 16
 * @scope Progressive tax bracket computation
 * @limitations None
 */
export declare function calculateProgressiveTax(taxableIncome: number, filingStatus: FilingStatus, bracketOverride?: Record<FilingStatus, TaxBracket[]>): {
    tax: number;
    brackets: BracketDetail[];
    marginalRate: number;
};
/**
 * Get the marginal tax rate for a given taxable income.
 *
 * @authority
 *   IRC: Section 1(a)-(d), (j) — tax rate tables by filing status
 *   Rev. Proc: 2024-40, Section 3.01 — inflation-adjusted bracket thresholds
 *   Form: Form 1040, Line 16
 * @scope Progressive tax bracket computation
 * @limitations None
 */
export declare function getMarginalRate(taxableIncome: number, filingStatus: FilingStatus, bracketOverride?: Record<FilingStatus, TaxBracket[]>): number;
/**
 * Calculate progressive tax with a trace tree for each bracket.
 * Used when tracing is enabled to provide per-bracket audit trail.
 *
 * Inspired by IRS Direct File Fact Graph's StepwiseMultiply CompNode.
 */
export declare function traceProgressiveTax(taxableIncome: number, filingStatus: FilingStatus, bracketOverride?: Record<FilingStatus, TaxBracket[]>): {
    tax: number;
    brackets: BracketDetail[];
    marginalRate: number;
    traces: CalculationTrace[];
};
