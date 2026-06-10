/**
 * Transaction Parser — Bank Statement CSV Parser
 *
 * Auto-detects bank format via header signatures (Chase, BofA, Citi, Amex,
 * Wells Fargo) with a generic fallback using fuzzy column alias matching.
 *
 * Reuses sanitizeCellValue, parseCurrencyString, parseDateString from importHelpers.
 * All parsing runs client-side. Data never leaves the browser.
 */
import type { NormalizedTransaction, ParseResult } from './deductionFinderTypes';
/** Generate a stable hash key for a transaction (date + uppercase description + amount). */
export declare function transactionHash(txn: NormalizedTransaction): string;
/** Remove duplicate transactions, keeping the first occurrence. */
export declare function deduplicateTransactions(transactions: NormalizedTransaction[]): {
    unique: NormalizedTransaction[];
    duplicateCount: number;
};
export declare function parseTransactionCSV(csvContent: string): ParseResult;
