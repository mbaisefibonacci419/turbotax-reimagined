/**
 * Tax Year Registry — constants lookup by year.
 *
 * Decouples the engine from hardcoded year-specific imports.
 * Start with 2025; future years implement the same interface.
 */
import type { TaxBracket } from '../types/index.js';
/** Shape of a single federal income tax bracket row (same as TaxBracket). */
export type BracketEntry = TaxBracket;
/** Provision flags for year-specific legislative features */
export interface ProvisionFlags {
    /** OBBBA (One Big Beautiful Bill Act) — Schedule 1-A, expanded SALT cap, scholarship credit */
    hasSchedule1A: boolean;
    /** OBBBA scholarship credit (IRC 25F) — new for 2025+ */
    hasScholarshipCredit: boolean;
    /** OBBBA expanded SALT cap ($40k/$80k vs TCJA $10k) */
    hasExpandedSALTCap: boolean;
    /** TCJA — Tax Cuts and Jobs Act provisions still in effect */
    hasTCJA: boolean;
    /** Senior citizen standard deduction bonus (OBBBA) */
    hasSeniorDeductionBonus: boolean;
    /** Tips/overtime income exclusion (OBBBA, future years) */
    hasTipsOvertimeExclusion: boolean;
}
type T2025 = typeof import('./tax2025.js');
type Amt2025 = typeof import('./amt2025.js').AMT_2025;
type EitcModule = typeof import('../engine/eitc.js');
/** All tax constants for a given year (2025 module is the reference shape for future years). */
export interface TaxYearConstants {
    taxYear: number;
    provisions: ProvisionFlags;
    brackets: T2025['TAX_BRACKETS_2025'];
    standardDeduction: T2025['STANDARD_DEDUCTION_2025'];
    additionalStandardDeduction: T2025['ADDITIONAL_STANDARD_DEDUCTION'];
    dependentStandardDeduction: T2025['DEPENDENT_STANDARD_DEDUCTION'];
    seTax: T2025['SE_TAX'];
    qbi: T2025['QBI'];
    homeOffice: T2025['HOME_OFFICE'];
    homeOfficeDepreciation: T2025['HOME_OFFICE_DEPRECIATION'];
    vehicle: T2025['VEHICLE'];
    vehicleDepreciation: T2025['VEHICLE_DEPRECIATION'];
    section179: T2025['SECTION_179'];
    macrsGdsRates: T2025['MACRS_GDS_RATES'];
    macrsGdsRatesMidQuarter: T2025['MACRS_GDS_RATES_MID_QUARTER'];
    bonusDepreciationRate2025: T2025['BONUS_DEPRECIATION_RATE_2025'];
    depreciationTaxYear: T2025['DEPRECIATION_TAX_YEAR'];
    scheduleA: T2025['SCHEDULE_A'];
    childTaxCredit: T2025['CHILD_TAX_CREDIT'];
    educationCredits: T2025['EDUCATION_CREDITS'];
    estimatedTax: T2025['ESTIMATED_TAX'];
    hsa: T2025['HSA'];
    archerMsa: T2025['ARCHER_MSA'];
    studentLoanInterest: T2025['STUDENT_LOAN_INTEREST'];
    ira: T2025['IRA'];
    capitalGainsRates: T2025['CAPITAL_GAINS_RATES'];
    niit: T2025['NIIT'];
    qcd: T2025['QCD'];
    earlyDistribution: T2025['EARLY_DISTRIBUTION'];
    actc: T2025['ACTC'];
    dependentCare: T2025['DEPENDENT_CARE'];
    saversCredit: T2025['SAVERS_CREDIT'];
    cleanEnergy: T2025['CLEAN_ENERGY'];
    hsaDistributions: T2025['HSA_DISTRIBUTIONS'];
    scheduleD: T2025['SCHEDULE_D'];
    socialSecurity: T2025['SOCIAL_SECURITY'];
    educatorExpenses: T2025['EDUCATOR_EXPENSES'];
    scheduleE: T2025['SCHEDULE_E'];
    form8582: T2025['FORM_8582'];
    evCredit: T2025['EV_CREDIT'];
    energyEfficiency: T2025['ENERGY_EFFICIENCY'];
    foreignTaxCredit: T2025['FOREIGN_TAX_CREDIT'];
    sanctionedCountries: T2025['SANCTIONED_COUNTRIES'];
    excessSsTax: T2025['EXCESS_SS_TAX'];
    alimony: T2025['ALIMONY'];
    estimatedTaxPenalty: T2025['ESTIMATED_TAX_PENALTY'];
    kiddieTax: T2025['KIDDIE_TAX'];
    feie: T2025['FEIE'];
    scheduleH: T2025['SCHEDULE_H'];
    nol: T2025['NOL'];
    adoptionCredit: T2025['ADOPTION_CREDIT'];
    dependentCareFsa: T2025['DEPENDENT_CARE_FSA'];
    premiumTaxCredit: T2025['PREMIUM_TAX_CREDIT'];
    schedule1A: T2025['SCHEDULE_1A'];
    homeSaleExclusion: T2025['HOME_SALE_EXCLUSION'];
    charitableAgiLimits: T2025['CHARITABLE_AGI_LIMITS'];
    form8283: T2025['FORM_8283'];
    cancellationOfDebt: T2025['CANCELLATION_OF_DEBT'];
    excessContribution: T2025['EXCESS_CONTRIBUTION'];
    esaContributionLimit: T2025['ESA_CONTRIBUTION_LIMIT'];
    scholarshipCredit: T2025['SCHOLARSHIP_CREDIT'];
    emergencyDistribution: T2025['EMERGENCY_DISTRIBUTION'];
    distribution529: T2025['DISTRIBUTION_529'];
    qoz: T2025['QOZ'];
    form4137: T2025['FORM_4137'];
    dependentCareEmployer: T2025['DEPENDENT_CARE_EMPLOYER'];
    scheduleR: T2025['SCHEDULE_R'];
    solo401k: T2025['SOLO_401K'];
    sepIra: T2025['SEP_IRA'];
    simpleIra: T2025['SIMPLE_IRA'];
    ltcPremiumLimits: T2025['LTC_PREMIUM_LIMITS_2025'];
    evRefueling: T2025['EV_REFUELING'];
    plausibility: T2025['PLAUSIBILITY'];
    amt: Amt2025;
    eitc: {
        brackets: EitcModule['EITC_BRACKETS'];
        investmentIncomeLimit: EitcModule['INVESTMENT_INCOME_LIMIT'];
    };
}
/** Look up constants for a tax year. Throws if year not registered. */
export declare function getConstants(year: number): TaxYearConstants;
/** Check if a tax year is supported */
export declare function isSupportedYear(year: number): boolean;
/** Get all supported tax years */
export declare function getSupportedYears(): number[];
/** Default tax year for new returns */
export declare const DEFAULT_TAX_YEAR = 2025;
export {};
