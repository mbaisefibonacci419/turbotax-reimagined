/**
 * PDF Extract Helpers — pure logic for form type detection and field extraction.
 *
 * This module contains NO pdfjs-dist dependency, so it can be unit-tested
 * in Node.js without browser APIs. The main pdfImporter.ts re-exports
 * everything from here and adds the PDF loading/parsing layer.
 */
export type SupportedFormType = 'W-2' | '1099-INT' | '1099-DIV' | '1099-R' | '1099-NEC' | '1099-MISC' | '1099-G' | '1099-B' | '1099-K' | 'SSA-1099' | '1099-SA' | '1099-Q' | '1098' | '1098-T' | '1098-E' | '1095-A' | 'K-1' | 'W-2G' | '1099-C' | '1099-S';
export interface TextBlock {
    text: string;
    x: number;
    y: number;
    width: number;
    height: number;
    page: number;
}
export interface PDFExtractResult {
    formType: SupportedFormType | null;
    confidence: 'high' | 'medium' | 'low';
    extractedData: Record<string, unknown>;
    incomeType: string | null;
    payerName: string;
    warnings: string[];
    errors: string[];
    textBlockCount: number;
    trace?: ImportTrace;
    ocrUsed?: boolean;
    ocrAvailable?: boolean;
    rawOCRText?: string;
    aiEnhanced?: boolean;
    /** Additional forms extracted from a multi-form PDF (e.g., consolidated brokerage statement). */
    additionalResults?: PDFExtractResult[];
}
export interface ImportTraceEntry {
    field: string;
    label: string;
    status: 'found' | 'not_found';
    value?: string;
    reasoning: string;
}
export interface FormDetectionTrace {
    detectedType: SupportedFormType | null;
    confidence: 'high' | 'medium' | 'low';
    matchedKeywords: string[];
    reasoning: string;
}
export interface ImportTrace {
    formDetection: FormDetectionTrace;
    fields: ImportTraceEntry[];
    summary: string;
    textBlockCount: number;
    pagesScanned: number;
    formPageRange?: {
        start: number;
        end: number;
    };
    additionalForms?: Array<{
        type: string;
        pages: string;
    }>;
}
export interface FormPageSpan {
    type: SupportedFormType;
    incomeType: string;
    confidence: 'high' | 'medium' | 'low';
    matchedKeywords: string[];
    startPage: number;
    endPage: number;
}
/**
 * Detect form type from extracted text blocks.
 *
 * When `ocrMode` is true, uses fuzzy matching (Levenshtein distance ≤ 2)
 * for keyword detection instead of exact substring matching.
 * This compensates for OCR character recognition errors like "1099-NFC"
 * instead of "1099-NEC". Confidence is capped at 'low' for OCR results.
 *
 * When `ocrMode` is false/undefined, behavior is identical to pre-OCR
 * (exact substring matching via String.includes).
 */
export declare function detectFormType(textBlocks: TextBlock[], ocrMode?: boolean): {
    type: SupportedFormType | null;
    incomeType: string | null;
    confidence: 'high' | 'medium' | 'low';
    matchedKeywords: string[];
};
/**
 * Scan a multi-page PDF page-by-page and return contiguous form spans.
 *
 * Each span represents one detected IRS form across one or more consecutive
 * pages. Pages that don't match any form before the first detected form are
 * skipped (intro/summary pages). Pages that don't match any form after a
 * detected form are treated as continuation pages (e.g., K-1 page 2, 1099-B
 * continuation sheets) and merged into the preceding span.
 *
 * Returns spans sorted by startPage. An empty array means no supported form
 * was detected on any page.
 */
export declare function detectFormPages(textBlocks: TextBlock[], ocrMode?: boolean): FormPageSpan[];
/**
 * Group word-level TextBlocks into phrase-level TextBlocks.
 *
 * PDF text extractors (Syncfusion, pdfjs-dist) produce individual words
 * as separate TextBlocks. The extraction pipeline's findLabelBlock() needs
 * multi-word phrases like "wages, tips" to match keywords.
 *
 * Groups words that are:
 * 1. On the same page
 * 2. On the same Y line (within yTolerance)
 * 3. Horizontally adjacent (X gap < xGapThreshold)
 *
 * The X-gap splitting preserves column structure on IRS forms — labels
 * in the left column stay separate from labels in the right column.
 */
export declare function groupWordsToPhrases(words: TextBlock[], yTolerance?: number, xGapThreshold?: number): TextBlock[];
export declare function extractW2Fields(textBlocks: TextBlock[]): Record<string, unknown>;
export declare function extract1099INTFields(textBlocks: TextBlock[]): Record<string, unknown>;
export declare function extract1099DIVFields(textBlocks: TextBlock[]): Record<string, unknown>;
export declare function extract1099RFields(textBlocks: TextBlock[]): Record<string, unknown>;
export declare function extract1099NECFields(textBlocks: TextBlock[]): Record<string, unknown>;
export declare function extract1099MISCFields(textBlocks: TextBlock[]): Record<string, unknown>;
export declare function extract1099GFields(textBlocks: TextBlock[]): Record<string, unknown>;
export declare function extract1099BFields(textBlocks: TextBlock[]): Record<string, unknown>;
export declare function extract1099KFields(textBlocks: TextBlock[]): Record<string, unknown>;
export declare function extractSSA1099Fields(textBlocks: TextBlock[]): Record<string, unknown>;
export declare function extract1099SAFields(textBlocks: TextBlock[]): Record<string, unknown>;
export declare function extract1099QFields(textBlocks: TextBlock[]): Record<string, unknown>;
export declare function extract1098Fields(textBlocks: TextBlock[]): Record<string, unknown>;
export declare function extract1098TFields(textBlocks: TextBlock[]): Record<string, unknown>;
export declare function extract1098EFields(textBlocks: TextBlock[]): Record<string, unknown>;
export declare function extract1095AFields(textBlocks: TextBlock[]): Record<string, unknown>;
export declare function extractK1Fields(textBlocks: TextBlock[]): Record<string, unknown>;
export declare function extractW2GFields(textBlocks: TextBlock[]): Record<string, unknown>;
export declare function extract1099CFields(textBlocks: TextBlock[]): Record<string, unknown>;
export declare function extract1099SFields(textBlocks: TextBlock[]): Record<string, unknown>;
export declare const FORM_TYPE_LABELS: Record<SupportedFormType, string>;
export declare const INCOME_TYPE_STEP_MAP: Record<string, string>;
export declare const INCOME_DISCOVERY_KEYS: Record<string, string>;
/**
 * Generate a human-readable import trace explaining what was extracted
 * and how the form was detected.
 */
export declare function generateImportTrace(formType: SupportedFormType | null, confidence: 'high' | 'medium' | 'low', matchedKeywords: string[], extractedData: Record<string, unknown>, textBlockCount: number, pagesScanned: number, pageRangeInfo?: {
    formPageRange?: {
        start: number;
        end: number;
    };
    additionalForms?: Array<{
        type: string;
        pages: string;
    }>;
}): ImportTrace;
