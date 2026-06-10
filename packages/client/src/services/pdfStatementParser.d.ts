/**
 * PDF Statement Parser — Bank/Credit Card Statement PDF Parser
 *
 * Extracts transactions from PDF bank and credit card statements using
 * pdfjs-dist (already installed). Groups text items into lines by Y-coordinate,
 * then parses each line for date + description + amount patterns.
 *
 * Reuses parseDateString, parseCurrencyString from importHelpers.
 * All processing runs client-side. Data never leaves the browser.
 */
import './pdfWorkerInit';
import type { ParseResult } from './deductionFinderTypes';
export declare function parsePDFStatement(file: File): Promise<ParseResult>;
export { groupIntoLines, parseTransactionLines, parseTransactionLine } from './pdfStatementParserHelpers';
