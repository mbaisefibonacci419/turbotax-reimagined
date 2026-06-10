/**
 * Alternative Minimum Tax (AMT) — Form 6251, Tax Year 2025
 *
 * The AMT is a parallel tax system designed to ensure high-income taxpayers
 * pay at least a minimum amount of tax, even with many deductions.
 *
 * Calculation flow (Form 6251):
 *   Part I — Alternative Minimum Taxable Income (AMTI)
 *     1. Start with taxable income (Line 1)
 *     2. Add back AMT adjustments (Lines 2a–3)
 *     3. Result = AMTI (Line 4)
 *   Part II — AMT Computation
 *     5. Subtract AMT exemption with phase-out (Line 5)
 *     6. Apply AMT rates (26%/28%) or Part III → tentative minimum tax (Line 7)
 *     7. Subtract AMTFTC (Line 8) → TMT after FTC (Line 9)
 *     8. AMT = max(0, TMT after FTC - regular tax) (Lines 10–11)
 *   Part III — Capital Gains Rates for AMT (if LTCG/QD present)
 *     Uses 0%/15%/20%/25% on cap gains portion, 26%/28% on ordinary portion
 *     TMT = min(Part III result, flat 26%/28%)
 *
 * @authority
 *   IRC: Section 55 — Alternative Minimum Tax imposed
 *   IRC: Section 56 — Adjustments in computing AMTI
 *   IRC: Section 57 — Items of tax preference
 *   Form: Form 6251
 *   Pub: Publication 17, Chapter 33
 *   Rev Proc 2024-40 — 2025 inflation-adjusted amounts
 * @scope AMT for individuals (Form 6251), including Part III preferential rates
 */
import { FilingStatus, TaxReturn, ScheduleAResult } from '../types/index.js';
/**
 * Part III result — preferential capital gains rates applied against AMT base.
 * When LTCG/QD exist, Part III may produce a lower TMT than flat 26%/28%.
 */
export interface AMTPartIIIResult {
    /** AMT base going into Part III (same as Part II Line 6) */
    amtBase: number;
    /** Adjusted net capital gain = QD + LTCG (capped at AMT base) */
    adjustedNetCapitalGain: number;
    /** Ordinary AMT income = AMT base - adjusted net capital gain */
    ordinaryAMTIncome: number;
    /** Tax on ordinary portion at 26%/28% */
    ordinaryTax: number;
    /** Tax on LTCG/QD at 0%/15%/20% */
    capitalGainsTax: number;
    /** Tax on unrecaptured §1250 gain at 25% */
    section1250Tax: number;
    /** Special computation tax (ordinary + §1250 + preferential) */
    specialComputationTax: number;
    /** Flat-rate tax: 26%/28% on entire AMT base (comparison) */
    flatRateTax: number;
    /** Tentative minimum tax = min(special, flat) */
    tentativeMinimumTax: number;
}
/**
 * Full Form 6251 result with line-by-line breakdown.
 */
