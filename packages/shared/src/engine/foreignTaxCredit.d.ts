import { FilingStatus, ForeignTaxCreditResult, ForeignTaxCreditCategory } from '../types/index.js';
/**
 * Calculate Foreign Tax Credit (Form 1116).
 *
 * Two modes:
 *   1. Simplified (no categories): Credit = min(foreignTaxPaid, US tax × foreignIncome / worldwide)
 *   2. Per-category (IRC §904(d)): Each category (general, passive) computes its own limitation.
 *      Total credit = sum of per-category credits.
 *
 * If foreign tax paid ≤ $300 ($600 MFJ), the simplified election allows
 * the full amount as a credit without Form 1116.
 *
 * The credit is non-refundable (reduces tax, cannot go below $0).
 *
 * @authority
 *   IRC: Section 901 — taxes of foreign countries and of possessions of United States
 *   IRC: Section 904 — limitation on foreign tax credit
 *   IRC: Section 904(d) — separate application of section to certain categories of income
 *   Form: Form 1116
 * @scope Foreign tax credit with limitation formula and separate category limitations
 * @limitations No carryback/carryforward, no AMT FTC, no re-sourcing rules
 */
export declare function calculateForeignTaxCredit(foreignTaxPaid: number, foreignSourceIncome: number, worldwideIncome: number, usTaxLiability: number, filingStatus: FilingStatus, categories?: ForeignTaxCreditCategory[]): ForeignTaxCreditResult;
