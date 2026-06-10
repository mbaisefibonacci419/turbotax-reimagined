/**
 * Form 1040 Section Sub-Orchestrators
 *
 * Extracted from the monolithic calculateForm1040() function for maintainability.
 * Each function handles one logical section of the Form 1040 calculation and
 * mutates the shared Form1040Context accumulator.
 *
 * The main orchestrator in form1040.ts calls these in order:
 *   1. calculateIncomeSection
 *   2. calculateSelfEmploymentSection
 *   3. calculateCapitalAssetsSection
 *   4. calculatePreliminaryIncomeSection
 *   5. calculateAdjustmentsSection
 *   6. calculateDeductionsSection
 *   7. calculateIncomeTaxSection
 *   8. calculateAdditionalTaxesSection
 *   9. calculateCreditsSection
 *  10. calculateLiabilitySection
 *  11. assembleForm1040Result (output builder)
 */
import { FilingStatus, TaxReturn, CalculationResult, ScheduleCResult, ScheduleSEResult, ScheduleAResult, ScheduleDResult, SocialSecurityResult, ScheduleEResult, ScheduleFResult, ScheduleRResult, DependentCareResult, SaversCreditResult, CleanEnergyResult, EVCreditResult, EnergyEfficiencyResult, ForeignTaxCreditResult, AdoptionCreditResult, EstimatedTaxPenaltyResult, ScheduleHResult, PremiumTaxCreditResult, Schedule1AResult, HomeSaleResult, Form982Result, InvestmentInterestResult, Form5329Result, EVRefuelingCreditResult, Form4797Result, Form4797Property, Form4137Result, HoHValidationResult, RentalProperty, DeceasedSpouseValidationResult, CreditsResult, Form7206Result, ArcherMSAResult, Solo401kResult, SEPIRAResult, ScholarshipCreditResult, Form8801Result } from '../types/index.js';
import { K1RoutingResult } from './k1.js';
import { Form8606Result } from './form8606.js';
import { KiddieTaxResult } from './kiddieTax.js';
import { FEIEResult } from './feie.js';
import { AMTResult } from './amt.js';
import type { Form8582Result } from '../types/index.js';
import type { TraceOptions } from '../types/index.js';
import type { TraceBuilder } from './traceBuilder.js';
/**
 * Coerce non-finite numeric values (NaN, Infinity, null, undefined) to 0.
 */
export declare function safeNum(v: unknown): number;
/**
 * Mutable accumulator passed between section sub-orchestrators.
 * Each section reads what it needs and writes its outputs here.
 */
