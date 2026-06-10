/**
 * New York State Tax Constants — Tax Year 2025
 *
 * Sources:
 *   - NY Tax Law §601 — New York State income tax
 *   - NY Tax Law §1304 — New York City income tax
 *   - NY Tax Law §1323 — Yonkers surcharge
 */
import { StateTaxBracket } from '../../types/index.js';
export declare const NY_BRACKETS: Record<string, StateTaxBracket[]>;
export declare const NY_STANDARD_DEDUCTION: Record<string, number>;
export declare const NY_DEPENDENT_EXEMPTION = 1000;
export declare const NYC_BRACKETS: Record<string, StateTaxBracket[]>;
export declare const YONKERS_RESIDENT_SURCHARGE_RATE = 0.1675;
export declare const YONKERS_NONRESIDENT_RATE = 0.005;
export declare const NY_STAR_CREDIT_MAX = 350;
export declare const NY_STAR_AGI_LIMIT = 250000;
export declare const NY_SUPPLEMENTAL_AGI_THRESHOLD = 107650;
export declare const NY_SUPPLEMENTAL_FLAT_STOP_AGI = 157650;
export declare const NY_SUPPLEMENTAL_PHASE_RANGE = 50000;
export declare const NY_SUPPLEMENTAL_TOP_AGI = 25000000;
export interface NYFirstWorksheet {
    flatRate: number;
    maxTaxableIncome: number;
}
export declare const NY_FIRST_WORKSHEET: Record<string, NYFirstWorksheet>;
export interface NYSupplementalWorksheet {
    agiThreshold: number;
    recaptureBase: number;
    incrementalBenefit: number;
}
export declare const NY_SUPPLEMENTAL_WORKSHEETS: Record<string, NYSupplementalWorksheet[]>;
export declare const NYC_HOUSEHOLD_CREDIT_SINGLE: {
    maxAGI: number;
    credit: number;
}[];
export declare const NYC_HOUSEHOLD_CREDIT_PER_DEP: {
    maxAGI: number;
    perDep: number;
}[];
export declare const NYC_HOUSEHOLD_CREDIT_MFS_PER_DEP: {
    maxAGI: number;
    perDep: number;
}[];
export declare const NYC_SCHOOL_TAX_CREDIT_FIXED: Record<string, number>;
export declare const NYC_SCHOOL_TAX_CREDIT_INCOME_LIMIT = 250000;
export declare const NYC_SCHOOL_TAX_RATE_REDUCTION: Record<string, {
    threshold: number;
    base: number;
    rate: number;
}>;
export declare const NYC_SCHOOL_TAX_RATE_REDUCTION_LOW_RATE = 0.00171;
export declare const NYC_SCHOOL_TAX_RATE_REDUCTION_INCOME_LIMIT = 500000;
export declare const MCTMT_ZONE1_RATE = 0.006;
export declare const MCTMT_ZONE2_RATE = 0.0034;
export declare const MCTMT_THRESHOLD = 50000;
export declare const NY_ESCC_PER_CHILD_UNDER_4 = 1000;
export declare const NY_ESCC_PER_CHILD_4_TO_16 = 330;
export declare const NY_ESCC_PHASE_OUT_PER_1000 = 16.5;
export declare const NY_ESCC_FEDERAL_CTC_RATE = 0.33;
export declare const NY_ESCC_AGI_THRESHOLD: Record<string, number>;
export declare const NY_DEPENDENT_CARE_TABLE: {
    maxAGI: number;
    rate: number;
}[];
export declare const NYC_DEPENDENT_CARE_MAX_AGI = 30000;
export declare const NYC_DEPENDENT_CARE_RATE = 0.75;
export declare const NY_COLLEGE_TUITION_CREDIT_RATE = 0.04;
export declare const NY_COLLEGE_TUITION_CREDIT_MAX = 400;
export declare const NYC_TAX_ELIMINATION_THRESHOLDS: number[];
export declare const NYC_TAX_ELIMINATION_PER_ADDITIONAL = 7710;
export declare const NYC_TAX_ELIMINATION_PHASE_OUT = 5000;
