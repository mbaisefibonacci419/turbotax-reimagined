import { FilingStatus, TaxBracket } from '../types/index.js';
export declare const TAX_BRACKETS_2025: Record<FilingStatus, TaxBracket[]>;
export declare const STANDARD_DEDUCTION_2025: Record<FilingStatus, number>;
export declare const ADDITIONAL_STANDARD_DEDUCTION: {
    UNMARRIED: number;
    MARRIED: number;
};
export declare const DEPENDENT_STANDARD_DEDUCTION: {
    MIN_AMOUNT: number;
    EARNED_INCOME_PLUS: number;
};
export declare const SE_TAX: {
    RATE: number;
    SS_RATE: number;
    MEDICARE_RATE: number;
    SS_WAGE_BASE: number;
    NET_EARNINGS_FACTOR: number;
    ADDITIONAL_MEDICARE_RATE: number;
    ADDITIONAL_MEDICARE_THRESHOLD_SINGLE: number;
    ADDITIONAL_MEDICARE_THRESHOLD_MFJ: number;
    ADDITIONAL_MEDICARE_THRESHOLD_MFS: number;
    MINIMUM_EARNINGS_THRESHOLD: number;
    FARM_OPTIONAL_METHOD_MAX: number;
};
export declare const QBI: {
    RATE: number;
    THRESHOLD_SINGLE: number;
    THRESHOLD_MFJ: number;
    PHASE_IN_RANGE_SINGLE: number;
    PHASE_IN_RANGE_MFJ: number;
};
export declare const HOME_OFFICE: {
    SIMPLIFIED_RATE: number;
    SIMPLIFIED_MAX_SQFT: number;
    SIMPLIFIED_MAX_DEDUCTION: number;
};
export declare const HOME_OFFICE_DEPRECIATION: {
    RECOVERY_YEARS: number;
    FIRST_YEAR_RATE_BY_MONTH: Record<number, number>;
    SUBSEQUENT_YEAR_RATE: number;
};
export declare const VEHICLE: {
    STANDARD_MILEAGE_RATE: number;
};
export declare const VEHICLE_DEPRECIATION: {
    SECTION_280F_LIMITS_BONUS: Record<string, number>;
    SECTION_280F_LIMITS_NO_BONUS: Record<string, number>;
    MACRS_5_YEAR_RATES: readonly number[];
    STRAIGHT_LINE_5_YEAR_RATES: readonly number[];
    SUV_SECTION_179_LIMIT: number;
    BONUS_DEPRECIATION_RATE: number;
    TAX_YEAR: number;
};
export declare const SECTION_179: {
    /** Maximum Section 179 deduction for 2025. OBBBA §70306 (doubled from Rev. Proc. 2024-40). */
    readonly MAX_DEDUCTION: 2500000;
    /** Total cost threshold — deduction reduced dollar-for-dollar above this amount. OBBBA §70306. */
    readonly PHASE_OUT_THRESHOLD: 4000000;
    /** SUV limit for vehicles > 6,000 lbs GVW (IRC §179(b)(5)(A)). */
    readonly SUV_LIMIT: 31300;
};
/**
 * MACRS GDS depreciation rate tables (200% declining balance, half-year convention).
 * Source: IRS Publication 946, Table A-1.
 *
 * Key = recovery period in years. Value = array of annual rates (0-indexed).
 * Year 0 = first year placed in service (half-year convention).
 * Each array sums to 1.0 (100% of basis recovered over the recovery period + 1 years).
 */
export declare const MACRS_GDS_RATES: Record<number, readonly number[]>;
/**
 * MACRS GDS depreciation rate tables — mid-quarter convention.
 * Source: IRS Publication 946, Appendix A, Tables A-2 through A-5 (200% DB)
 *         and Tables A-2a through A-5a (150% DB, for 15/20-year property).
 *
 * Key = recovery period in years.
 * Value = array of 4 rate arrays, indexed by quarter placed in service (0 = Q1, 3 = Q4).
 * Each rate array has (recoveryPeriod + 1) entries and sums to 1.0.
 *
 * The mid-quarter convention is required under IRC §168(d)(3) when more than 40%
 * of the aggregate depreciable basis placed in service during the tax year is placed
 * in service during the last 3 months of the tax year.
 */