export interface Form1040Context {
    taxReturn: TaxReturn;
    filingStatus: FilingStatus;
    tb: TraceBuilder;
    traceOptions?: TraceOptions;
    hohValidation?: HoHValidationResult;
    deceasedSpouseValidation?: DeceasedSpouseValidationResult;
    scheduleC?: ScheduleCResult;
    scheduleCNetProfit: number;
    scheduleFResult?: ScheduleFResult;
    scheduleFNetProfit: number;
    totalWages: number;
    totalInterest: number;
    totalOrdinaryDividends: number;
    totalQualifiedDividends: number;
    totalCapitalGainDistributions: number;
    otherIncome: number;
    iraDistributionsGross: number;
    iraDistributionsTaxable: number;
    totalQCD: number;
    regularIRADistForForm8606: number;
    pensionDistributionsGross: number;
    pensionDistributionsTaxable: number;
    totalRetirementIncome: number;
    totalUnemployment: number;
    total1099MISCIncome: number;
    misc1099Rents: number;
    misc1099Royalties: number;
    totalGamblingIncome: number;
    form982Result?: Form982Result;
    cancellationOfDebtIncome: number;
    alimonyReceivedIncome: number;
    taxable529Income: number;
    penalty529: number;
    k1Routing?: K1RoutingResult;
    k1OrdinaryIncome: number;
    k1Interest: number;
    k1OrdinaryDividends: number;
    k1QualifiedDividends: number;
    k1ShortTermGain: number;
    k1LongTermGain: number;
    k1RentalIncome: number;
    k1Royalties: number;
    k1QBI: number;
    k1Section179Deduction: number;
    k1CharitableCash: number;
    k1CharitableNonCash: number;
    k1InvestmentInterestExpense: number;
    k1OtherDeductions: number;
    k1ForeignTaxPaid: number;
    k1OtherCredits: number;
    hsaDistResult?: {
        totalTaxable: number;
        totalPenalty: number;
    };
    hsaDistributionTaxable: number;
    hsaDistributionPenalty: number;
    hsaExcessWithdrawalEarnings: number;
    iraExcessWithdrawalEarnings: number;
    scheduleSE?: ScheduleSEResult;
    seDeductibleHalf: number;
    k1SEIncome: number;
    totalSENetProfit: number;
    w2SSWages: number;
    solo401kResult?: Solo401kResult;
    solo401kTotalContribution: number;
    sepIRAResult?: SEPIRAResult;
    sepIRATotalContribution: number;
    simpleIraTotalContribution: number;
    taxpayerAge?: number;
    homeSaleResult?: HomeSaleResult;
    homeSaleTaxableGain: number;
    scheduleD?: ScheduleDResult;
    form4797Result?: Form4797Result;
    form4797OrdinaryIncome: number;
    form4797Section1231GainOrLoss: number;
    form4797Unrecaptured1250: number;
    form4797LTCGContribution: number;
    scheduleDNetGain: number;
    capitalLossDeduction: number;
    scheduleDLongTermGain: number;
    allInterest: number;
    allOrdinaryDividends: number;
    allQualifiedDividends: number;
    form4797OrdinaryLoss: number;
    dcFSATaxableExcess: number;
    incomeBeforeSS: number;
    taxExemptInterest: number;
    socialSecurityResult?: SocialSecurityResult;
    taxableSocialSecurity: number;
    scheduleEResult?: ScheduleEResult;
    form8582Result?: Form8582Result;
    scheduleEIncome: number;
    k1PassiveSuspendedAdj: number;
    feieResult?: FEIEResult;
    feieExclusion: number;
    totalIncome: number;
    selfEmployedHealthInsurance: number;
    form7206Result?: Form7206Result;
    hsaDeduction: number;
    archerMSADeduction: number;
    archerMSAResult?: ArcherMSAResult;
    movingExpenses: number;
    studentLoanInterest: number;
    iraDeduction: number;
    educatorExpenses: number;
    earlyWithdrawalPenalty: number;
    alimonyDeduction: number;
    retirementContributions: number;
    totalAdjustments: number;
    agi: number;
    standardDeduction: number;
    scheduleA?: ScheduleAResult;
    itemizedDeduction: number;
    investmentInterestResult?: InvestmentInterestResult;
    investmentInterestDeduction: number;
    deductionUsed: 'standard' | 'itemized';
    deductionAmount: number;
    qbiDeduction: number;
    nolDeduction: number;
    schedule1AResult?: Schedule1AResult;
    schedule1ADeduction: number;
    taxableIncome: number;
    incomeTax: number;
    preferentialTax: number;
    section1250Tax: number;
    marginalTaxRate: number;
    amtResult?: AMTResult;
    amtAmount: number;
    seTax: number;
    niitTax: number;
    additionalMedicareTaxW2: number;
    earlyDistributionPenalty: number;
    kiddieTaxResults: KiddieTaxResult[];
    kiddieTaxAmount: number;
    scheduleHResult?: ScheduleHResult;
    scheduleHTax: number;
    form5329Result?: Form5329Result;
    excessContributionPenalty: number;
    form4137Result?: Form4137Result;
    form4137Tax: number;
    totalTaxBeforeCredits: number;
    totalTax: number;
    credits: CreditsResult;
    earnedIncome: number;
    dependentCareResult?: DependentCareResult;
    saversCreditResult?: SaversCreditResult;
    cleanEnergyResult?: CleanEnergyResult;
    evCreditResult?: EVCreditResult;
    energyEfficiencyResult?: EnergyEfficiencyResult;
    foreignTaxCreditResult?: ForeignTaxCreditResult;
    totalForeignTaxPaid: number;
    adoptionCreditResult?: AdoptionCreditResult;
    evRefuelingResult?: EVRefuelingCreditResult;
    scholarshipCreditResult?: ScholarshipCreditResult;
    scheduleRResult?: ScheduleRResult;
    form8801Result?: Form8801Result;
    ptcResult?: PremiumTaxCreditResult;
    premiumTaxCreditNet: number;
    excessAPTCRepayment: number;
    taxAfterNonRefundable: number;
    taxAfterCredits: number;
    w2Withholding: number;
    form1099Withholding: number;
    form8959WithholdingCredit: number;
    totalWithholding: number;
    estimatedPayments: number;
    totalPayments: number;
    estimatedTaxPenaltyResult?: EstimatedTaxPenaltyResult;
    estimatedTaxPenalty: number;
    form8606Result?: Form8606Result;
    balance: number;
    amountOwed: number;
    refundAmount: number;
    refundAppliedToNextYear: number;
    netRefund: number;
    effectiveTaxRate: number;
    quarterlyPayment: number;
}
/**
 * Create a fresh context with all numeric fields initialized to 0.
 */
