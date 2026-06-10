import { FilingStatus } from '../types/index.js';
/**
 * Calculate income tax with preferential rates for qualified dividends and LTCG,
 * including the 25% rate zone for unrecaptured Section 1250 gain.
 *
 * Implements the IRS Schedule D Tax Worksheet logic:
 *   1. Compute "special" tax:
 *      - Progressive rates on ordinary income
 *      - 25% on unrecaptured §1250 gain (stacked on top of ordinary)
 *      - 0%/15%/20% on remaining LTCG + qualified dividends
 *   2. Compute "regular" tax: all progressive rates on taxable income
 *   3. Tax = min(special, regular)
 *
 * This ensures the preferential computation never results in MORE tax than
 * the regular computation (IRC §1(h) is a maximum rate provision).
 *
 * @authority
 *   IRC: Section 1(h) — maximum capital gains rate
 *   IRC: Section 1(h)(1)(E) — 25% rate on unrecaptured Section 1250 gain
 *   Rev. Proc: 2024-40, Section 3.12 — inflation-adjusted rate thresholds
 *   Form: Form 1040, Qualified Dividends and Capital Gain Tax Worksheet
 *   Form: Schedule D Tax Worksheet (when Section 1250 gain present)
 * @scope Preferential rate tax for qualified dividends and LTCG (0%/15%/20%) plus 25% Section 1250 zone
 * @limitations Does not compute 28% rate on collectibles gain
 */
export declare function calculatePreferentialRateTax(taxableIncome: number, qualifiedDividends: number, longTermCapitalGains: number, filingStatus: FilingStatus, unrecapturedSection1250Gain?: number): {
    ordinaryTax: number;
    preferentialTax: number;
    section1250Tax: number;
    totalTax: number;
    marginalRate: number;
};
