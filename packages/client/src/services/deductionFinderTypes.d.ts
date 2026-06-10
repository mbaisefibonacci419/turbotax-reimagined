/**
 * Deduction Finder — Type Definitions
 *
 * All types for the bank/credit card statement scanning feature.
 * Zero external dependencies.
 */
export interface NormalizedTransaction {
    date: string;
    description: string;
    amount: number;
    originalRow: number;
    mccCode?: string;
    sourceFile?: string;
}
export interface ReturnContext {
    filingStatus: number | null;
    dependentCount: number;
    minorDependentCount: number;
    childUnder17Count: number;
    deductionMethod: 'standard' | 'itemized';
    hasScheduleC: boolean;
    hasHomeOffice: boolean;
    hasHSA: boolean;
    hasStudentLoanInterest: boolean;
    hasMortgageInterest: boolean;
    hasCharitableDeductions: boolean;
    hasMedicalExpenses: boolean;
    hasSEHealthInsurance: boolean;
    hasGamblingWinnings: boolean;
    hasSALT: boolean;
    itemizingDelta: number;
    agi: number;
    marginalRate: number;
}
export interface MatchReason {
    kind: 'merchant_token' | 'evidence_token' | 'mcc_match' | 'mcc_boost' | 'fuzzy_match' | 'ai_classification';
    value: string;
    label?: string;
}
export interface RecurrencePattern {
    monthsActive: number;
    averageIntervalDays: number;
    score: number;
}
export type InsightCategory = 'student_loan' | 'childcare' | 'charitable' | 'mortgage' | 'hsa' | 'medical' | 'home_office_supplies' | 'se_health_insurance' | 'educator_expenses' | 'retirement_contributions' | 'tax_prep' | 'business_software' | 'business_travel' | 'business_telecom' | 'energy_efficiency' | 'therapy_mental_health' | 'advertising_marketing' | 'payment_processing_fees' | 'contract_labor' | 'vehicle_business' | 'professional_development' | 'coworking_office_rent' | 'business_insurance' | 'gambling_losses' | 'education_credits' | 'salt_property_tax' | 'business_meals' | 'military_moving' | 'professional_dues' | 'continuing_education';
export type ConfidenceTier = 'high' | 'medium' | 'low';
export interface DeductionInsight {
    id: string;
    category: InsightCategory;
    confidence: ConfidenceTier;
    title: string;
    description: string;
    statutoryMax: string;
    actionStepId: string;
    signalCount: number;
    sampleDescriptions: string[];
    compositeScore: number;
    totalAmount: number;
    averageAmount: number;
    recurrenceScore: number;
    matchReasons: MatchReason[];
    existingDataNote?: string;
    source?: 'rule' | 'ai';
}
/** Extract boolean-valued keys from a type. */
type BooleanKeysOf<T> = {
    [K in keyof T]: T[K] extends boolean ? K : never;
}[keyof T];
/** Extract number-valued keys from a type. */
type NumericKeysOf<T> = {
    [K in keyof T]: T[K] extends number ? K : never;
}[keyof T];
/** Flat requirements object for pattern gating. All conditions are AND-ed.
 *  JSON-serializable for community pattern packs. */
export interface PatternRequirements {
    /** Boolean context fields that must be true */
    requireTrue?: BooleanKeysOf<ReturnContext>[];
    /** Boolean context fields that must be false (suppress if already claimed) */
    requireFalse?: BooleanKeysOf<ReturnContext>[];
    /** Numeric context fields that must be > 0 */
    requirePositive?: NumericKeysOf<ReturnContext>[];
    /** Require itemizing deductions (ctx.deductionMethod === 'itemized') */
    requireItemizing?: boolean;
    /** Minimum AGI threshold */
    minAGI?: number;
    /** Maximum AGI threshold */
    maxAGI?: number;
    /** Context fields indicating existing data for additive categories.
     *  Used for informational annotation — NOT for suppression.
     *  When any of these are true, the insight fires with an existingDataNote. */
    existingDataKeys?: BooleanKeysOf<ReturnContext>[];
}
export interface MerchantPattern {
    id: string;
    category: InsightCategory;
    merchants: string[];
    confidence: ConfidenceTier;
    evidenceTokens?: string[];
    negativeTokens?: string[];
    /** Per-pattern matching mode for merchant tokens:
     *  'substring' (default) — uses .includes(), works for long unambiguous strings.
     *  'word_boundary' — uses regex word boundaries, for short/collision-prone tokens. */
    matchMode?: 'substring' | 'word_boundary';
    /** Whether recurrence detection is relevant for this pattern.
     *  true = subscriptions, memberships, recurring services (recurrence boosts score).
     *  false/omit = one-off deductions like solar installs, hospital visits. */
    recurrenceRelevant?: boolean;
    /** MCC codes that confirm this pattern (e.g. ['5912'] for pharmacies → medical).
     *  When a transaction's MCC matches, it boosts confidence scoring. */
    mccCodes?: string[];
    /** Declarative requirements object or function escape hatch for custom logic. */
    gate: PatternRequirements | ((ctx: ReturnContext) => boolean);
    title: string;
    description: string;
    statutoryMax: string;
    actionStepId: string;
    impactScore: number;
    easeScore: number;
}
export interface UploadedFileInfo {
    name: string;
    format: string;
    transactionCount: number;
    addedAt: string;
}
export interface DeductionFinderState {
    insights: DeductionInsight[];
    fileName: string;
    uploadedFiles: UploadedFileInfo[];
    detectedFormat: string;
    warnings: string[];
    scannedAt: string;
    totalTransactionCount: number;
    crossFileDuplicateCount: number;
}
export interface ParseResult {
    transactions: NormalizedTransaction[];
    warnings: string[];
    detectedFormat: string;
}
export {};
