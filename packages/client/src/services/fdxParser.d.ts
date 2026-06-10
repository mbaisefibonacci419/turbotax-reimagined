/**
 * FDX Parser — parses Financial Data Exchange (FDX) JSON files into income records.
 *
 * FDX is a modern JSON-based format (successor to OFX) used by financial institutions
 * for tax document exchange. Supports 55+ tax form types.
 *
 * Handles both FDX v5 (taxDataList array) and v6+ (TaxStatement with forms array).
 *
 * Reference: FDX API Specification v6.4.1 (taxdataexchange.org)
 *
 * All parsing runs client-side. Data never leaves the browser.
 */
export interface FDXParseResult {
    /** FDX version detected (v5 or v6) */
    version: 'v5' | 'v6' | 'unknown';
    /** Tax year from the statement (if available) */
    taxYear?: number;
    /** Issuer name (if available) */
    issuerName?: string;
    /** Records grouped by income type for preview */
    groupedByType: Record<string, {
        incomeType: string;
        label: string;
        count: number;
        items: FDXMappedItem[];
    }>;
    totalForms: number;
    validCount: number;
    errorCount: number;
    skippedCount: number;
    errors: string[];
    warnings: string[];
}
export interface FDXMappedItem {
    incomeType: string;
    label: string;
    data: Record<string, unknown>;
    warnings: string[];
    errors: string[];
}
/**
 * Parse an FDX JSON file into grouped income records.
 */
export declare function parseFDX(jsonInput: unknown): FDXParseResult;
