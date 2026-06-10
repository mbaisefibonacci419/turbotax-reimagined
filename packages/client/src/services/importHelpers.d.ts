/**
 * Import Helpers — shared utilities for CSV and PDF import.
 *
 * All parsing runs client-side. Data never leaves the browser.
 */
/**
 * Parse a currency string into a number.
 * Handles: "$1,234.56", "(500.00)" (negative), "1234", "-$500", blank → 0.
 */
export declare function parseCurrencyString(value: string | null | undefined): number;
/**
 * Parse a date string in various formats into YYYY-MM-DD (HTML date input format).
 * Accepts: "01/15/2025", "1/15/25", "2025-01-15", "01-15-2025", "Jan 15, 2025".
 * Returns null if unparseable.
 */
export declare function parseDateString(value: string | null | undefined): string | null;
/**
 * Infer holding period from acquisition and sale dates.
 * Returns true if held > 365 days (long-term), false otherwise.
 * Returns false (short-term) if either date is missing.
 */
export declare function inferHoldingPeriod(dateAcquired: string | null | undefined, dateSold: string | null | undefined): boolean;
/**
 * Parse a holding period string into a boolean.
 * "Long Term", "LT", "L", "Long" → true
 * "Short Term", "ST", "S", "Short" → false
 * Returns null if unrecognized.
 */
export declare function parseHoldingPeriod(value: string | null | undefined): boolean | null;
/**
 * Validate that required fields are present and non-empty.
 * Returns list of missing field names.
 */
export declare function validateRequiredFields(item: Record<string, unknown>, requiredKeys: string[]): string[];
/** Max file sizes */
export declare const MAX_CSV_SIZE: number;
export declare const MAX_PDF_SIZE: number;
export declare const MAX_TXF_SIZE: number;
export declare const MAX_FDX_SIZE: number;
