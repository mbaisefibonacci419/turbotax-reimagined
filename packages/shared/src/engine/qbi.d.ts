import { FilingStatus, QBIBusinessEntry } from '../types/index.js';
/**
 * Calculate Qualified Business Income (QBI) deduction.
 *
 * Below threshold: deduction = lesser of 20% QBI or 20% (taxable income − net capital gain).
 *
 * Above threshold (within phase-in range):
 *   - SSTB: deduction phases down linearly to $0.
 *   - Non-SSTB: deduction phases from tentative amount toward the W-2/UBIA limit.
 *
 * Above threshold + phase-in range:
 *   - SSTB: $0 (fully phased out).
 *   - Non-SSTB: lesser of 20% QBI or greater of (50% W-2 wages) or (25% W-2 wages + 2.5% UBIA).
 *
 * The W-2/UBIA alternative ensures non-SSTB businesses with significant payroll
 * or capital still receive a deduction even at high income levels.
 *
 * @authority
 *   IRC: Section 199A(a)(2) — QBI deduction limited to 20% of (taxable income − net capital gain)
 *   IRC: Section 1(h) — net capital gain = max(0, net LTCG) + qualified dividends
 *   Rev. Proc: 2024-40, Section 3.29 — QBI threshold amounts
 *   Form: Form 8995 / Form 8995-A
 * @scope 20% QBI deduction for pass-through income
 * @limitations Simplified (no per-business SSTB/W-2/UBIA phase-in computation)
 */
export declare function calculateQBIDeduction(qualifiedBusinessIncome: number, taxableIncomeBeforeQBI: number, filingStatus: FilingStatus, isSSTB?: boolean, w2WagesPaid?: number, ubiaOfQualifiedProperty?: number, netCapitalGain?: number): number;
/**
 * Calculate QBI deduction for multiple businesses (Form 8995-A).
 *
 * Below threshold: simple 20% of combined QBI (no per-business limitation).
 * Above threshold: compute per-business (each with its own SSTB, W-2, UBIA),
 *   then aggregate. Combined deduction still capped at 20% of taxable income.
 *
 * @authority IRC §199A(a)(2) — QBI deduction limited to 20% of (taxable income − net capital gain)
 */
export declare function calculateMultiBusinessQBIDeduction(businesses: QBIBusinessEntry[], taxableIncomeBeforeQBI: number, filingStatus: FilingStatus, netCapitalGain?: number): number;
