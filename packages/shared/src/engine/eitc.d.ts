import { FilingStatus } from '../types/index.js';
/** Maximum investment income a taxpayer may have and still claim EITC. */
export declare const INVESTMENT_INCOME_LIMIT = 11950;
/**
 * EITC schedule indexed by number of qualifying children (0–3).
 * Children counts above 3 use the "3" row.
 *
 * phaseInRate   = maxCredit / earnedIncomeThreshold
 * phaseOutRate  = maxCredit / (completePhaseOut − phaseOutStart)
 */
interface EITCBracket {
    maxCredit: number;
    earnedIncomeThreshold: number;
    phaseInRate: number;
    phaseOutStartSingle: number;
    phaseOutStartMFJ: number;
    completePhaseOutSingle: number;
    completePhaseOutMFJ: number;
    phaseOutRate: number;
}
export declare const EITC_BRACKETS: Record<number, EITCBracket>;
/** EITC age limits for childless filers. */
export declare const EITC_MIN_AGE_NO_CHILDREN = 25;
export declare const EITC_MAX_AGE_NO_CHILDREN = 64;
/**
 * Calculate the Earned Income Tax Credit for tax year 2025.
 *
 * @authority
 *   IRC: Section 32 — earned income tax credit
 *   Rev. Proc: 2024-40, Sections 3.04-3.07 — EITC thresholds and phase-outs
 *   Form: Schedule EIC (Form 1040)
 *   Pub: Publication 596 — Earned Income Credit
 * @see https://www.irs.gov/irb/2024-44_IRB#REV-PROC-2024-40
 * @scope Full EITC computation with qualifying children
 * @limitations Investment income disqualification at $11,950 limit, does not model tie-breaker rules for shared dependents
 *
 * @param filingStatus        - The taxpayer's filing status.
 * @param earnedIncome        - Wages, salaries, self-employment income, etc.
 * @param agi                 - Adjusted gross income.
 * @param qualifyingChildren  - Number of qualifying children (0+).
 * @param investmentIncome    - Total investment income (interest, dividends,
 *                              capital gains, etc.).
 * @param taxpayerDateOfBirth - Taxpayer's date of birth (for age check on 0-child EITC).
 * @param taxYear             - Tax year (for age calculation).
 * @returns The EITC amount (0 if ineligible).
 */
export declare function calculateEITC(filingStatus: FilingStatus, earnedIncome: number, agi: number, qualifyingChildren: number, investmentIncome: number, taxpayerDateOfBirth?: string, taxYear?: number, livedApartFromSpouse?: boolean): number;
export {};
