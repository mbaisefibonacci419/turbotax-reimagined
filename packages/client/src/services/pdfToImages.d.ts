/**
 * PDF to Images — renders scanned PDF pages to canvas for OCR processing.
 *
 * Uses pdfjs-dist (Mozilla PDF.js) to render each page at 300 DPI
 * for optimal Tesseract.js OCR accuracy.
 *
 * This is the only remaining pdfjs-dist consumer in the import pipeline —
 * digital text extraction has moved to Syncfusion (see syncfusionExtractor.ts).
 * pdfjs-dist is kept here because it provides canvas rendering that
 * Syncfusion's extraction APIs don't support.
 *
 * All processing runs client-side. Data never leaves the browser.
 */
import './pdfWorkerInit';
/**
 * Render PDF pages to canvas elements at the specified DPI.
 *
 * @param file - The PDF file to render
 * @param maxPages - Maximum number of pages to render (default: 3)
 * @param dpi - Target DPI for rendering (default: 300)
 * @returns Array of HTMLCanvasElement, one per page
 */
export declare function renderPDFToImages(file: File, maxPages?: number, dpi?: number): Promise<HTMLCanvasElement[]>;
/**
 * Render the first PDF page to a JPEG for Claude Vision (e.g. scanned W-2 PDFs).
 * Uses a moderate DPI to balance legibility vs. request size.
 */
export declare function renderPdfFirstPageJpegBase64(file: File, dpi?: number): Promise<{
    imageBase64: string;
    mediaType: 'image/jpeg';
} | null>;