export declare function createForm1040Context(taxReturn: TaxReturn, filingStatus: FilingStatus, tb: TraceBuilder, traceOptions?: TraceOptions): Form1040Context;
export declare function calculateIncomeSection(ctx: Form1040Context): void;
export declare function calculateSelfEmploymentSection(ctx: Form1040Context): void;
export declare function convertDisposedRentalsToForm4797(rentalProperties: RentalProperty[]): Form4797Property[];
export declare function calculateCapitalAssetsSection(ctx: Form1040Context): void;
export declare function calculatePreliminaryIncomeSection(ctx: Form1040Context): void;
export declare function calculateAdjustmentsSection(ctx: Form1040Context): void;
export declare function calculateDeductionsSection(ctx: Form1040Context): void;
export declare function calculateIncomeTaxSection(ctx: Form1040Context): void;
export declare function calculateAdditionalTaxesSection(ctx: Form1040Context): void;
export declare function calculateCreditsSection(ctx: Form1040Context): void;
export declare function calculateLiabilitySection(ctx: Form1040Context): void;
export declare function assembleForm1040Result(ctx: Form1040Context): CalculationResult;
/**
 * Student loan interest deduction with income phase-out.
 */
export declare function calculateStudentLoanDeduction(amount: number, income: number, filingStatus: FilingStatus): number;
/**
 * Traditional IRA deduction with income phase-out.
 */
export declare function calculateIRADeduction(amount: number, income: number, filingStatus: FilingStatus, coveredByEmployerPlan?: boolean, spouseCoveredByEmployerPlan?: boolean): number;
/**
 * Standard deduction with additional amounts for age 65+ and/or legally blind.
 */
export declare function calculateStandardDeduction(taxReturn: TaxReturn, filingStatus: FilingStatus, earnedIncome?: number): number;
/**
 * Check if a person is age 65 or older by end of the tax year.
 * IRS rule: you are considered 65 on the day before your 65th birthday.
 */
export declare function isAge65OrOlder(dateOfBirth: string | undefined, taxYear: number): boolean;
/**
 * Alimony deduction for pre-2019 divorce agreements.
 */
export declare function calculateAlimonyDeduction(alimony?: {
    totalPaid: number;
    divorceDate: string;
}): number;
/**
 * Count EITC-qualifying children from the dependents array.
 */
export declare function countEITCQualifyingChildren(dependents: import('../types/index.js').Dependent[], taxYear: number | undefined, ctcFallback: number): number;
