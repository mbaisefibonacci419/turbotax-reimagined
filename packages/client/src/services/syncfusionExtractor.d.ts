/**
 * Syncfusion PDF Extractor — form field reading + structured text extraction.
 *
 * Replaces pdfjs-dist for the PDF import pipeline. Two key advantages:
 *
 * 1. **Form field reading** — Employer/institution-generated W-2s and 1099s
 *    store values in interactive form fields that pdfjs-dist's getTextContent()
 *    misses entirely. Syncfusion reads these via PdfDocument.form and injects
 *    them as TextBlocks at each field's position, so the existing proximity-
 *    based extraction pipeline picks them up automatically.
 *
 * 2. **Structured text extraction** — PdfDataExtractor.extractTextLines()
 *    provides word-level bounding boxes, replacing pdfjs-dist's text items.
 *
 * Tesseract.js is still used for OCR on scanned/image PDFs (unchanged).
 * pdf-lib is still used for PDF generation (unchanged).
 *
 * All processing runs client-side. Data never leaves the browser.
 */
import { type TextBlock } from './pdfExtractHelpers';
export interface SyncfusionExtractionResult {
    textBlocks: TextBlock[];
    pagesScanned: number;
    /** True when the PDF has very little text — likely a scanned document */
    isScanned: boolean;
    /** True when the PDF is password-protected and can't be read */
    isPasswordProtected: boolean;
    /** Number of form fields that had non-empty values */
    formFieldsWithValues: number;
}
/**
 * Extract text and form field values from a PDF using Syncfusion.
 *
 * Returns TextBlock[] compatible with the existing pdfExtractHelpers pipeline.
 * Form field values are injected as additional TextBlocks at each field's
 * position, so findLabelBlock() + findNearbyNumber() pick them up naturally.
 */
export declare function extractWithSyncfusion(pdfBytes: Uint8Array, maxPages?: number): SyncfusionExtractionResult;
