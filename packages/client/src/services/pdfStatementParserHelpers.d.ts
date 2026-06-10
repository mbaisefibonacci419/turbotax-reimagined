/**
 * PDF Statement Parser — Pure Helper Functions
 *
 * Text-processing logic for bank statement parsing, extracted from pdfStatementParser.ts
 * so it can be unit tested without pdfjs-dist (which requires DOMMatrix / browser APIs).
 *
 * Zero dependencies on pdfjs-dist. All processing runs client-side.
 */
import type { NormalizedTransaction } from './deductionFinderTypes';
export interface TextItem {
    text: string;
    x: number;
    y: number;
    page: number;
}
export interface TextLine {
    text: string;
    page: number;
    y: number;
}
/** Group text items into lines by Y-coordinate proximity within each page. */
export declare function groupIntoLines(items: TextItem[]): TextLine[];
/** Parse lines looking for transaction rows (date + description + amount). */
export declare function parseTransactionLines(lines: TextLine[], warnings: string[]): NormalizedTransaction[];
/** Try to extract a transaction from a single text line.
 *  Returns null if the line doesn't contain a date + amount pattern. */
export declare function parseTransactionLine(text: string, page?: number): NormalizedTransaction | null;
