/**
 * CSV Parser — parses brokerage/crypto CSV exports into 1099-B and 1099-DA records.
 *
 * Supports auto-detection of Schwab, Fidelity, E*Trade, Robinhood, and Coinbase formats.
 * Falls back to generic column mapping via header alias matching.
 *
 * All parsing runs client-side. Data never leaves the browser.
 */
export interface ColumnMapping {
    brokerName?: string;
    description?: string;
    dateAcquired?: string;
    dateSold?: string;
    proceeds?: string;
    costBasis?: string;
    holdingPeriod?: string;
    federalTaxWithheld?: string;
    washSaleLoss?: string;
    tokenName?: string;
    tokenSymbol?: string;
    transactionId?: string;
}
export interface MappedRow {
    data: Record<string, unknown>;
    warnings: string[];
    errors: string[];
}
export interface CSVParseResult {
    detectedFormat: string;
    targetType: '1099b' | '1099da';
    headers: string[];
    rawRowCount: number;
    mappedRows: MappedRow[];
    mapping: ColumnMapping;
    validCount: number;
    warningCount: number;
    errorCount: number;
    skippedCount: number;
}
/**
 * Detect which brokerage format a CSV uses based on its headers.
 */
export declare function detectBrokerFormat(headers: string[]): {
    format: string;
    mapping: ColumnMapping;
};
/**
 * Auto-detect column mapping from CSV headers using alias matching.
 */
export declare function autoDetectColumnMapping(headers: string[]): ColumnMapping;
/**
 * Parse a CSV string and map rows to 1099-B or 1099-DA income items.
 */
export declare function parseCSV(fileContent: string, targetType: '1099b' | '1099da', brokerNameOverride?: string): CSVParseResult;
/**
 * Map a single CSV row to an Income1099B record.
 */
export declare function mapRowToIncome1099B(row: Record<string, string>, mapping: ColumnMapping, brokerName: string): MappedRow;
/**
 * Map a single CSV row to an Income1099DA record.
 */
export declare function mapRowToIncome1099DA(row: Record<string, string>, mapping: ColumnMapping, brokerName: string): MappedRow;
