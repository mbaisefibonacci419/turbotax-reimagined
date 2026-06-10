/**
 * Filing Options Service
 *
 * Pure functions for:
 * 1. Assessing eligibility for free IRS filing programs
 * 2. Generating a Transfer Guide — a line-by-line mapping of
 *    calculated values to IRS form line numbers, enabling users
 *    to manually transfer data into Free Fillable Forms.
 *
 * No React dependencies. Follows the same pure-function pattern
 * as the tax engine modules.
 */
import type { TaxReturn, CalculationResult } from '../types/index.js';
export type EligibilityStatus = 'eligible' | 'likely_eligible' | 'not_eligible' | 'unknown';
export interface FilingOptionEligibility {
    status: EligibilityStatus;
    reason: string;
}
export interface FilingOptionsAssessment {
    freeFile: FilingOptionEligibility;
    freeFileForms: FilingOptionEligibility;
    vita: FilingOptionEligibility;
    tce: FilingOptionEligibility;
}
export interface TransferGuideLine {
    /** IRS line number (e.g., "1a", "9", "15") */
    line: string;
    /** Human-readable label (e.g., "Wages, salaries, tips") */
    label: string;
    /** Raw numeric value */
    value: number;
    /** Display-formatted value (e.g., "$42,470") */
    formattedValue: string;
}
export interface TransferGuideForm {
    formId: string;
    formName: string;
    lines: TransferGuideLine[];
}
export interface TransferGuideData {
    forms: TransferGuideForm[];
    generatedAt: string;
}
declare const FREE_FILE_AGI_LIMIT = 89000;
declare const VITA_AGI_LIMIT = 69000;
declare const TCE_MIN_AGE = 60;
/** IRS program URLs */
export declare const FILING_URLS: {
    readonly freeFile: "https://apps.irs.gov/app/freeFile/browse-all-offers/";
    readonly freeFileForms: "https://www.freefilefillableforms.com/";
    readonly vitaLocator: "https://irs.treasury.gov/freetaxprep/";
    readonly efileProviders: "https://www.irs.gov/e-file-providers/authorized-irs-e-file-providers-for-individuals";
    readonly directPay: "https://directpay.irs.gov";
};
/**
 * Assess eligibility for each free IRS filing program based on
 * the filer's tax return data and calculation results.
 */
export declare function assessFilingOptions(taxReturn: TaxReturn, calc: CalculationResult): FilingOptionsAssessment;
/**
 * Generate a Transfer Guide — curated line-by-line values
 * mapped to IRS form line numbers for manual transfer.
 */
export declare function generateTransferGuide(taxReturn: TaxReturn, calc: CalculationResult): TransferGuideData;
export { FREE_FILE_AGI_LIMIT, VITA_AGI_LIMIT, TCE_MIN_AGE };