export declare const MACRS_GDS_RATES_MID_QUARTER: Record<number, readonly (readonly number[])[]>;
/** Bonus depreciation rate for 2025 (100% restored by OBBBA). IRC §168(k). */
export declare const BONUS_DEPRECIATION_RATE_2025 = 1;
/** Tax year for MACRS year-index computation. */
export declare const DEPRECIATION_TAX_YEAR = 2025;
export declare const SCHEDULE_A: {
    SALT_CAP: number;
    SALT_CAP_MFS: number;
    SALT_PHASE_DOWN_THRESHOLD: number;
    SALT_PHASE_DOWN_THRESHOLD_MFS: number;
    SALT_PHASE_DOWN_RATE: number;
    SALT_CAP_FLOOR: number;
    SALT_CAP_FLOOR_MFS: number;
    MEDICAL_AGI_THRESHOLD: number;
    MORTGAGE_LIMIT: number;
    MORTGAGE_LIMIT_MFS: number;
};
export declare const CHILD_TAX_CREDIT: {
    PER_CHILD: number;
    PER_OTHER_DEPENDENT: number;
    PHASE_OUT_THRESHOLD_SINGLE: number;
    PHASE_OUT_THRESHOLD_MFJ: number;
    PHASE_OUT_RATE: number;
    REFUNDABLE_MAX: number;
};
export declare const EDUCATION_CREDITS: {
    AOTC_MAX: number;
    AOTC_FIRST_TIER: number;
    AOTC_SECOND_TIER: number;
    AOTC_REFUNDABLE_RATE: number;
    AOTC_PHASE_OUT_SINGLE: number;
    AOTC_PHASE_OUT_RANGE_SINGLE: number;
    AOTC_PHASE_OUT_MFJ: number;
    AOTC_PHASE_OUT_RANGE_MFJ: number;
    LLC_MAX: number;
    LLC_RATE: number;
    LLC_PHASE_OUT_SINGLE: number;
    LLC_PHASE_OUT_RANGE_SINGLE: number;
    LLC_PHASE_OUT_MFJ: number;
    LLC_PHASE_OUT_RANGE_MFJ: number;
};
export declare const ESTIMATED_TAX: {
    QUARTERLY_DIVISOR: number;
    SAFE_HARBOR_RATE: number;
    HIGH_INCOME_SAFE_HARBOR: number;
    HIGH_INCOME_THRESHOLD: number;
};
export declare const HSA: {
    INDIVIDUAL_LIMIT: number;
    FAMILY_LIMIT: number;
    CATCH_UP_55_PLUS: number;
};
export declare const ARCHER_MSA: {
    SELF_ONLY_RATE: number;
    FAMILY_RATE: number;
    SELF_ONLY_DEDUCTIBLE_MIN: number;
    SELF_ONLY_DEDUCTIBLE_MAX: number;
    SELF_ONLY_OOP_MAX: number;
    FAMILY_DEDUCTIBLE_MIN: number;
    FAMILY_DEDUCTIBLE_MAX: number;
    FAMILY_OOP_MAX: number;
    EXCESS_TAX_RATE: number;
    DISTRIBUTION_PENALTY_RATE: number;
};
export declare const STUDENT_LOAN_INTEREST: {
    MAX_DEDUCTION: number;
    PHASE_OUT_SINGLE: number;
    PHASE_OUT_RANGE_SINGLE: number;
    PHASE_OUT_MFJ: number;
    PHASE_OUT_RANGE_MFJ: number;
};
export declare const IRA: {
    MAX_CONTRIBUTION: number;
    CATCH_UP_50_PLUS: number;
    DEDUCTION_PHASE_OUT_SINGLE: number;
    DEDUCTION_PHASE_OUT_RANGE_SINGLE: number;
    DEDUCTION_PHASE_OUT_MFJ: number;
    DEDUCTION_PHASE_OUT_RANGE_MFJ: number;
    DEDUCTION_PHASE_OUT_MFJ_SPOUSE_COVERED: number;
    DEDUCTION_PHASE_OUT_RANGE_MFJ_SPOUSE_COVERED: number;
    DEDUCTION_PHASE_OUT_MFS: number;
    DEDUCTION_PHASE_OUT_RANGE_MFS: number;
};
export declare const CAPITAL_GAINS_RATES: {
    RATE_0: number;
    RATE_15: number;
    RATE_20: number;
    RATE_25: number;
    THRESHOLD_0: Record<FilingStatus, number>;
    THRESHOLD_15: Record<FilingStatus, number>;
};
export declare const NIIT: {
    RATE: number;
    THRESHOLD_SINGLE: number;
    THRESHOLD_MFJ: number;
    THRESHOLD_MFS: number;
    THRESHOLD_HOH: number;
    THRESHOLD_QSS: number;
};
export declare const QCD: {
    MAX_AMOUNT: number;
    MIN_AGE_MONTHS: number;
};
export declare const EARLY_DISTRIBUTION: {
    PENALTY_RATE: number;
    PENALTY_CODES: string[];
    EXCEPTION_CODES: string[];
    EXEMPT_CODES: string[];
    EXCEPTION_REASON_CODES: Record<string, string>;
    FIRST_TIME_HOMEBUYER_LIMIT: number;
    BIRTH_ADOPTION_LIMIT: number;
};
export declare const ACTC: {
    EARNED_INCOME_THRESHOLD: number;
    EARNED_INCOME_RATE: number;
};
export declare const DEPENDENT_CARE: {
    EXPENSE_LIMIT_ONE: number;
    EXPENSE_LIMIT_TWO_PLUS: number;
    MAX_RATE: number;
    MIN_RATE: number;
    RATE_PHASE_OUT_START: number;
    RATE_STEP_SIZE: number;
    RATE_STEP: number;
};
export declare const SAVERS_CREDIT: {
    CONTRIBUTION_LIMIT: number;
    CONTRIBUTION_LIMIT_MFJ: number;
    SINGLE_50: number;
    SINGLE_20: number;
    SINGLE_10: number;
    HOH_50: number;
    HOH_20: number;
    HOH_10: number;
    MFJ_50: number;
    MFJ_20: number;
    MFJ_10: number;
};
export declare const CLEAN_ENERGY: {
    RATE: number;
    FUEL_CELL_CAP_PER_HALF_KW: number;
};
export declare const HSA_DISTRIBUTIONS: {
    PENALTY_RATE: number;
};
export declare const SCHEDULE_D: {
    CAPITAL_LOSS_LIMIT: number;
    CAPITAL_LOSS_LIMIT_MFS: number;
};
export declare const SOCIAL_SECURITY: {
    SINGLE_BASE_AMOUNT: number;
    SINGLE_ADJUSTED_BASE: number;
    MFJ_BASE_AMOUNT: number;
    MFJ_ADJUSTED_BASE: number;
    MFS_BASE_AMOUNT: number;
    RATE_50: number;
    RATE_85: number;
};
export declare const EDUCATOR_EXPENSES: {
    MAX_DEDUCTION: number;
};
export declare const SCHEDULE_E: {
    PASSIVE_LOSS_ALLOWANCE: number;
    PHASE_OUT_START: number;
    PHASE_OUT_RANGE: number;
};
export declare const FORM_8582: {
    SPECIAL_ALLOWANCE: number;
    SPECIAL_ALLOWANCE_MFS: number;
    PHASE_OUT_START: number;
    PHASE_OUT_START_MFS: number;
    PHASE_OUT_RANGE: number;
    PHASE_OUT_RANGE_MFS: number;
};
export declare const EV_CREDIT: {
    NEW_VEHICLE_MAX: number;
    NEW_CRITICAL_MINERAL: number;
    NEW_BATTERY_COMPONENT: number;
    NEW_MSRP_CAP_VAN_SUV_TRUCK: number;
    NEW_MSRP_CAP_OTHER: number;
    NEW_INCOME_LIMIT_MFJ: number;
    NEW_INCOME_LIMIT_HOH: number;
    NEW_INCOME_LIMIT_SINGLE: number;
    USED_VEHICLE_MAX: number;
    USED_PRICE_CAP: number;
    USED_INCOME_LIMIT_MFJ: number;
    USED_INCOME_LIMIT_HOH: number;
    USED_INCOME_LIMIT_SINGLE: number;
};
export declare const ENERGY_EFFICIENCY: {
    RATE: number;
    AGGREGATE_ANNUAL_LIMIT: number;
    HEAT_PUMP_ANNUAL_LIMIT: number;
    NON_HP_ANNUAL_LIMIT: number;
    WINDOWS_LIMIT: number;
    DOORS_LIMIT: number;
    ELECTRICAL_PANEL_LIMIT: number;
    HOME_ENERGY_AUDIT_LIMIT: number;
};
export declare const FOREIGN_TAX_CREDIT: {
    SIMPLIFIED_ELECTION_LIMIT: number;
    SIMPLIFIED_ELECTION_LIMIT_MFJ: number;
};
export declare const SANCTIONED_COUNTRIES: string[];
export declare const EXCESS_SS_TAX: {
    SS_TAX_RATE: number;
    SS_WAGE_BASE: number;
    MAX_SS_TAX: number;
};
export declare const ALIMONY: {
    TCJA_CUTOFF_DATE: string;
};
export declare const ESTIMATED_TAX_PENALTY: {
    RATE: number;
    REQUIRED_ANNUAL_PAYMENT_RATE: number;
    PRIOR_YEAR_SAFE_HARBOR: number;
    PRIOR_YEAR_SAFE_HARBOR_HIGH_INCOME: number;
    HIGH_INCOME_THRESHOLD: number;
    MINIMUM_PENALTY_THRESHOLD: number;
    ANNUALIZATION_FACTORS: readonly number[];
    QUARTERLY_INSTALLMENT_PERCENTAGES: readonly number[];
    DAYS_MATRIX: readonly (readonly number[])[];
    PERIOD_RATES: readonly number[];
};
export declare const KIDDIE_TAX: {
    UNEARNED_INCOME_THRESHOLD: number;
    STANDARD_DEDUCTION_UNEARNED: number;
    AGE_LIMIT: number;
    STUDENT_AGE_LIMIT: number;
};
export declare const FEIE: {
    EXCLUSION_AMOUNT: number;
    HOUSING_BASE: number;
    HOUSING_MAX_EXCLUSION: number;
};
export declare const SCHEDULE_H: {
    CASH_WAGE_THRESHOLD: number;
    FUTA_WAGE_THRESHOLD: number;
    SS_RATE: number;
    MEDICARE_RATE: number;
    FUTA_RATE: number;
    FUTA_WAGE_BASE: number;
    SS_WAGE_BASE: number;
};
export declare const NOL: {
    DEDUCTION_LIMIT_RATE: number;
};
export declare const ADOPTION_CREDIT: {
    MAX_CREDIT: number;
    PHASE_OUT_START: number;
    PHASE_OUT_RANGE: number;
};
export declare const DEPENDENT_CARE_FSA: {
    MAX_EXCLUSION: number;
    MAX_EXCLUSION_MFS: number;
};
export declare const PREMIUM_TAX_CREDIT: {
    FPL_BASE_48: number;
    FPL_INCREMENT_48: number;
    FPL_BASE_AK: number;
    FPL_INCREMENT_AK: number;
    FPL_BASE_HI: number;
    FPL_INCREMENT_HI: number;
    APPLICABLE_FIGURE_TABLE: readonly [{
        readonly floor: 0;
        readonly ceiling: 150;
        readonly initialPct: 0;
        readonly finalPct: 0;
    }, {
        readonly floor: 150;
        readonly ceiling: 200;
        readonly initialPct: 0;
        readonly finalPct: 0.02;
    }, {
        readonly floor: 200;
        readonly ceiling: 250;
        readonly initialPct: 0.02;
        readonly finalPct: 0.04;
    }, {
        readonly floor: 250;
        readonly ceiling: 300;
        readonly initialPct: 0.04;
        readonly finalPct: 0.06;
    }, {
        readonly floor: 300;
        readonly ceiling: 400;
        readonly initialPct: 0.06;
        readonly finalPct: 0.085;
    }, {
        readonly floor: 400;
        readonly ceiling: number;
        readonly initialPct: 0.085;
        readonly finalPct: 0.085;
    }];
    MIN_FPL_PERCENTAGE: number;
    REPAYMENT_CAPS: readonly [{
        readonly floor: 0;
        readonly ceiling: 200;
        readonly singleCap: 375;
        readonly otherCap: 750;
    }, {
        readonly floor: 200;
        readonly ceiling: 300;
        readonly singleCap: 975;
        readonly otherCap: 1950;
    }, {
        readonly floor: 300;
        readonly ceiling: 400;
        readonly singleCap: 1625;
        readonly otherCap: 3250;
    }];
};
export declare const SCHEDULE_1A: {
    TIPS_CAP: number;
    TIPS_PHASE_OUT_SINGLE: number;
    TIPS_PHASE_OUT_MFJ: number;
    TIPS_PHASE_OUT_RATE: number;
    TIPS_PHASE_OUT_STEP: number;
    OVERTIME_CAP_SINGLE: number;
    OVERTIME_CAP_MFJ: number;
    OVERTIME_PHASE_OUT_SINGLE: number;
    OVERTIME_PHASE_OUT_MFJ: number;
    OVERTIME_PHASE_OUT_RATE: number;
    OVERTIME_PHASE_OUT_STEP: number;
    CAR_LOAN_CAP: number;
    CAR_LOAN_PHASE_OUT_SINGLE: number;
    CAR_LOAN_PHASE_OUT_MFJ: number;
    CAR_LOAN_PHASE_OUT_RATE: number;
    CAR_LOAN_PHASE_OUT_STEP: number;
    SENIOR_AMOUNT: number;
    SENIOR_PHASE_OUT_SINGLE: number;
    SENIOR_PHASE_OUT_MFJ: number;
    SENIOR_PHASE_OUT_RATE: number;
};
export declare const HOME_SALE_EXCLUSION: {
    SINGLE_MAX: number;
    MFJ_MAX: number;
    OWNERSHIP_MONTHS_REQUIRED: number;
    RESIDENCE_MONTHS_REQUIRED: number;
};
export declare const CHARITABLE_AGI_LIMITS: {
    CASH_PUBLIC_RATE: number;
    NON_CASH_RATE: number;
    NON_CASH_ORDINARY_RATE: number;
    OVERALL_LIMIT_RATE: number;
};
export declare const FORM_8283: {
    SECTION_B_THRESHOLD: number;
    CARRYFORWARD_YEARS: number;
};
export declare const CANCELLATION_OF_DEBT: {
    MIN_REPORTING_AMOUNT: number;
};
export declare const EXCESS_CONTRIBUTION: {
    PENALTY_RATE: number;
};
export declare const ESA_CONTRIBUTION_LIMIT = 2000;
export declare const SCHOLARSHIP_CREDIT: {
    MAX_CREDIT: number;
};
export declare const EMERGENCY_DISTRIBUTION: {
    ANNUAL_LIMIT: number;
    REPAYMENT_PERIOD_YEARS: number;
};
export declare const DISTRIBUTION_529: {
    PENALTY_RATE: number;
};
export declare const QOZ: {
    DEFERRAL_PERIOD_5_YEAR_STEP_UP: number;
    DEFERRAL_PERIOD_7_YEAR_STEP_UP: number;
};
export declare const FORM_4137: {
    SS_RATE: number;
    MEDICARE_RATE: number;
    SS_WAGE_BASE: number;
};
export declare const DEPENDENT_CARE_EMPLOYER: {
    MAX_EXCLUSION: number;
    MAX_EXCLUSION_MFS: number;
    STUDENT_DISABLED_DEEMED_ONE: number;
    STUDENT_DISABLED_DEEMED_TWO: number;
};
export declare const SCHEDULE_R: {
    INITIAL_AMOUNT_SINGLE: number;
    INITIAL_AMOUNT_MFJ_BOTH: number;
    INITIAL_AMOUNT_MFJ_ONE: number;
    INITIAL_AMOUNT_MFS: number;
    AGI_THRESHOLD_SINGLE: number;
    AGI_THRESHOLD_MFJ: number;
    AGI_THRESHOLD_MFS: number;
    AGI_REDUCTION_RATE: number;
    CREDIT_RATE: number;
};
export declare const SOLO_401K: {
    EMPLOYEE_DEFERRAL_LIMIT: number;
    CATCH_UP_50_PLUS: number;
    SUPER_CATCH_UP_60_63: number;
    EMPLOYER_CONTRIBUTION_RATE: number;
    SE_EFFECTIVE_RATE: number;
    ANNUAL_ADDITION_LIMIT: number;
    COMPENSATION_CAP: number;
};
export declare const SEP_IRA: {
    CONTRIBUTION_RATE: number;
    SE_EFFECTIVE_RATE: number;
    MAX_CONTRIBUTION: number;
    COMPENSATION_CAP: number;
};
export declare const SIMPLE_IRA: {
    EMPLOYEE_DEFERRAL_LIMIT: number;
    CATCH_UP_50_PLUS: number;
    SUPER_CATCH_UP_60_63: number;
    EMPLOYER_MATCH_RATE: number;
    EMPLOYER_NONELECTIVE_RATE: number;
};
export declare const LTC_PREMIUM_LIMITS_2025: {
    readonly AGE_40_OR_UNDER: 480;
    readonly AGE_41_TO_50: 900;
    readonly AGE_51_TO_60: 1800;
    readonly AGE_61_TO_70: 4810;
    readonly AGE_71_AND_OVER: 6020;
};
export declare const EV_REFUELING: {
    CREDIT_RATE: number;
    PERSONAL_CAP: number;
    BUSINESS_CAP: number;
};
export declare const PLAUSIBILITY: {
    W2_WAGES_HIGH: number;
    SELF_EMPLOYMENT_INCOME_HIGH: number;
    INTEREST_INCOME_HIGH: number;
    DIVIDEND_INCOME_HIGH: number;
    RETIREMENT_DISTRIBUTION_HIGH: number;
    CHARITABLE_CASH_AGI_RATE: number;
    MEDICAL_AGI_RATE: number;
    SALT_ENTERED_HIGH: number;
    HOME_OFFICE_AREA_PCT: number;
    VEHICLE_BUSINESS_MILES_HIGH: number;
};
