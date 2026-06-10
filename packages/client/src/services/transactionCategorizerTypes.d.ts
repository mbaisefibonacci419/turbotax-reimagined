/**
 * Transaction Categorizer — Type Definitions
 *
 * Types for the AI-powered transaction categorization system.
 * The categorizer uses a hybrid approach:
 *   1. AI categorizes all transactions (primary classifier)
 *   2. Pattern engine validates and gates (cross-validation)
 *   3. Disagreements flagged for user review
 */
import type { NormalizedTransaction } from './deductionFinderTypes';
/** Top-level tax-relevant categories. */
export type TransactionCategory = 'business_expense' | 'home_office' | 'medical' | 'charitable' | 'education' | 'childcare' | 'vehicle' | 'retirement' | 'tax_payment' | 'salt' | 'investment' | 'rental_property' | 'health_insurance_se' | 'student_loan' | 'hsa' | 'mortgage' | 'personal' | 'unclear';
/** Sub-categories for detailed classification. */
export type TransactionSubCategory = 'advertising' | 'car_and_truck' | 'commissions' | 'contract_labor' | 'depreciation' | 'insurance_business' | 'interest_business' | 'legal_professional' | 'office_expense' | 'rent_lease' | 'repairs_maintenance' | 'supplies' | 'taxes_licenses' | 'travel' | 'meals' | 'utilities_business' | 'wages' | 'other_expense' | 'software_subscriptions' | 'equipment' | 'internet' | 'electric' | 'gas_heating' | 'water' | 'rent_mortgage_pct' | 'insurance_home' | 'repairs_home' | 'office_supplies' | 'office_furniture' | 'prescriptions' | 'doctor_visits' | 'dental' | 'vision' | 'insurance_premiums' | 'mental_health' | 'medical_devices' | 'hospital' | 'lab_tests' | 'cash_donation' | 'noncash_donation' | 'volunteer_mileage' | 'tuition' | 'books_supplies' | 'student_loan_payment' | 'daycare' | 'after_school' | 'summer_camp' | 'nanny' | 'fuel' | 'maintenance_vehicle' | 'parking' | 'tolls' | 'insurance_vehicle' | 'ira_contribution' | 'sep_ira' | 'solo_401k' | 'estimated_federal' | 'estimated_state' | 'property_tax' | 'state_income_tax' | 'general';
export type ConfidenceLevel = 'high' | 'medium' | 'low';
/** Source of the categorization. */
export type CategorizationSource = 'ai' | 'pattern' | 'both' | 'user';
/** A single transaction with its AI + pattern categorization. */
export interface CategorizedTransaction {
    /** Index into the original NormalizedTransaction array. */
    transactionIndex: number;
    /** Original transaction data. */
    transaction: NormalizedTransaction;
    /** Primary category assignment. */
    category: TransactionCategory;
    /** Detailed sub-category. */
    subCategory: TransactionSubCategory;
    /** Confidence in the categorization. */
    confidence: ConfidenceLevel;
    /** Who assigned this category. */
    source: CategorizationSource;
    /** Which tax form/line this maps to (e.g., "Schedule C, Line 27a"). */
    formLine?: string;
    /** One-sentence explanation of why this category was chosen. */
    reasoning?: string;
    /** Whether the user has approved this categorization. */
    approved: boolean;
    /** User override — if the user reclassified, store the original AI category. */
    originalCategory?: TransactionCategory;
    /** For split transactions: what % is tax-relevant (0-100). Default 100. */
    businessUsePercent: number;
}
/** Aggregated merchant data sent to the AI (not individual transactions). */
export interface MerchantAggregate {
    /** Cleaned merchant name. */
    merchant: string;
    /** Total amount across all transactions. */
    totalAmount: number;
    /** Number of transactions. */
    transactionCount: number;
    /** Months with transactions (e.g., "Jan-Dec" or "Mar, Jun, Sep"). */
    monthRange: string;
    /** Average transaction amount. */
    averageAmount: number;
    /** Indices into the original transaction array. */
    transactionIndices: number[];
}
/** Aggregated summary for a single category. */
export interface CategorySummary {
    category: TransactionCategory;
    /** Human-readable label (e.g., "Business Expenses"). */
    label: string;
    /** Total dollar amount across all transactions in this category. */
    totalAmount: number;
    /** Number of transactions. */
    transactionCount: number;
    /** Number of high/medium/low confidence transactions. */
    confidenceCounts: {
        high: number;
        medium: number;
        low: number;
    };
    /** Target form/schedule (e.g., "Schedule C"). */
    targetForm: string;
    /** Whether the user has approved this category for import. */
    approved: boolean;
}
/** Full result of the categorization pipeline. */
export interface CategorizationResult {
    /** All categorized transactions. */
    transactions: CategorizedTransaction[];
    /** Summary per category (sorted by totalAmount descending). */
    summaries: CategorySummary[];
    /** Total transactions processed. */
    totalProcessed: number;
    /** How many were categorized as personal (not tax-relevant). */
    personalCount: number;
    /** How many need user review (unclear or low confidence). */
    reviewNeededCount: number;
    /** Estimated total deductible amount (across all non-personal categories). */
    estimatedDeductibleTotal: number;
}
export interface CategoryMeta {
    label: string;
    targetForm: string;
    icon: string;
    color: string;
    description: string;
}
/** Human-readable metadata for each category. */
export declare const CATEGORY_META: Record<TransactionCategory, CategoryMeta>;
export interface SubCategoryMeta {
    label: string;
    /** Schedule C line or form reference. */
    formLine: string;
    /** Deductibility rate (0-1). Most are 1.0; meals are 0.5. */
    deductibilityRate: number;
}
/** Human-readable metadata + Schedule C line mapping for business sub-categories. */
export declare const BUSINESS_SUB_CATEGORY_META: Partial<Record<TransactionSubCategory, SubCategoryMeta>>;
/** Sub-categories valid for business_expense category (for dropdown selection). */
export declare const BUSINESS_SUB_CATEGORIES: TransactionSubCategory[];
export declare const HOME_OFFICE_SUB_CATEGORY_META: Partial<Record<TransactionSubCategory, SubCategoryMeta>>;
export declare const HOME_OFFICE_SUB_CATEGORIES: TransactionSubCategory[];
export declare const VEHICLE_SUB_CATEGORY_META: Partial<Record<TransactionSubCategory, SubCategoryMeta>>;
export declare const VEHICLE_SUB_CATEGORIES: TransactionSubCategory[];
export declare const CHARITABLE_SUB_CATEGORY_META: Partial<Record<TransactionSubCategory, SubCategoryMeta>>;
export declare const CHARITABLE_SUB_CATEGORIES: TransactionSubCategory[];
export declare const SALT_SUB_CATEGORY_META: Partial<Record<TransactionSubCategory, SubCategoryMeta>>;
export declare const SALT_SUB_CATEGORIES: TransactionSubCategory[];
export declare const TAX_PAYMENT_SUB_CATEGORY_META: Partial<Record<TransactionSubCategory, SubCategoryMeta>>;
export declare const TAX_PAYMENT_SUB_CATEGORIES: TransactionSubCategory[];
/** Per-category sub-category metadata and dropdown options. */
export declare const SUB_CATEGORY_CONFIG: Partial<Record<TransactionCategory, {
    meta: Partial<Record<TransactionSubCategory, SubCategoryMeta>>;
    subCategories: TransactionSubCategory[];
}>>;
