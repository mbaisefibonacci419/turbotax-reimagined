/**
 * PDF Importer — extracts data from W-2 and 1099 PDFs.
 *
 * Uses Syncfusion (@syncfusion/ej2-pdf + ej2-pdf-data-extract) for:
 * - Form field reading — captures values from digitally-filled forms
 *   that traditional text extraction misses
 * - Structured text extraction — bounding boxes for proximity matching
 *
 * Uses Tesseract.js (lazy-loaded) for OCR on scanned/image PDFs.
 * Uses pdf-lib for PDF generation (unchanged).
 *
 * All processing runs client-side. Data never leaves the browser.
 *
 * LIMITATIONS:
 * - OCR accuracy on tax forms is ~60-70% — always requires user verification
 * - Accuracy depends on the PDF layout matching expected IRS patterns
 * - Always requires user review before importing
 */
export { detectFormType, detectFormPages, extractW2Fields, extract1099INTFields, extract1099DIVFields, extract1099RFields, extract1099NECFields, extract1099MISCFields, extract1099GFields, extract1099BFields, extract1099KFields, extractSSA1099Fields, extract1099SAFields, extract1099QFields, extract1098Fields, extract1098TFields, extract1098EFields, extract1095AFields, extractK1Fields, extractW2GFields, extract1099CFields, extract1099SFields, generateImportTrace, FORM_TYPE_LABELS, INCOME_TYPE_STEP_MAP, INCOME_DISCOVERY_KEYS, } from './pdfExtractHelpers';
export type { SupportedFormType, TextBlock, PDFExtractResult, ImportTrace, ImportTraceEntry, FormDetectionTrace, FormPageSpan, } from './pdfExtractHelpers';
import { type PDFExtractResult } from './pdfExtractHelpers';
export type { OCRStage } from './ocrService';
/**
 * Extract data from a digitally-generated PDF file.
 *
 * Uses Syncfusion for both text extraction and form field reading.
 * Form field values (from employer/institution-filled W-2s and 1099s)
 * are injected as TextBlocks so the existing proximity pipeline captures
 * data that pdfjs-dist's text extraction would miss.
 *
 * Returns ocrAvailable: true when the PDF appears to be scanned.
 */
export declare function extractFromPDF(file: File): Promise<PDFExtractResult>;
/**
 * Extract data from a scanned/image-based PDF using OCR.
 * Renders pages to canvas at 300 DPI, then runs Tesseract.js OCR.
 */
export declare function extractFromPDFWithOCR(file: File, onProgress?: (stage: import('./ocrService').OCRStage, pct: number) => void): Promise<PDFExtractResult>;
/**
 * Extract data from a photo/image file using OCR.
 * Supports .jpg, .jpeg, .png, .tiff, .heic, .heif.
 *
 * Uses createImageBitmap with imageOrientation and resizeWidth for
 * native off-thread EXIF rotation and downscaling (avoids main-thread blocking).
 */
export declare function extractFromImage(file: File, onProgress?: (stage: import('./ocrService').OCRStage, pct: number) => void): Promise<PDFExtractResult>;
