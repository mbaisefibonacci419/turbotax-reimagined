import { FilingStatus } from '../types/index.js';
/**
 * Calculate Net Investment Income Tax (NIIT) — 3.8% surtax.
 *
 * NIIT applies to the lesser of:
 *   (a) net investment income, or
 *   (b) the amount by which AGI exceeds the threshold
 *
 * Investment income includes: interest, dividends, capital gains,
 * rental income, royalties, passive income (but NOT wages or SE income).
 *
 * @authority
 *   IRC: Section 1411 — imposition of tax on net investment income
 *   Form: Form 8960
 * @scope 3.8% Net Investment Income Tax
 * @limitations None
 */
export declare function calculateNIIT(agi: number, investmentIncome: number, filingStatus: FilingStatus): number;
