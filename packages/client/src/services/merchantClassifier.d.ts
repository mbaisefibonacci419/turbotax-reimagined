/**
 * Merchant Classifier — AI-powered merchant classification for Deduction Finder
 *
 * Three responsibilities:
 *   A. API client: sends merchant names to /api/batch/classify-merchants
 *   B. Sanitizer: strips potential PII from merchant descriptions
 *   C. Deterministic mapping: businessType → InsightCategory (tax advice boundary)
 *   D. AI insight generator: builds DeductionInsight[] from classifications
 *
 * Tax advice boundary: The AI only classifies what a merchant IS.
 * The BUSINESS_TYPE_MAP is deterministic code that maps types to potential
 * tax categories. All descriptions use review language ("may be relevant IF...").
 * The user decides what's business vs. personal.
 */
import type { ReturnContext, DeductionInsight, NormalizedTransaction } from './deductionFinderTypes';
export interface MerchantClassification {
    merchant: string;
    businessType: string;
}
interface ClassifyOptions {
    provider: string;
    apiKey?: string;
    model: string;
}
/**
 * Send merchant names to the batch classification endpoint.
 * Batches in chunks of 75 to keep each LLM call under the timeout.
 *
 * @param onProgress - optional callback reporting (completed, total) merchants
 */
export declare function classifyMerchantsWithAI(merchants: string[], context: ReturnContext, options: ClassifyOptions, onProgress?: (completed: number, total: number) => void): Promise<MerchantClassification[]>;
/** Strip potential PII from merchant description before sending to AI. */
export declare function sanitizeMerchant(description: string): string;
/**
 * Generate DeductionInsight[] from AI classifications + original transactions.
 *
 * Flow:
 * 1. Build a lookup: merchant name → businessType
 * 2. For each mapping in BUSINESS_TYPE_MAPPINGS, find matching transactions
 * 3. Check gate against ReturnContext
 * 4. Build insight with review language and source: 'ai'
 */
export declare function generateAIInsights(classifications: MerchantClassification[], transactions: NormalizedTransaction[], context: ReturnContext): DeductionInsight[];
/**
 * Merge rule-engine insights with AI insights.
 * Rule insights always win for the same category (higher precision).
 */
export declare function mergeInsights(ruleInsights: DeductionInsight[], aiInsights: DeductionInsight[]): DeductionInsight[];
export {};
