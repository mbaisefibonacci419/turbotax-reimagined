/**
 * California State Tax Constants — Tax Year 2025
 *
 * Sources:
 *   - CA Revenue & Taxation Code §17041 — California income tax rates
 *   - CA Revenue & Taxation Code §17043 — Mental Health Services Tax (Prop 63)
 *   - FTB Publication 1031 — Guidelines for Determining Resident Status
 *   - FTB Form 540 — California Resident Income Tax Return
 */
import { StateTaxBracket } from '../../types/index.js';
export declare const CA_BRACKETS: Record<string, StateTaxBracket[]>;
export declare const CA_STANDARD_DEDUCTION: Record<string, number>;
export declare const CA_PERSONAL_EXEMPTION_CREDIT: Record<string, number>;
export declare const CA_DEPENDENT_EXEMPTION_CREDIT = 475;
export declare const CA_MHST_THRESHOLD = 1000000;
export declare const CA_MHST_RATE = 0.01;
export declare const CA_SECTION_179_LIMIT = 25000;
export declare const CA_SECTION_179_THRESHOLD = 200000;
export declare const CA_MORTGAGE_LIMIT: Record<string, number>;
export declare const CA_ITEMIZED_DEDUCTION_LIMITATION_THRESHOLD: Record<string, number>;
export declare const CA_ITEMIZED_LIMITATION_RATE = 0.06;
export declare const CA_ITEMIZED_LIMITATION_MAX_REDUCTION = 0.8;
export declare const CA_EXEMPTION_PHASEOUT_REDUCTION_PER_STEP = 6;
export declare const CA_EXEMPTION_PHASEOUT_STEP: Record<string, number>;
export interface CalEITCEntry {
    phaseInRate: number;
    maxCredit: number;
    phaseOutStart: number;
    phaseOutRate: number;
    earnedIncomeLimit: number;
}
export declare const CA_EITC_TABLE: Record<number, CalEITCEntry>;
export declare const CA_EITC_INVESTMENT_INCOME_LIMIT = 4814;
export declare const CA_YCTC_AMOUNT_PER_CHILD = 1189;
export declare const CA_YCTC_PHASE_OUT_START: Record<string, number>;
export declare const CA_YCTC_PHASE_OUT_RATE = 0.2171;
export declare const CA_RENTERS_CREDIT: Record<string, {
    credit: number;
    agiLimit: number;
}>;
export declare const CA_DEPENDENT_CARE_TABLE: {
    maxAGI: number;
    rate: number;
}[];
export declare const CA_DEPENDENT_CARE_EXPENSE_LIMIT_1 = 3000;
export declare const CA_DEPENDENT_CARE_EXPENSE_LIMIT_2 = 6000;
export declare const CA_SENIOR_HOH_CREDIT = 1860;
export declare const CA_SENIOR_HOH_CREDIT_RATE = 0.02;
export declare const CA_SENIOR_HOH_AGI_LIMIT = 98652;
export declare const CA_SENIOR_HOH_MIN_AGE = 65;
export declare const CA_DEPENDENT_PARENT_CREDIT = 475;
export declare const CA_SDI_RATE = 0.011;
