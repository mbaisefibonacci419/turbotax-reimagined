/**
 * Shared PDF text extraction utilities.
 *
 * Extracted from priorYearImporter.ts so both the prior-year importer and
 * competitor-return parser can share the same text-parsing infrastructure.
 *
 * All processing runs client-side. Data never leaves the browser.
 */
import * as pdfjsLib from 'pdfjs-dist';
import './pdfWorkerInit';
export interface TextBlock {
    text: string;
    x: number;
    y: number;
    page: number;
}
/**
 * Extract positioned text blocks from the first N pages of a PDF.
 */
export declare function extractTextBlocks(pdf: pdfjsLib.PDFDocumentProxy, maxPages?: number): Promise<TextBlock[]>;
/**
 * Detect the X position of the value column on an IRS form page.
 * IRS forms have a consistent rightmost column where dollar amounts appear.
 * We detect it by finding the mode X position of large numbers (> 100).
 */
export declare function detectValueColumnX(blocks: TextBlock[], page: number): number;
/**
 * Find a numeric (dollar) value near a label matching any of the given keywords.
 * Searches rightward on the same line (±30px vertical tolerance).
 * Returns the rightmost candidate (IRS 1040 format: amount on far right).
 */
export declare function findLineValue(blocks: TextBlock[], keywords: string[]): number;
/**
 * Column-aware line value extraction for IRS 1040.
 *
 * Unlike findLineValue() which just takes the rightmost number, this function:
 * 1. Detects the value column X position on the page
 * 2. Finds label blocks matching keywords
 * 3. Only reads values from the value column (±30px tolerance)
 * 4. Filters out obvious line numbers (single/double digit numbers at wrong X)
 *
 * This avoids the common failure where line numbers (1-38) are mistaken for values.
 */
export declare function findColumnValue(blocks: TextBlock[], keywords: string[], valueColumnX: number, 
/** When true, only use the tight column pass (8px). Disables the wider 15px
 *  fallback to prevent adjacent-line value contamination. Use for fields
 *  where labels are tightly packed (e.g., interest/dividends/IRA lines). */
strictColumnOnly?: boolean): number;
/**
 * Parse a dollar-formatted string into a number.
 * Handles "$1,234.56", "(500)", "($1,234)", negative values, whitespace.
 */
export declare function parseDollarValue(raw: string): number | null;
/**
 * Detect the tax year from a PDF by searching for a 4-digit year in the text.
 * Scans up to the first 5 pages to handle competitor bundles with cover pages.
 * Falls back to prior year if not found.
 */
export declare function detectTaxYear(pdf: pdfjsLib.PDFDocumentProxy): Promise<number>;
/**
 * Scan all pages of a PDF to find the actual Form 1040 pages.
 * Competitor PDFs often bundle cover pages, state returns, and schedules.
 * Returns the 1-indexed page numbers for 1040 page 1 and page 2.
 * Returns null if no 1040 is found.
 *
 * Detection strategy (multi-pass):
 *   Pass 1 — strict: "Form 1040" + "individual income tax" (IRS standard)
 *   Pass 2 — relaxed: "Form 1040" or "1040-SR" + Treasury/IRS headers
 *   Pass 3 — OMB: unique OMB number 1545-0074 (printed on every 1040)
 *   Pass 4 — structural: page has "filing status" + income line labels
 *
 * In all passes, intro/cover pages and 1040-X are excluded.
 */
export declare function find1040Pages(pdf: pdfjsLib.PDFDocumentProxy): Promise<{
    page1: number;
    page2: number;
} | null>;
/**
 * Extract text blocks from specific page numbers (1-indexed).
 */
export declare function extractTextBlocksFromPages(pdf: pdfjsLib.PDFDocumentProxy, pageNumbers: number[]): Promise<TextBlock[]>;
