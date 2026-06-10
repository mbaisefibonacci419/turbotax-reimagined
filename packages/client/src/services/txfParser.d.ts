/**
 * TXF Parser — parses Tax Exchange Format (TXF) v042 files into income records.
 *
 * TXF is a text-based format from Intuit (~1991) used by brokerages like
 * Fidelity, Schwab, E*Trade, and Interactive Brokers for exporting tax data.
 *
 * Reference: TXF v042 specification (Intuit, last updated 2011-11-30).
 *
 * Key concepts:
 * - Each record starts with T (type), N (ref code), and ends with ^
 * - Records use numbered formats (0-6) that define field order
 * - Format 4: P, D, D, $, $ (security, date acquired, date sold, cost basis, proceeds)
 * - Format 5: Format 4 + $ (wash sale amount)
 * - Format 3: $, P (amount + description/payer)
 * - Format 1: $ (amount only)
 * - W-2 fields come as separate records keyed by ref code (460=salary, 461=fed withheld, etc.)
 *   and must be grouped by copy number to reconstruct a single W-2
 *
 * All parsing runs client-side. Data never leaves the browser.
 */
export interface TXFHeader {
    version: string;
    programName?: string;
    exportDate?: string;
}
export interface TXFRecord {
    /** D = detail, S = summary (default) */
    recordType: 'D' | 'S';
    /** Reference code (e.g. 321 = short-term gain Copy A) */
    refCode: number;
    /** Copy number (C line), default 1 */
    copyNumber: number;
    /** Line number (L line), default 1 */
    lineNumber: number;
    /** Description / payee / security name (P line) */
    description: string;
    /** Dates in order of appearance (D lines, parsed to YYYY-MM-DD) */
    dates: string[];
    /** Dollar amounts in order of appearance ($ lines) */
    amounts: number[];
    /** Extra detail text (X lines) */
    extraText: string[];
}
/** A parsed and mapped income item ready for import */
export interface TXFMappedItem {
    incomeType: string;
    label: string;
    data: Record<string, unknown>;
    warnings: string[];
    errors: string[];
}
export interface TXFParseResult {
    header: TXFHeader;
    /** Records grouped by income type for preview */
    groupedByType: Record<string, {
        incomeType: string;
        label: string;
        count: number;
        items: TXFMappedItem[];
    }>;
    totalRecords: number;
    validCount: number;
    errorCount: number;
    skippedCount: number;
    errors: string[];
    warnings: string[];
}
export declare function parseTXF(fileContent: string): TXFParseResult;
