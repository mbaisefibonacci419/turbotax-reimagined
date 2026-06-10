/**
 * Transaction Categorizer — AI-powered transaction classification
 *
 * Hybrid pipeline:
 *   1. Deduplicate transactions by merchant name (aggregate totals)
 *   2. Send deduplicated merchants + user tax context to LLM
 *   3. Fan out merchant-level categories to individual transactions
 *   4. Cross-validate against pattern engine (Task 12)
 *
 * Privacy: exact dates stripped (month/year only), small amounts rounded,
 * PII-scanned via checkForPII before sending.
 */
import type { NormalizedTransaction, ReturnContext } from './deductionFinderTypes';
import type { MerchantAggregate, CategorizedTransaction, CategorySummary, CategorizationResult, TransactionCategory, TransactionSubCategory, ConfidenceLevel } from './transactionCategorizerTypes';
/**
 * Aggregate transactions by cleaned merchant name.
 * This is the key optimization — 4,000 transactions may have only 300-500 unique merchants.
 */
export declare function deduplicateByMerchant(transactions: NormalizedTransaction[]): MerchantAggregate[];
interface CategorizeOptions {
    provider: string;
    apiKey?: string;
    model: string;
}
interface AIMerchantCategory {
    merchant: string;
    category: TransactionCategory;
    subCategory: TransactionSubCategory;
    confidence: ConfidenceLevel;
    formLine: string;
    reasoning: string;
}
/**
 * Send deduplicated merchants to the LLM for categorization.
 * Returns a map of merchant name → category assignment.
 *
 * @param enabledCategories - Only classify into these categories (from setup screen)
 * @param contextHints - User-provided context hints (from quick-select bundles)
 */
export declare function categorizeWithAI(merchants: MerchantAggregate[], context: ReturnContext, options: CategorizeOptions, onProgress?: (completed: number, total: number) => void, enabledCategories?: TransactionCategory[], contextHints?: Record<string, boolean>): Promise<Map<string, AIMerchantCategory>>;
/**
 * Fan out merchant-level AI categories to individual transactions.
 * Returns CategorizedTransaction[] with AI assignments (before cross-validation).
 */
export declare function fanOutCategories(transactions: NormalizedTransaction[], merchantAggregates: MerchantAggregate[], aiCategories: Map<string, AIMerchantCategory>): CategorizedTransaction[];
/**
 * Build category summaries from categorized transactions.
 */
export declare function buildCategorySummaries(transactions: CategorizedTransaction[]): CategorySummary[];
/**
 * Build the full categorization result.
 */
export declare function buildCategorizationResult(transactions: CategorizedTransaction[]): CategorizationResult;
export {};
