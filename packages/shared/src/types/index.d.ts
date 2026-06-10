export declare enum FilingStatus {
    Single = 1,
    MarriedFilingJointly = 2,
    MarriedFilingSeparately = 3,
    HeadOfHousehold = 4,
    QualifyingSurvivingSpouse = 5
}
export type W2Box12Code = 'A' | 'B' | 'C' | 'D' | 'DD' | 'E' | 'F' | 'G' | 'H' | 'J' | 'K' | 'L' | 'M' | 'N' | 'P' | 'Q' | 'R' | 'S' | 'T' | 'V' | 'W' | 'Y' | 'Z' | 'AA' | 'BB' | 'CC' | 'EE' | 'FF' | 'GG' | 'HH' | 'II';
export interface W2Box12Entry {
    code: W2Box12Code;
    amount: number;
}
export interface W2Box13 {
    statutoryEmployee?: boolean;
    retirementPlan?: boolean;
    thirdPartySickPay?: boolean;
}
export interface W2Income {
    id: string;
    employerName: string;
    employerEin?: string;
    wages: number;
    federalTaxWithheld: number;
    socialSecurityWages?: number;
    socialSecurityTax?: number;
    medicareWages?: number;
    medicareTax?: number;
    stateTaxWithheld?: number;
    stateWages?: number;
    state?: string;
    box12?: W2Box12Entry[];
    box13?: W2Box13;
    isSpouse?: boolean;
}
export interface Income1099NEC {
    id: string;
    payerName: string;
    payerEin?: string;
    amount: number;
    federalTaxWithheld?: number;
    businessId?: string;
    stateCode?: string;
    stateTaxWithheld?: number;
}
export interface Income1099K {
    id: string;
    platformName: string;
    grossAmount: number;
    cardNotPresent?: number;
    federalTaxWithheld?: number;
    returnsAndAllowances?: number;
    businessId?: string;
}
export interface Income1099INT {
    id: string;
    payerName: string;
    amount: number;
    earlyWithdrawalPenalty?: number;
    usBondInterest?: number;
    federalTaxWithheld?: number;
    taxExemptInterest?: number;
    stateCode?: string;
    stateTaxWithheld?: number;
}
export interface Income1099OID {
    id: string;
    payerName: string;
    originalIssueDiscount: number;
    otherPeriodicInterest?: number;
    earlyWithdrawalPenalty?: number;
    federalTaxWithheld?: number;
    marketDiscount?: number;
    acquisitionPremium?: number;
    description?: string;
    stateCode?: string;
    stateTaxWithheld?: number;
}
export interface Income1099DIV {
    id: string;
    payerName: string;
    ordinaryDividends: number;
    qualifiedDividends: number;
    capitalGainDistributions?: number;
    federalTaxWithheld?: number;
    foreignTaxPaid?: number;
    foreignSourceIncome?: number;
    stateCode?: string;
    stateTaxWithheld?: number;
}
export interface Income1099R {
    id: string;
    payerName: string;
    grossDistribution: number;
    taxableAmount: number;
    federalTaxWithheld?: number;
    distributionCode?: string;
    isIRA?: boolean;
    isRothIRA?: boolean;
    rothContributionBasis?: number;
    qcdAmount?: number;
    stateCode?: string;
    stateTaxWithheld?: number;
    isSpouse?: boolean;
    earlyDistributionExceptionCode?: string;
    earlyDistributionExceptionAmount?: number;
    useSimplifiedMethod?: boolean;
    simplifiedMethod?: {
        totalContributions: number;
        ageAtStartDate: number;
        isJointAndSurvivor: boolean;
        combinedAge?: number;
        paymentsThisYear: number;
        priorYearTaxFreeRecovery?: number;
    };
}
export interface Income1099G {
    id: string;
    payerName: string;
    unemploymentCompensation: number;
    federalTaxWithheld?: number;
    stateCode?: string;
    stateTaxWithheld?: number;
}
export interface Income1099MISC {
    id: string;
    payerName: string;
    rents?: number;
    royalties?: number;
    otherIncome: number;
    federalTaxWithheld?: number;
    stateTaxWithheld?: number;
    stateCode?: string;
}
export interface Income1099B {
    id: string;
    brokerName: string;
    description: string;
    dateAcquired?: string;
    dateSold: string;
    proceeds: number;
    costBasis: number;
    isLongTerm: boolean;
    federalTaxWithheld?: number;
    washSaleLossDisallowed?: number;
    basisReportedToIRS?: boolean;
    isCollectible?: boolean;
}
export interface IncomeSSA1099 {
    id: string;
    totalBenefits: number;
    federalTaxWithheld?: number;
}
export interface RentalProperty {
    id: string;
    address: string;
    propertyType: 'single_family' | 'multi_family' | 'condo' | 'commercial' | 'other';
    daysRented: number;
    personalUseDays: number;
    rentalIncome: number;
    advertising?: number;
    auto?: number;
    cleaning?: number;
    commissions?: number;
    insurance?: number;
    legal?: number;
    management?: number;
    mortgageInterest?: number;
    otherInterest?: number;
    repairs?: number;
    supplies?: number;
    taxes?: number;
    utilities?: number;
    depreciation?: number;
    otherExpenses?: number;
    activeParticipation?: boolean;
    disposedDuringYear?: boolean;
    dispositionGainLoss?: number;
    priorYearUnallowedLoss?: number;
    salesPrice?: number;
    costBasis?: number;
    cumulativeDepreciation?: number;
}
export interface RoyaltyProperty {
    id: string;
    description: string;
    royaltyType: 'oil_gas' | 'mineral' | 'book_literary' | 'music' | 'patent' | 'timber' | 'other';
    royaltyIncome: number;
    advertising?: number;
    auto?: number;
    cleaning?: number;
    commissions?: number;
    insurance?: number;
    legal?: number;
    management?: number;
    mortgageInterest?: number;
    otherInterest?: number;
    repairs?: number;
    supplies?: number;
    taxes?: number;
    utilities?: number;
    depreciation?: number;
    otherExpenses?: number;
}
export interface IncomeK1 {
    id: string;
    entityName: string;
    entityEin?: string;
    entityType: 'partnership' | 's_corp' | 'estate' | 'trust';
    ordinaryBusinessIncome?: number;
    rentalIncome?: number;
    guaranteedPayments?: number;
    interestIncome?: number;
    ordinaryDividends?: number;
    qualifiedDividends?: number;
    royalties?: number;
    shortTermCapitalGain?: number;
    longTermCapitalGain?: number;
    netSection1231Gain?: number;
    otherIncome?: number;
    section199AQBI?: number;
    selfEmploymentIncome?: number;
    section179Deduction?: number;
    federalTaxWithheld?: number;
    box13CharitableCash?: number;
    box13CharitableNonCash?: number;
    box13InvestmentInterestExpense?: number;
    box131231Loss?: number;
    box13OtherDeductions?: number;
    box15ForeignTaxPaid?: number;
    box15OtherCredits?: number;
    box15ForeignCountry?: string;
    isCooperativePatronage?: boolean;
    isPassiveActivity?: boolean;
    isLimitedPartner?: boolean;
    priorYearUnallowedLoss?: number;
    disposedDuringYear?: boolean;
    dispositionGainLoss?: number;
}
export interface Income1099SA {
    id: string;
    payerName: string;
    grossDistribution: number;
    distributionCode?: string;
    qualifiedMedicalExpenses?: boolean;
    federalTaxWithheld?: number;
}
export interface IncomeW2G {
    id: string;
    payerName: string;
    grossWinnings: number;
    federalTaxWithheld?: number;
    typeOfWager?: string;
    stateCode?: string;
    stateTaxWithheld?: number;
}
export interface DirectDeposit {
    routingNumber: string;
    accountNumber: string;
    accountType: 'checking' | 'savings';
}
export interface Dependent {
    id: string;
    firstName: string;
    lastName: string;
    ssn?: string;
    ssnLastFour?: string;
    relationship: string;
    dateOfBirth?: string;
    monthsLivedWithYou: number;
    isStudent?: boolean;
    isDisabled?: boolean;
}
export interface BusinessInfo {
    id: string;
    businessName?: string;
    businessEin?: string;
    principalBusinessCode?: string;
    businessDescription?: string;
    accountingMethod: 'cash' | 'accrual';
    didStartThisYear: boolean;
    isSpouse?: boolean;
}
export interface ExpenseEntry {
    id: string;
    scheduleCLine: number;
    category: string;
    description?: string;
    amount: number;
    businessId?: string;
}
export interface HomeOfficeInfo {
    method: 'simplified' | 'actual' | null;
    squareFeet?: number;
    totalHomeSquareFeet?: number;
    mortgageInterest?: number;
    realEstateTaxes?: number;
    casualtyLosses?: number;
    excessMortgageInterest?: number;
    excessRealEstateTaxes?: number;
    insurance?: number;
    rent?: number;
    repairsAndMaintenance?: number;
    utilities?: number;
    otherExpenses?: number;
    homeCostOrValue?: number;
    landValue?: number;
    dateFirstUsedForBusiness?: string;
    priorYearOperatingCarryover?: number;
    priorYearDepreciationCarryover?: number;
    actualExpenses?: number;
}
export interface HomeOfficeResult {
    method: 'simplified' | 'actual';
    businessPercentage: number;
    simplifiedDeduction?: number;
    grossIncome?: number;
    tier1Total?: number;
    tier2Total?: number;
    tier3Total?: number;
    tier1Allowed?: number;
    tier2Allowed?: number;
    tier3Allowed?: number;
    depreciationComputed?: number;
    totalDeduction: number;
    operatingExpenseCarryover?: number;
    depreciationCarryover?: number;
}
export interface VehicleInfo {
    method: 'standard_mileage' | 'actual' | null;
    businessMiles?: number;
    totalMiles?: number;
    commuteMiles?: number;
    dateInService?: string;
    actualExpenses?: number;
    gas?: number;
    oilAndLubes?: number;
    repairs?: number;
    tires?: number;
    insurance?: number;
    registration?: number;
    licenses?: number;
    garageRent?: number;
    tolls?: number;
    parking?: number;
    leasePayments?: number;
    otherVehicleExpenses?: number;
    vehicleCost?: number;
    priorDepreciation?: number;
    otherMiles?: number;
    availableForPersonalUse?: boolean;
    hasAnotherVehicle?: boolean;
    writtenEvidence?: boolean;
    writtenEvidenceContemporaneous?: boolean;
    vehicleWeight?: number;
}
export interface VehicleResult {
    method: 'standard_mileage' | 'actual';
    businessUsePercentage: number;
    standardDeduction?: number;
    totalActualExpenses?: number;
    businessPortionExpenses?: number;
    depreciationComputed?: number;
    depreciationBusinessPortion?: number;
    depreciationAllowed?: number;
    section280FLimit?: number;
    section280FApplied?: boolean;
    totalDeduction: number;
    expenseBreakdown?: Record<string, number>;
    form4562PartV?: {
        totalMiles: number;
        businessMiles: number;
        commuteMiles: number;
        otherMiles: number;
        availableForPersonalUse: boolean;
        hasAnotherVehicle: boolean;
        writtenEvidence: boolean;
        writtenEvidenceContemporaneous: boolean;
    };
    depreciationMethod?: 'macrs_200db' | 'straight_line';
    warnings?: string[];
}
/** MACRS property class (GDS recovery period in years) */
export type MACRSPropertyClass = 3 | 5 | 7 | 10 | 15 | 20;
/** A depreciable business asset tracked in the asset registry */
export interface DepreciationAsset {
    id: string;
    description: string;
    cost: number;
    dateInService: string;
    propertyClass: MACRSPropertyClass;
    businessUsePercent: number;
    section179Election?: number;
    priorDepreciation?: number;
    priorSection179?: number;
    disposed?: boolean;
    businessId?: string;
    convention?: 'half-year' | 'mid-quarter';
    quarterPlaced?: 1 | 2 | 3 | 4;
    isSoftware?: boolean;
}
/** Form 4562 calculation result — Parts I through IV */
export interface Form4562Result {
    totalCostSection179Property: number;
    section179Limit: number;
    section179ThresholdReduction: number;
    section179MaxAfterReduction: number;
    section179Elected: number;
    section179BusinessIncomeLimit: number;
    section179Deduction: number;
    section179Carryforward: number;
    bonusDepreciationTotal: number;
    macrsCurrentYear: number;
    macrsPriorYears: number;
    totalDepreciation: number;
    convention: 'half-year' | 'mid-quarter';
    assetDetails: Form4562AssetDetail[];
    warnings?: string[];
}
/** Per-asset depreciation breakdown for UI display */
export interface Form4562AssetDetail {
    assetId: string;
    description: string;
    cost: number;
    businessUseBasis: number;
    section179Amount: number;
    bonusDepreciation: number;
    macrsDepreciation: number;
    totalDepreciation: number;
    depreciableRemaining: number;
    propertyClass: MACRSPropertyClass;
    yearIndex: number;
    convention: 'half-year' | 'mid-quarter';
    quarterPlaced?: 1 | 2 | 3 | 4;
}
export interface CostOfGoodsSold {
    beginningInventory?: number;
    purchases?: number;
    costOfLabor?: number;
    materialsAndSupplies?: number;
    otherCosts?: number;
    endingInventory?: number;
}
export interface ItemizedDeductions {
    medicalExpenses: number;
    saltMethod?: 'income_tax' | 'sales_tax';
    stateLocalIncomeTax: number;
    salesTaxAmount?: number;
    realEstateTax: number;
    personalPropertyTax: number;
    mortgageInterest: number;
    mortgageInsurancePremiums: number;
    mortgageBalance?: number;
    charitableCash: number;
    charitableNonCash: number;
    nonCashDonations?: NonCashDonation[];
    charitableCarryforward?: CharitableCarryforward[];
    casualtyLoss: number;
    otherDeductions: number;
}
export interface NonCashDonation {
    id: string;
    description: string;
    doneeOrganization: string;
    dateOfContribution: string;
    dateAcquired?: string;
    howAcquired?: 'purchase' | 'gift' | 'inheritance' | 'exchange' | 'other';
    fairMarketValue: number;
    costBasis?: number;
    method?: string;
    isCapitalGainProperty?: boolean;
    hasQualifiedAppraisal?: boolean;
    appraiserName?: string;
}
export type DonationCategory = 'clothing_mens' | 'clothing_womens' | 'clothing_childrens' | 'furniture' | 'electronics' | 'appliances_small' | 'appliances_large' | 'kitchen' | 'sports_recreation' | 'toys_games' | 'books_media' | 'household' | 'miscellaneous';
export type DonationItemCondition = 'good' | 'very_good' | 'like_new';
export type DonationItemSource = 'salvation_army' | 'goodwill';
export interface DonationItemEntry {
    id: string;
    name: string;
    category: DonationCategory;
    lowFMV: number;
    highFMV: number;
    source: DonationItemSource;
    keywords?: string[];
}
export interface DonationCategoryMeta {
    id: DonationCategory;
    label: string;
}
export interface DepreciationSchedule {
    category: DonationCategory | 'general';
    /** Cumulative depreciation rates by year (index 0 = year 1). Rate = fraction LOST, not retained. */
    rates: number[];
    /** Rate for items older than the rates array length */
    floorRate: number;
    /** Human-readable disclaimer displayed in UI */
    disclaimer: string;
}
export interface CharitableCarryforward {
    year: number;
    amount: number;
    category: 'cash' | 'non_cash_30' | 'non_cash_50';
}
export interface Form8283Result {
    sectionAItems: NonCashDonation[];
    sectionBItems: NonCashDonation[];
    totalNonCashFMV: number;
    allowableNonCashDeduction: number;
    allowableCashDeduction: number;
    excessCarryforward: number;
    carryforwardUsed: number;
}
export interface ChildTaxCreditInfo {
    qualifyingChildren: number;
    otherDependents: number;
}
export interface EducationCreditInfo {
    id: string;
    type: 'american_opportunity' | 'lifetime_learning';
    studentName: string;
    studentSSN?: string;
    institution: string;
    institutionAddress?: string;
    institutionEIN?: string;
    received1098T?: boolean;
    received1098TBox7?: boolean;
    tuitionPaid: number;
    scholarships?: number;
    institution2?: string;
    institution2Address?: string;
    institution2EIN?: string;
    received1098T2?: boolean;
    received1098T2Box7?: boolean;
    aotcClaimedPrior4Years?: boolean;
    enrolledHalfTime?: boolean;
    completedFirst4Years?: boolean;
    felonyDrugConviction?: boolean;
}
export interface EducationCreditStudentDetail {
    studentName: string;
    institution: string;
    creditType: 'american_opportunity' | 'lifetime_learning';
    qualifiedExpenses: number;
    creditAmount: number;
    aotcRefundable: number;
    aotcNonRefundable: number;
}
export interface DependentCareProvider {
    name: string;
    ein?: string;
    address?: string;
    amountPaid: number;
}
export interface DependentCareInfo {
    totalExpenses: number;
    qualifyingPersons: number;
    providerName?: string;
    providerEin?: string;
    providers?: DependentCareProvider[];
    spouseEarnedIncome?: number;
    dependentCareFSA?: number;
    employerBenefits?: number;
    isStudentSpouse?: boolean;
    isDisabledSpouse?: boolean;
}
export interface SaversCreditInfo {
    totalContributions: number;
}
export interface CleanEnergyInfo {
    solarElectric?: number;
    solarWaterHeating?: number;
    smallWindEnergy?: number;
    geothermalHeatPump?: number;
    batteryStorage?: number;
    fuelCell?: number;
    fuelCellKW?: number;
    priorYearCarryforward?: number;
}
export interface EVCreditInfo {
    vehicleDescription?: string;
    dateAcquired?: string;
    vehicleMSRP: number;
    purchasePrice: number;
    isNewVehicle: boolean;
    finalAssemblyUS: boolean;
    meetsBatteryComponentReq: boolean;
    meetsMineralReq: boolean;
    isVanSUVPickup?: boolean;
}
export interface EnergyEfficiencyInfo {
    heatPump?: number;
    centralAC?: number;
    waterHeater?: number;
    furnaceBoiler?: number;
    insulation?: number;
    windows?: number;
    doors?: number;
    electricalPanel?: number;
    homeEnergyAudit?: number;
}
export interface EVRefuelingProperty {
    id?: string;
    cost: number;
    isBusinessUse?: boolean;
    description?: string;
}
export interface EVRefuelingCreditInfo {
    properties: EVRefuelingProperty[];
}
export interface EVRefuelingCreditResult {
    totalCost: number;
    totalCredit: number;
    propertyResults: {
        cost: number;
        credit: number;
        isBusinessUse: boolean;
    }[];
}
export interface AlimonyInfo {
    totalPaid: number;
    recipientSSN?: string;
    recipientSSNLastFour?: string;
    divorceDate: string;
}
export interface AlimonyReceivedInfo {
    totalReceived: number;
    payerSSN?: string;
    payerSSNLastFour?: string;
    divorceDate: string;
}
export interface CasualtyLossInfo {
    id: string;
    description: string;
    femaDisasterNumber?: string;
    propertyType: 'personal' | 'business' | 'income_producing';
    costBasis: number;
    insuranceReimbursement: number;
    fairMarketValueBefore: number;
    fairMarketValueAfter: number;
}
export interface CasualtyLossResult {
    losses: {
        id: string;
        lossPerProperty: number;
    }[];
    totalPersonalLoss: number;
    agiFloorAmount: number;
    netDeductiblePersonalLoss: number;
    totalBusinessLoss: number;
    totalDeductibleLoss: number;
}
export interface InstallmentSaleInfo {
    id: string;
    description: string;
    dateOfSale: string;
    sellingPrice: number;
    mortgagesAssumedByBuyer?: number;
    costOrBasis: number;
    depreciationAllowed?: number;
    sellingExpenses?: number;
    paymentsReceivedThisYear: number;
}
export interface InstallmentSaleResult {
    contractPrice: number;
    grossProfit: number;
    grossProfitRatio: number;
    ordinaryIncomeRecapture: number;
    installmentSaleIncome: number;
    totalReportableIncome: number;
}
export interface NonbusinessBadDebt {
    id: string;
    debtorName: string;
    description: string;
    amountOwed: number;
}
export interface ExcessContributionInfo {
    iraExcessContribution?: number;
    hsaExcessContribution?: number;
    esaExcessContribution?: number;
}
export interface HSAExcessWithdrawal {
    choice: 'full' | 'partial' | 'none';
    withdrawalAmount?: number;
    earningsOnExcess?: number;
}
export interface IRAExcessWithdrawal {
    choice: 'full' | 'partial' | 'none';
    withdrawalAmount?: number;
    earningsOnExcess?: number;
}
export interface EmergencyDistributionInfo {
    totalEmergencyDistributions: number;
}
export interface Form5329Result {
    iraExciseTax: number;
    hsaExciseTax: number;
    esaExciseTax: number;
    earlyDistributionPenalty: number;
    emergencyExemption: number;
    earlyDistributionExceptionAmount: number;
    totalPenalty: number;
}
export interface Income1099Q {
    id: string;
    payerName: string;
    grossDistribution: number;
    earnings: number;
    basisReturn: number;
    qualifiedExpenses: number;
    taxFreeAssistance?: number;
    expensesClaimedForCredit?: number;
    distributionType: 'qualified' | 'non_qualified' | 'rollover';
    recipientType?: 'accountOwner' | 'beneficiary';
}
export interface QBIInfo {
    isSSTB?: boolean;
    w2WagesPaidByBusiness?: number;
    ubiaOfQualifiedProperty?: number;
    isAgriculturalCooperativePatron?: boolean;
    businesses?: QBIBusinessEntry[];
}
export interface QBIBusinessEntry {
    businessId: string;
    businessName?: string;
    qualifiedBusinessIncome: number;
    isSSTB: boolean;
    w2WagesPaid: number;
    ubiaOfQualifiedProperty: number;
}
export interface Form7206MonthlyEligibility {
    /** Per month (Jan=0..Dec=11): was taxpayer eligible for an employer-subsidized plan? */
    taxpayerEligibleForEmployerPlan: boolean[];
    /** MFJ only: per month, was spouse eligible? */
    spouseEligibleForEmployerPlan?: boolean[];
}
export interface Form7206Input {
    businessId?: string;
    medicalDentalVisionPremiums: number;
    longTermCarePremiums?: number;
    medicarePremiums?: number;
    monthlyEligibility?: Form7206MonthlyEligibility;
    taxpayerAge?: number;
    spouseAge?: number;
    taxpayerLTCPremium?: number;
    spouseLTCPremium?: number;
}
export interface Form7206Result {
    medicalDentalVisionPremiums: number;
    longTermCarePremiumsClaimed: number;
    medicarePremiums: number;
    totalPremiums: number;
    eligibleMonths: number;
    proratedPremiums: number;
    netSEProfit: number;
    deductibleHalfSETax: number;
    seRetirementContributions: number;
    adjustedNetSEProfit: number;
    netProfitLimitedAmount: number;
    ptcAdjustment: number;
    finalDeduction: number;
    taxpayerLTCLimit: number;
    spouseLTCLimit: number;
    warnings: string[];
}
export interface SelfEmploymentDeductions {
    healthInsurancePremiums: number;
    form7206?: Form7206Input;
    sepIraContributions: number;
    solo401kEmployeeDeferral?: number;
    solo401kEmployerContribution?: number;
    solo401kRothDeferral?: number;
    solo401kContributions: number;
    solo401kPlanBalance?: number;
    solo401kPlanStartBalance?: number;
    solo401kPlanDistributions?: number;
    solo401kPlanName?: string;
    solo401kPlanNumber?: string;
    solo401kPlanEIN?: string;
    simpleIraContributions?: number;
    otherRetirementContributions: number;
}
export interface Solo401kInput {
    scheduleCNetProfit: number;
    seDeductibleHalf: number;
    employeeDeferral?: number;
    rothDeferral?: number;
    employerContribution?: number;
    age?: number;
    w2SalaryDeferrals?: number;
    simpleIraDeferrals?: number;
    sepIraContributions?: number;
}
export interface Solo401kResult {
    adjustedNetSEIncome: number;
    maxEmployeeDeferral: number;
    maxEmployerContribution: number;
    maxTotalContribution: number;
    appliedEmployeeDeferral: number;
    appliedEmployerContribution: number;
    appliedRothDeferral: number;
    deductibleContribution: number;
    totalContribution: number;
    catchUpEligible: boolean;
    superCatchUpEligible: boolean;
    catchUpAmount: number;
    form5500EZRequired: boolean;
    warnings: string[];
}
export interface SEPIRAInput {
    scheduleCNetProfit: number;
    seDeductibleHalf: number;
    desiredContribution?: number;
}
export interface SEPIRAResult {
    adjustedNetSEIncome: number;
    maxContribution: number;
    appliedContribution: number;
    warnings: string[];
}
export interface HSAContributionInfo {
    coverageType: 'self_only' | 'family';
    totalContributions: number;
    employerContributions?: number;
    catchUpContributions?: number;
    hdhpCoverageMonths?: number;
    dateOfBirth?: string;
    taxYear?: number;
}
export interface Form8606Info {
    nondeductibleContributions?: number;
    priorYearBasis?: number;
    traditionalIRABalance?: number;
    rothConversionAmount?: number;
}
export interface EstimatedTaxPenaltyResult {
    requiredAnnualPayment: number;
    totalPaymentsMade: number;
    underpaymentAmount: number;
    penalty: number;
    usedAnnualizedMethod?: boolean;
    regularPenalty?: number;
    annualizedPenalty?: number;
    quarterlyDetail?: QuarterlyPenaltyDetail[];
}
export interface QuarterlyPenaltyDetail {
    requiredInstallment: number;
    paymentMade: number;
    underpayment: number;
    penalty: number;
}
export interface AnnualizedIncomeInfo {
    cumulativeIncome: [number, number, number, number];
    cumulativeWithholding?: [number, number, number, number];
}
export interface KiddieTaxInfo {
    id: string;
    dependentId?: string;
    childName?: string;
    childUnearnedIncome: number;
    childEarnedIncome?: number;
    parentMarginalRate?: number;
    childAge: number;
    isFullTimeStudent?: boolean;
}
export interface ForeignEarnedIncomeInfo {
    foreignEarnedIncome: number;
    qualifyingDays?: number;
    housingExpenses?: number;
}
export interface HouseholdEmployeeInfo {
    totalCashWages: number;
    federalTaxWithheld?: number;
    numberOfEmployees?: number;
    subjectToFUTA?: boolean;
}
export interface ScheduleHResult {
    socialSecurityTax: number;
    medicareTax: number;
    futaTax: number;
    totalTax: number;
}
export interface AdoptionCreditInfo {
    qualifiedExpenses: number;
    numberOfChildren?: number;
    isSpecialNeeds?: boolean;
}
export interface AdoptionCreditResult {
    expensesBasis: number;
    credit: number;
}
/** Individual property reported on Form 4797 */
export interface Form4797Property {
    id: string;
    description: string;
    dateAcquired: string;
    dateSold: string;
    salesPrice: number;
    costBasis: number;
    depreciationAllowed: number;
    isSection1245?: boolean;
    isSection1250?: boolean;
    straightLineDepreciation?: number;
}
/** Per-property result from Form 4797 calculation */
export interface Form4797PropertyResult {
    propertyId: string;
    description: string;
    gain: number;
    loss: number;
    adjustedBasis: number;
    section1245OrdinaryIncome: number;
    section1250OrdinaryIncome: number;
    unrecapturedSection1250Gain: number;
    section1231GainOrLoss: number;
}
/** Aggregate Form 4797 result */
export interface Form4797Result {
    totalOrdinaryIncome: number;
    netSection1231GainOrLoss: number;
    section1231IsGain: boolean;
    unrecapturedSection1250Gain: number;
    totalGain: number;
    totalLoss: number;
    propertyResults: Form4797PropertyResult[];
}
export interface Form4137Info {
    unreportedTips: number;
}
export interface Form4137Result {
    unreportedTips: number;
    socialSecurityTax: number;
    medicareTax: number;
    totalTax: number;
    tipsSubjectToSS: number;
    tipsSubjectToMedicare: number;
}
export interface ScheduleFInfo {
    salesOfLivestock?: number;
    costOfLivestock?: number;
    salesOfProducts?: number;
    cooperativeDistributions?: number;
    cooperativeDistributionsTaxable?: number;
    agriculturalProgramPayments?: number;
    cccLoans?: number;
    cropInsuranceProceeds?: number;
    customHireIncome?: number;
    otherFarmIncome?: number;
    carAndTruck?: number;
    chemicals?: number;
    conservation?: number;
    customHireExpense?: number;
    depreciation?: number;
    employeeBenefit?: number;
    feed?: number;
    fertilizers?: number;
    freight?: number;
    gasolineFuel?: number;
    insurance?: number;
    interest?: number;
    labor?: number;
    pension?: number;
    rentLease?: number;
    repairs?: number;
    seeds?: number;
    storage?: number;
    supplies?: number;
    taxes?: number;
    utilities?: number;
    veterinary?: number;
    otherExpenses?: number;
    useFarmOptionalMethod?: boolean;
}
export interface ScheduleFResult {
    grossIncome: number;
    totalExpenses: number;
    netFarmProfit: number;
    farmOptionalMethodAmount?: number;
}
export interface FarmRentalInfo {
    id: string;
    description?: string;
    rentalIncome: number;
    expenses: {
        insurance?: number;
        repairs?: number;
        taxes?: number;
        utilities?: number;
        depreciation?: number;
        other?: number;
    };
}
export interface FarmRentalResult {
    grossIncome: number;
    totalExpenses: number;
    netIncome: number;
}
export interface ScheduleRInfo {
    isAge65OrOlder: boolean;
    isSpouseAge65OrOlder?: boolean;
    isDisabled?: boolean;
    isSpouseDisabled?: boolean;
    taxableDisabilityIncome?: number;
    spouseTaxableDisabilityIncome?: number;
    nontaxableSocialSecurity?: number;
    nontaxablePensions?: number;
}
export interface ScheduleRResult {
    qualifies: boolean;
    initialAmount: number;
    nontaxableReduction: number;
    agiReduction: number;
    creditBase: number;
    creditRate: number;
    credit: number;
}
export interface HoHValidationResult {
    isValid: boolean;
    errors: string[];
    warnings: string[];
}
export interface DeceasedSpouseValidationResult {
    isValid: boolean;
    spouseDiedDuringTaxYear: boolean;
    qualifiesForMFJ: boolean;
    qualifiesForQSS: boolean;
    errors: string[];
    warnings: string[];
}
export interface QOZInvestmentInfo {
    deferredGain: number;
    investmentDate: string;
    investmentAmount: number;
}
export interface Form1095AInfo {
    id: string;
    marketplace: string;
    policyNumber?: string;
    enrollmentPremiums: number[];
    slcspPremiums: number[];
    advancePTC: number[];
    coverageMonths: boolean[];
}
export interface PremiumTaxCreditInfo {
    forms1095A: Form1095AInfo[];
    familySize: number;
    state?: 'AK' | 'HI' | string;
    isVictimOfDomesticAbuse?: boolean;
    isSpousalAbandonment?: boolean;
}
export interface PremiumTaxCreditResult {
    annualPTC: number;
    totalAPTC: number;
    netPTC: number;
    excessAPTC: number;
    repaymentCap: number;
    excessAPTCRepayment: number;
    householdIncome: number;
    fplPercentage: number;
    applicableFigure: number;
    expectedContribution: number;
    monthlyDetails: {
        month: number;
        enrollmentPremium: number;
        slcspPremium: number;
        monthlyPTC: number;
        advancePTC: number;
        hasCoverage: boolean;
    }[];
}
export interface Schedule1AInfo {
    qualifiedTips?: number;
    isTippedOccupation?: boolean;
    isSelfEmployedTipped?: boolean;
    qualifiedOvertimePay?: number;
    isFLSANonExempt?: boolean;
    carLoanInterestPaid?: number;
    vehicleVIN?: string;
    vehicleAssembledInUS?: boolean;
    isNewVehicle?: boolean;
}
export interface Schedule1AResult {
    tipsDeduction: number;
    overtimeDeduction: number;
    carLoanInterestDeduction: number;
    seniorDeduction: number;
    totalDeduction: number;
    tipsPhaseOutReduction: number;
    overtimePhaseOutReduction: number;
    carLoanPhaseOutReduction: number;
    seniorPhaseOutReduction: number;
}
export interface HomeSaleInfo {
    salePrice: number;
    costBasis: number;
    sellingExpenses?: number;
    ownedMonths: number;
    usedAsResidenceMonths: number;
    priorExclusionUsedWithin2Years?: boolean;
}
export interface HomeSaleResult {
    gainOrLoss: number;
    exclusionAmount: number;
    taxableGain: number;
    qualifiesForExclusion: boolean;
    maxExclusion: number;
}
export interface Income1099DA {
    id: string;
    brokerName: string;
    tokenName: string;
    tokenSymbol?: string;
    description?: string;
    dateAcquired?: string;
    dateSold: string;
    proceeds: number;
    costBasis: number;
    isLongTerm: boolean;
    federalTaxWithheld?: number;
    washSaleLossDisallowed?: number;
    transactionId?: string;
    isBasisReportedToIRS?: boolean;
}
export interface Income1099C {
    id: string;
    payerName: string;
    dateOfCancellation: string;
    amountCancelled: number;
    interestIncluded?: number;
    debtDescription?: string;
    identifiableEventCode?: string;
    federalTaxWithheld?: number;
}
export interface Form982Info {
    isInsolvent: boolean;
    totalLiabilitiesBefore: number;
    totalAssetsBefore: number;
    isBankruptcy?: boolean;
    isQualifiedPrincipalResidence?: boolean;
    isQualifiedFarmDebt?: boolean;
}
export interface Form982Result {
    totalCancelledDebt: number;
    insolvencyAmount: number;
    exclusionAmount: number;
    taxableAmount: number;
    nolReduction: number;
    gbcReduction: number;
    mtcReduction: number;
    capitalLossReduction: number;
    basisReduction: number;
    palReduction: number;
}
export interface InvestmentInterestInfo {
    investmentInterestPaid: number;
    priorYearDisallowed?: number;
    electToIncludeQualifiedDividends?: boolean;
    electToIncludeLTCG?: boolean;
}
export interface InvestmentInterestResult {
    totalExpense: number;
    netInvestmentIncome: number;
    deductibleAmount: number;
    carryforward: number;
}
export interface PriorYearSummary {
    source: 'nimbus-json' | '1040-pdf' | 'competitor-pdf';
    taxYear: number;
    filingStatus?: string;
    providerName?: string;
    totalIncome: number;
    agi: number;
    taxableIncome: number;
    deductionAmount: number;
    totalTax: number;
    totalCredits: number;
    totalPayments: number;
    refundAmount: number;
    amountOwed: number;
    effectiveTaxRate: number;
    totalWages?: number;
    totalInterest?: number;
    totalDividends?: number;
    scheduleCNetProfit?: number;
    capitalGainOrLoss?: number;
    seTax?: number;
    estimatedTaxPayments?: number;
    iraDistributions?: number;
    pensionsAnnuities?: number;
    socialSecurityBenefits?: number;
}
export interface TaxReturn {
    id: string;
    schemaVersion: number;
    taxYear: number;
    status: 'in_progress' | 'review' | 'completed';
    currentStep: number;
    currentStepId?: string;
    currentSection: string;
    firstName?: string;
    middleInitial?: string;
    lastName?: string;
    suffix?: string;
    ssn?: string;
    ssnLastFour?: string;
    dateOfBirth?: string;
    occupation?: string;
    isLegallyBlind?: boolean;
    canBeClaimedAsDependent?: boolean;
    isFullTimeStudent?: boolean;
    isSpouseFullTimeStudent?: boolean;
    isClaimedAsDependent?: boolean;
    providedHalfOwnSupport?: boolean;
    hasLivingParent?: boolean;
    isActiveDutyMilitary?: boolean;
    nontaxableCombatPay?: number;
    includeCombatPayForEITC?: boolean;
    movingExpenses?: number;
    presidentialCampaignFund?: boolean;
    ipPin?: string;
    addressStreet?: string;
    addressCity?: string;
    addressState?: string;
    addressZip?: string;
    filingStatus?: FilingStatus;
    livedApartFromSpouse?: boolean;
    spouseFirstName?: string;
    spouseMiddleInitial?: string;
    spouseLastName?: string;
    spouseSuffix?: string;
    spouseSsn?: string;
    spouseSsnLastFour?: string;
    spouseDateOfBirth?: string;
    spouseOccupation?: string;
    spouseIsLegallyBlind?: boolean;
    spousePresidentialCampaignFund?: boolean;
    spouseIpPin?: string;
    spouseDateOfDeath?: string;
    isDeceasedSpouseReturn?: boolean;
    dependents: Dependent[];
    w2Income: W2Income[];
    income1099NEC: Income1099NEC[];
    income1099K: Income1099K[];
    income1099INT: Income1099INT[];
    income1099OID?: Income1099OID[];
    income1099DIV: Income1099DIV[];
    income1099R: Income1099R[];
    income1099G: Income1099G[];
    income1099MISC: Income1099MISC[];
    income1099B: Income1099B[];
    incomeSSA1099?: IncomeSSA1099;
    incomeK1: IncomeK1[];
    income1099SA: Income1099SA[];
    incomeW2G: IncomeW2G[];
    income1099DA: Income1099DA[];
    income1099C: Income1099C[];
    rentalProperties: RentalProperty[];
    royaltyProperties?: RoyaltyProperty[];
    capitalLossCarryforward?: number;
    capitalLossCarryforwardST?: number;
    capitalLossCarryforwardLT?: number;
    unrecapturedSection1250Gain?: number;
    form4797Properties?: Form4797Property[];
    otherIncome: number;
    income1099Q: Income1099Q[];
    business?: BusinessInfo;
    businesses: BusinessInfo[];
    expenses: ExpenseEntry[];
    homeOffice?: HomeOfficeInfo;
    vehicle?: VehicleInfo;
    depreciationAssets?: DepreciationAsset[];
    selfEmploymentDeductions?: SelfEmploymentDeductions;
    costOfGoodsSold?: CostOfGoodsSold;
    returnsAndAllowances?: number;
    deductionMethod: 'standard' | 'itemized';
    itemizedDeductions?: ItemizedDeductions;
    alimony?: AlimonyInfo;
    alimonyReceived?: AlimonyReceivedInfo;
    excessContributions?: ExcessContributionInfo;
    emergencyDistributions?: EmergencyDistributionInfo;
    amtData?: {
        /** Line 2i: ISO exercise spread (FMV - exercise price at exercise) */
        isoExerciseSpread?: number;
        /** Line 2g: Tax-exempt interest from private activity bonds */
        privateActivityBondInterest?: number;
        /** Line 2b: Tax refund adjustment (state refund add-back for AMT) */
        taxRefundAdjustment?: number;
        /** Line 2c: Investment interest expense difference (AMT vs regular) */
        investmentInterestAdjustment?: number;
        /** Line 2d: Depletion difference */
        depletion?: number;
        /** Line 2f: Alternative tax net operating loss deduction (ATNOLD) */
        atnold?: number;
        /** Line 2h: Qualified small business stock exclusion (Section 1202) */
        qsbsExclusion?: number;
        /** Line 2k: Disposition of property difference (AMT vs regular basis) */
        dispositionOfProperty?: number;
        /** Line 2l: Post-1986 depreciation (ADS vs MACRS difference) */
        depreciationAdjustment?: number;
        /** Line 2m: Passive activity loss difference */
        passiveActivityLoss?: number;
        /** Line 2n: Loss limitation difference */
        lossLimitations?: number;
        /** Line 2o: Circulation costs */
        circulationCosts?: number;
        /** Line 2p: Long-term contracts difference */
        longTermContracts?: number;
        /** Line 2q: Mining costs */
        miningCosts?: number;
        /** Line 2r: Research and experimental costs */
        researchCosts?: number;
        /** Line 2t: Intangible drilling costs */
        intangibleDrillingCosts?: number;
        /** Line 3: Other adjustments (catch-all) */
        otherAMTAdjustments?: number;
        /** AMT foreign tax credit (user-entered) */
        amtForeignTaxCredit?: number;
    };
    form8582Data?: {
        /** Aggregate prior-year unallowed losses from all passive activities (Form 8582, prior year Line 16) */
        priorYearUnallowedLoss?: number;
        /** Real estate professional election — IRC §469(c)(7): bypasses PAL for material participation */
        realEstateProfessional?: boolean;
    };
    gamblingLosses?: number;
    nonbusinessBadDebts?: NonbusinessBadDebt[];
    farmRentals?: FarmRentalInfo[];
    casualtyLosses?: CasualtyLossInfo[];
    installmentSales?: InstallmentSaleInfo[];
    childTaxCredit?: ChildTaxCreditInfo;
    educationCredits: EducationCreditInfo[];
    dependentCare?: DependentCareInfo;
    saversCredit?: SaversCreditInfo;
    cleanEnergy?: CleanEnergyInfo;
    evCredit?: EVCreditInfo;
    energyEfficiency?: EnergyEfficiencyInfo;
    evRefuelingCredit?: EVRefuelingCreditInfo;
    scholarshipCredit?: ScholarshipCreditInfo;
    qbiInfo?: QBIInfo;
    adoptionCredit?: AdoptionCreditInfo;
    form8801?: Form8801Info;
    form8606?: Form8606Info;
    kiddieTaxEntries?: KiddieTaxInfo[];
    /** @deprecated Use kiddieTaxEntries[] instead. Kept for backward compatibility with saved data. */
    kiddieTax?: Omit<KiddieTaxInfo, 'id'>;
    foreignEarnedIncome?: ForeignEarnedIncomeInfo;
    householdEmployees?: HouseholdEmployeeInfo;
    qozInvestment?: QOZInvestmentInfo;
    schedule1A?: Schedule1AInfo;
    form982?: Form982Info;
    foreignTaxCreditCategories?: ForeignTaxCreditCategory[];
    investmentInterest?: InvestmentInterestInfo;
    homeSale?: HomeSaleInfo;
    premiumTaxCredit?: PremiumTaxCreditInfo;
    form4137?: Form4137Info;
    scheduleF?: ScheduleFInfo;
    scheduleR?: ScheduleRInfo;
    paidOverHalfHouseholdCost?: boolean;
    extensionFiled?: boolean;
    hsaDeduction?: number;
    hsaContribution?: HSAContributionInfo;
    archerMSA?: ArcherMSAInfo;
    hsaExcessWithdrawal?: HSAExcessWithdrawal;
    iraExcessWithdrawal?: IRAExcessWithdrawal;
    studentLoanInterest?: number;
    iraContribution?: number;
    coveredByEmployerPlan?: boolean;
    spouseCoveredByEmployerPlan?: boolean;
    educatorExpenses?: number;
    estimatedPaymentsMade?: number;
    estimatedQuarterlyPayments?: [number, number, number, number];
    priorYearTax?: number;
    annualizedIncome?: AnnualizedIncomeInfo;
    nolCarryforward?: number;
    priorYearSummary?: PriorYearSummary;
    deductionFinder?: {
        dismissedInsightIds: string[];
        addressedInsightIds: string[];
    };
    directDeposit?: DirectDeposit;
    refundAppliedToNextYear?: number;
    digitalAssetActivity?: boolean;
    scheduleBPartIII?: {
        hasForeignAccounts?: boolean;
        requireFBAR?: boolean;
        foreignAccountCountries?: string;
        hasForeignTrust?: boolean;
    };
    stateReturns?: StateReturnConfig[];
    incomeDiscovery: Record<string, 'yes' | 'no' | 'later'>;
    dismissedNudges?: string[];
    expenseScanner?: {
        /** Categories the user opted in for AI scanning. */
        enabledCategories: string[];
        /** Quick-select context hints for sparse-return users. */
        contextHints?: {
            isSelfEmployed?: boolean;
            isHomeowner?: boolean;
            hasKids?: boolean;
            isStudent?: boolean;
            hasRentalProperty?: boolean;
        };
        /** Dismissed insight IDs (carried from deductionFinder). */
        dismissedInsightIds?: string[];
        /** Addressed insight IDs. */
        addressedInsightIds?: string[];
    };
    createdAt: string;
    updatedAt: string;
}
export type StateResidencyType = 'resident' | 'part_year' | 'nonresident';
export interface StateReturnConfig {
    stateCode: string;
    residencyType: StateResidencyType;
    daysLivedInState?: number;
    stateSpecificData?: Record<string, unknown>;
}
export interface StateCalculationResult {
    stateCode: string;
    stateName: string;
    residencyType: StateResidencyType;
    federalAGI: number;
    stateAdditions: number;
    stateSubtractions: number;
    stateAGI: number;
    stateDeduction: number;
    stateTaxableIncome: number;
    stateExemptions: number;
    stateIncomeTax: number;
    stateCredits: number;
    stateTaxAfterCredits: number;
    localTax: number;
    totalStateTax: number;
    stateWithholding: number;
    stateEstimatedPayments: number;
    stateRefundOrOwed: number;
    allocationRatio?: number;
    allocatedAGI?: number;
    effectiveStateRate: number;
    bracketDetails?: StateBracketDetail[];
    additionalLines?: Record<string, number>;
    /** Calculation traces explaining how each state tax value was computed. */
    traces?: CalculationTrace[];
}
export interface StateBracketDetail {
    rate: number;
    taxableAtRate: number;
    taxAtRate: number;
}
export interface StateConstants {
    stateCode: string;
    stateName: string;
    hasIncomeTax: boolean;
    brackets: Record<string, StateTaxBracket[]>;
    standardDeduction: Record<string, number>;
    personalExemption: number;
    dependentExemption: number;
}
export interface StateTaxBracket {
    min: number;
    max: number;
    rate: number;
}
export interface ScheduleCResult {
    grossReceipts: number;
    returnsAndAllowances: number;
    netReceipts: number;
    costOfGoodsSold: number;
    grossProfit: number;
    otherBusinessIncome: number;
    grossIncome: number;
    totalExpenses: number;
    tentativeProfit: number;
    homeOfficeDeduction: number;
    vehicleDeduction: number;
    depreciationDeduction?: number;
    netProfit: number;
    lineItems: Record<string, number>;
    businessResults?: ScheduleCBusinessResult[];
    homeOfficeResult?: HomeOfficeResult;
    vehicleResult?: VehicleResult;
    form4562Result?: Form4562Result;
    line9Suppressed?: boolean;
    suppressedLine9Amount?: number;
    line13Suppressed?: boolean;
    suppressedLine13Amount?: number;
    line19Suppressed?: boolean;
    suppressedLine19Amount?: number;
}
export interface ScheduleCBusinessResult {
    businessId: string;
    businessName?: string;
    grossIncome: number;
    totalExpenses: number;
    netProfit: number;
}
export interface ScheduleSEResult {
    netEarnings: number;
    socialSecurityTax: number;
    medicareTax: number;
    additionalMedicareTax: number;
    totalSETax: number;
    deductibleHalf: number;
}
export interface ScheduleAResult {
    medicalDeduction: number;
    saltDeduction: number;
    interestDeduction: number;
    charitableDeduction: number;
    otherDeduction: number;
    totalItemized: number;
    form8283?: Form8283Result;
}
export interface ScheduleDResult {
    shortTermGain: number;
    shortTermLoss: number;
    netShortTerm: number;
    longTermGain: number;
    longTermLoss: number;
    netLongTerm: number;
    netGainOrLoss: number;
    capitalLossDeduction: number;
    capitalLossCarryforward: number;
    capitalLossCarryforwardST: number;
    capitalLossCarryforwardLT: number;
}
export interface SocialSecurityResult {
    totalBenefits: number;
    taxableBenefits: number;
    taxablePercentage: number;
    provisionalIncome: number;
}
export interface PropertyResult {
    id: string;
    address: string;
    rentalIncome: number;
    totalExpenses: number;
    netIncome: number;
    isPersonalUse: boolean;
    isExcluded: boolean;
}
export interface RoyaltyPropertyResult {
    id: string;
    description: string;
    royaltyIncome: number;
    totalExpenses: number;
    netIncome: number;
}
export interface ScheduleEResult {
    totalRentalIncome: number;
    totalRentalExpenses: number;
    netRentalIncome: number;
    allowableLoss: number;
    suspendedLoss: number;
    royaltyIncome: number;
    totalRoyaltyExpenses: number;
    scheduleEIncome: number;
    propertyResults?: PropertyResult[];
    royaltyPropertyResults?: RoyaltyPropertyResult[];
}
export interface PassiveActivityDetail {
    id: string;
    name: string;
    type: 'rental' | 'k1_passive';
    currentYearNetIncome: number;
    priorYearUnallowed: number;
    overallGainOrLoss: number;
    allowedLoss: number;
    suspendedLoss: number;
    disposedDuringYear: boolean;
    activeParticipation: boolean;
}
export interface Form8582Result {
    netRentalActiveIncome: number;
    netOtherPassiveIncome: number;
    totalPassiveIncome: number;
    totalPassiveLoss: number;
    combinedNetIncome: number;
    specialAllowance: number;
    allowedPassiveLoss: number;
    dispositionReleasedLosses: number;
    activities: PassiveActivityDetail[];
    totalSuspendedLoss: number;
    totalAllowedLoss: number;
    warnings: string[];
}
export interface DependentCareResult {
    qualifyingExpenses: number;
    creditRate: number;
    credit: number;
    employerBenefitsExclusion?: number;
    employerBenefitsTaxable?: number;
    deemedEarnedIncome?: number;
}
export interface SaversCreditResult {
    eligibleContributions: number;
    creditRate: number;
    credit: number;
}
export interface ScholarshipCreditInfo {
    contributionAmount: number;
    stateTaxCreditReceived?: number;
}
export interface ScholarshipCreditResult {
    eligibleContribution: number;
    credit: number;
}
export interface CleanEnergyResult {
    totalExpenditures: number;
    currentYearCredit: number;
    priorYearCarryforward: number;
    totalAvailableCredit: number;
    credit: number;
    carryforwardToNextYear: number;
}
export interface EVCreditResult {
    baseCredit: number;
    credit: number;
}
export interface EnergyEfficiencyResult {
    totalExpenditures: number;
    credit: number;
}
export interface ForeignTaxCreditResult {
    foreignTaxPaid: number;
    creditAllowed: number;
    categoryResults?: ForeignTaxCreditCategoryResult[];
}
export interface ForeignTaxCreditCategory {
    category: 'general' | 'passive';
    foreignTaxPaid: number;
    foreignSourceIncome: number;
}
export interface ForeignTaxCreditCategoryResult {
    category: 'general' | 'passive';
    foreignTaxPaid: number;
    foreignSourceIncome: number;
    limitation: number;
    creditAllowed: number;
}
export interface Form8801Info {
    /** Net minimum tax from prior year attributable to deferral items (Form 8801 Line 18 equivalent) */
    netPriorYearMinimumTax: number;
    /** Credit carryforward from prior year Form 8801 (Line 19) */
    priorYearCreditCarryforward: number;
}
export interface Form8801Result {
    /** Total credit available before limitation */
    totalCreditAvailable: number;
    /** Credit limitation: max(0, regularTax - currentYearAMT) */
    creditLimitation: number;
    /** Credit claimed this year (to Schedule 3 Line 6b) */
    credit: number;
    /** Remaining credit to carry forward to next year */
    carryforwardToNextYear: number;
}
export interface ArcherMSAInfo {
    /** Self-only or family HDHP coverage */
    coverageType: 'self_only' | 'family';
    /** HDHP annual deductible amount */
    hdhpDeductible: number;
    /** Personal contributions made during the year */
    personalContributions: number;
    /** Number of months covered by HDHP (1-12, for proration) */
    coverageMonths: number;
    /** Whether enrolled in Medicare (blocks all contributions) */
    isEnrolledInMedicare?: boolean;
}
export interface ArcherMSAResult {
    /** Contribution limit based on HDHP deductible */
    contributionLimit: number;
    /** Prorated limit for partial-year coverage */
    proratedLimit: number;
    /** Employer contributions from W-2 Box 12 Code R */
    employerContributions: number;
    /** Allowable deduction (personal contributions up to limit minus employer contributions) */
    deduction: number;
    /** Excess contributions subject to 6% excise tax */
    excessContributions: number;
}
export interface CreditsResult {
    childTaxCredit: number;
    otherDependentCredit: number;
    actcCredit: number;
    educationCredit: number;
    aotcRefundableCredit: number;
    dependentCareCredit: number;
    saversCredit: number;
    cleanEnergyCredit: number;
    evCredit: number;
    energyEfficiencyCredit: number;
    foreignTaxCredit: number;
    adoptionCredit: number;
    evRefuelingCredit: number;
    elderlyDisabledCredit: number;
    scholarshipCredit: number;
    priorYearMinTaxCredit: number;
    k1OtherCredits: number;
    premiumTaxCredit: number;
    excessSSTaxCredit: number;
    eitcCredit: number;
    educationCreditDetails?: EducationCreditStudentDetail[];
    totalNonRefundable: number;
    totalRefundable: number;
    totalCredits: number;
}
export interface Form1040Result {
    totalWages: number;
    totalInterest: number;
    taxExemptInterest: number;
    totalDividends: number;
    qualifiedDividends: number;
    totalCapitalGainDistributions: number;
    scheduleDNetGain: number;
    capitalLossDeduction: number;
    capitalGainOrLoss: number;
    taxableSocialSecurity: number;
    socialSecurityBenefits: number;
    scheduleEIncome: number;
    royaltyIncome: number;
    totalRetirementIncome: number;
    iraDistributionsGross: number;
    iraDistributionsTaxable: number;
    totalQCD: number;
    pensionDistributionsGross: number;
    pensionDistributionsTaxable: number;
    totalUnemployment: number;
    total1099MISCIncome: number;
    scheduleCNetProfit: number;
    rothConversionTaxable: number;
    additionalIncome: number;
    totalIncome: number;
    seDeduction: number;
    selfEmployedHealthInsurance: number;
    retirementContributions: number;
    hsaDeduction: number;
    hsaDeductionComputed: number;
    archerMSADeduction: number;
    studentLoanInterest: number;
    iraDeduction: number;
    educatorExpenses: number;
    earlyWithdrawalPenalty: number;
    movingExpenses: number;
    feieExclusion: number;
    nolDeduction: number;
    totalAdjustments: number;
    agi: number;
    standardDeduction: number;
    itemizedDeduction: number;
    deductionUsed: 'standard' | 'itemized';
    deductionAmount: number;
    qbiDeduction: number;
    schedule1ADeduction: number;
    homeSaleExclusion: number;
    taxableIncome: number;
    k1OrdinaryIncome: number;
    k1SEIncome: number;
    hsaDistributionTaxable: number;
    hsaDistributionPenalty: number;
    incomeTax: number;
    preferentialTax: number;
    section1250Tax: number;
    amtAmount: number;
    seTax: number;
    niitTax: number;
    additionalMedicareTaxW2: number;
    earlyDistributionPenalty: number;
    kiddieTaxAmount: number;
    householdEmploymentTax: number;
    estimatedTaxPenalty: number;
    totalTax: number;
    totalCredits: number;
    taxAfterCredits: number;
    w2Withholding: number;
    form1099Withholding: number;
    form8959WithholdingCredit: number;
    totalWithholding: number;
    estimatedPayments: number;
    totalPayments: number;
    amountOwed: number;
    refundAmount: number;
    refundAppliedToNextYear: number;
    netRefund: number;
    totalGamblingIncome: number;
    cancellationOfDebtIncome: number;
    investmentInterestDeduction: number;
    alimonyDeduction: number;
    alimonyReceivedIncome: number;
    excessContributionPenalty: number;
    taxable529Income: number;
    penalty529: number;
    k1Section179Deduction: number;
    premiumTaxCreditNet: number;
    excessAPTCRepayment: number;
    form4797OrdinaryIncome: number;
    form4797Section1231GainOrLoss: number;
    form4137Tax: number;
    scheduleFNetProfit: number;
    foreignTaxPaid: number;
    extensionFiled: boolean;
    solo401kCalculation?: Solo401kResult;
    sepIRACalculation?: SEPIRAResult;
    effectiveTaxRate: number;
    marginalTaxRate: number;
    estimatedQuarterlyPayment: number;
}
export interface CalculationResult {
    scheduleC?: ScheduleCResult;
    scheduleSE?: ScheduleSEResult;
    scheduleA?: ScheduleAResult;
    scheduleD?: ScheduleDResult;
    socialSecurity?: SocialSecurityResult;
    scheduleE?: ScheduleEResult;
    dependentCare?: DependentCareResult;
    saversCreditResult?: SaversCreditResult;
    cleanEnergy?: CleanEnergyResult;
    evCredit?: EVCreditResult;
    energyEfficiency?: EnergyEfficiencyResult;
    foreignTaxCredit?: ForeignTaxCreditResult;
    k1Routing?: import('../engine/k1.js').K1RoutingResult;
    hsaDistributions?: {
        totalTaxable: number;
        totalPenalty: number;
    };
    form8606?: {
        taxableConversion: number;
        nonTaxableDistributions: number;
        taxableDistributions: number;
        regularDistributions: number;
        remainingBasis: number;
    };
    estimatedTaxPenalty?: EstimatedTaxPenaltyResult;
    kiddieTax?: {
        additionalTax: number;
        childTaxableUnearned: number;
    };
    kiddieTaxEntries?: {
        childName?: string;
        additionalTax: number;
        childTaxableUnearned: number;
    }[];
    feie?: {
        incomeExclusion: number;
        housingExclusion: number;
    };
    scheduleH?: ScheduleHResult;
    adoptionCredit?: AdoptionCreditResult;
    evRefuelingCredit?: EVRefuelingCreditResult;
    scholarshipCredit?: ScholarshipCreditResult;
    form4562?: Form4562Result;
    form4797?: Form4797Result;
    form4137?: Form4137Result;
    scheduleF?: ScheduleFResult;
    scheduleR?: ScheduleRResult;
    form8801?: Form8801Result;
    archerMSA?: ArcherMSAResult;
    hohValidation?: HoHValidationResult;
    deceasedSpouseValidation?: DeceasedSpouseValidationResult;
    premiumTaxCredit?: PremiumTaxCreditResult;
    schedule1A?: Schedule1AResult;
    homeSale?: HomeSaleResult;
    form982?: Form982Result;
    investmentInterest?: InvestmentInterestResult;
    form8283?: Form8283Result;
    form5329?: Form5329Result;
    solo401k?: Solo401kResult;
    sepIRA?: SEPIRAResult;
    form7206?: Form7206Result;
    amt?: import('../engine/amt.js').AMTResult;
    form8582?: Form8582Result;
    stateResults?: StateCalculationResult[];
    credits: CreditsResult;
    form1040: Form1040Result;
    /** Optional calculation trace tree — only present when tracing is enabled. */
    traces?: CalculationTrace[];
}
export interface TraceInput {
    /** Path identifying the input (e.g., "form1040.line1a" or "w2[0].wages"). */
    lineId: string;
    /** Human-readable label (e.g., "W-2 from Acme Corp"). */
    label: string;
    /** The numeric value of this input. */
    value: number;
}
export interface CalculationTrace {
    /** Form line identifier (e.g., "form1040.line16"). */
    lineId: string;
    /** Human-readable label (e.g., "Income Tax"). */
    label: string;
    /** The computed value. */
    value: number;
    /** The formula or method used (e.g., "progressiveTax(taxableIncome, brackets)"). */
    formula?: string;
    /** Legal authority (e.g., "IRC §1" or "Form 1040, Line 16"). */
    authority?: string;
    /** Direct inputs to this computation. */
    inputs: TraceInput[];
    /** Nested sub-calculations (e.g., per-bracket breakdowns). */
    children?: CalculationTrace[];
    /** Optional human-readable note or explanation. */
    note?: string;
}
export interface TraceOptions {
    /** When false, trace generation is skipped for performance. */
    enabled: boolean;
}
export interface TaxBracket {
    min: number;
    max: number;
    rate: number;
}
export interface BracketDetail {
    rate: number;
    taxableAtRate: number;
    taxAtRate: number;
}