export interface AMTResult {
    /** Line 1: Regular taxable income starting point */
    line1_taxableIncome: number;
    /** Detailed breakdown of all Part I adjustments (Lines 2a–3) */
    adjustments: {
        /** Line 2a: Standard deduction add-back */
        standardDeductionAddBack: number;
        /** Line 2b: Tax refund adjustment */
        taxRefundAdjustment: number;
        /** Line 2c: Investment interest expense difference */
        investmentInterestAdjustment: number;
        /** Line 2d: Depletion difference */
        depletion: number;
        /** Line 2e: SALT deduction added back (auto-computed from Schedule A) */
        saltAddBack: number;
        /** Line 2f: Alternative tax net operating loss deduction */
        atnold: number;
        /** Line 2g: Private activity bond interest */
        privateActivityBondInterest: number;
        /** Line 2h: Qualified small business stock exclusion (§1202) */
        qsbsExclusion: number;
        /** Line 2i: ISO exercise spread */
        isoExerciseSpread: number;
        /** Line 2k: Disposition of property difference */
        dispositionOfProperty: number;
        /** Line 2l: Depreciation adjustment (ADS vs MACRS) */
        depreciationAdjustment: number;
        /** Line 2m: Passive activity loss difference */
        passiveActivityLoss: number;
        /** Line 2n: Loss limitation difference */
        lossLimitations: number;
        /** Line 2o: Circulation costs */
        circulationCosts: number;
        /** Line 2p: Long-term contracts difference */
        longTermContracts: number;
        /** Line 2q: Mining costs */
        miningCosts: number;
        /** Line 2r: Research and experimental costs */
        researchCosts: number;
        /** Line 2t: Intangible drilling costs */
        intangibleDrillingCosts: number;
        /** Line 3: Other adjustments (catch-all) */
        otherAdjustments: number;
        /** Total of all adjustments (sum of lines 2a–3) */
        total: number;
    };
    /** Line 4: Alternative Minimum Taxable Income (taxableIncome + adjustments.total) */
    amti: number;
    /** Line 5: AMT exemption amount (after phase-out) */
    exemption: number;
    /** Line 6: AMT base = AMTI - exemption */
    amtBase: number;
    /** Line 7: Tentative minimum tax (from flat rates or Part III) */
    tentativeMinimumTax: number;
    /** Line 8: AMT foreign tax credit */
    amtForeignTaxCredit: number;
    /** Line 9: TMT after foreign tax credit = Line 7 - Line 8 */
    tmtAfterFTC: number;
    /** Line 10: Regular income tax (for comparison) */
    regularTax: number;
    /** Line 11: AMT amount = max(0, Line 9 - Line 10) */
    amtAmount: number;
    /** Whether AMT applies (amtAmount > 0) */
    applies: boolean;
    /** Part III result when capital gains preferential rates used */
    partIII?: AMTPartIIIResult;
    /** Whether Part III was used for TMT computation */
    usedPartIII: boolean;
}
/**
 * Calculate the Alternative Minimum Tax (full Form 6251).
 *
 * @param taxReturn - Full tax return data
 * @param regularTax - Regular income tax (before credits) — comparison point
 * @param scheduleA - Schedule A result (if itemizing)
 * @param taxableIncome - Regular taxable income (Form 1040 Line 15)
 * @param filingStatus - Filing status
 * @param deductionAmount - The deduction amount (standard or itemized) used on Form 1040 Line 12
 * @param qualifiedDividends - Qualified dividends for Part III
 * @param longTermCapitalGains - Net LTCG for Part III
 * @param unrecapturedSection1250Gain - Unrecaptured §1250 gain for Part III
 */
export declare function calculateAMT(taxReturn: TaxReturn, regularTax: number, scheduleA: ScheduleAResult | undefined, taxableIncome: number, filingStatus: FilingStatus, deductionAmount?: number, qualifiedDividends?: number, longTermCapitalGains?: number, unrecapturedSection1250Gain?: number): AMTResult;
/**
 * Calculate tentative minimum tax using preferential capital gains rates.
 * Mirrors Form 6251 Part III (Lines 12–40).
 *
 * When a taxpayer has qualified dividends or LTCG, the AMT should use
 * the same 0%/15%/20%/25% preferential rates on the capital gains portion
 * rather than the flat 26%/28% AMT rates. The ordinary (non-cap-gains)
 * portion still uses 26%/28%.
 *
 * TMT = min(special computation, flat 26%/28% on entire base)
 *
 * @limitations Does not compute 28% rate on collectibles gain (mirrors
 *   capitalGains.ts). Collectibles gain is treated at the standard 15%/20%
 *   preferential rates, which may slightly understate AMT for rare cases.
 */
export declare function calculateAMTPartIII(amtBase: number, qualifiedDividends: number, longTermCapitalGains: number, unrecapturedSection1250Gain: number, filingStatus: FilingStatus): AMTPartIIIResult;
/**
 * Apply the AMT two-bracket rate structure:
 * - 26% on the first $239,100 ($119,550 MFS)
 * - 28% on the remainder
 *
 * Exported for use by Part III (ordinary income portion) and Part II (fallback).
 */
export declare function calculateFlatTMT(amtBase: number, filingStatus: FilingStatus): number;
/**
 * Adjust the AMT result for the regular Foreign Tax Credit.
 *
 * Form 6251, Line 10 = regular income tax minus FTC (Schedule 3, line 1).
 * Since the FTC is computed after the initial AMT calculation, this function
 * retroactively adjusts the AMT comparison to use the correct net regular tax.
 *
 * This increases AMT (or causes it to apply) when it otherwise wouldn't,
 * because the regular tax base for comparison is reduced by FTC.
 */
export declare function adjustAMTForRegularFTC(result: AMTResult, regularFTC: number): AMTResult;
