/**
 * OCR Service — client-side OCR using Tesseract.js.
 *
 * Lazy-loads the Tesseract.js WASM worker on first use (~7 MB total assets).
 * Converts Tesseract word-level output to TextBlock format with line grouping,
 * so the entire existing extraction pipeline is reused.
 *
 * All processing runs client-side. Data never leaves the browser.
 * Static assets are self-hosted in /tesseract-data/ (no CDN calls).
 */
import type { TextBlock } from './pdfExtractHelpers';
export type OCRStage = 'loading' | 'recognizing' | 'complete';
/** Tesseract word bounding box (subset of Tesseract.js Word type) */
export interface TesseractWord {
    text: string;
    bbox: {
        x0: number;
        y0: number;
        x1: number;
        y1: number;
    };
    confidence: number;
}
/** Terminate the OCR worker to free memory. Call on panel unmount. */
export declare function terminateWorker(): Promise<void>;
/**
 * Map a single Tesseract word to a TextBlock.
 * Filters out empty text and zero-width words.
 *
 * When scaleFactor > 1, coordinates are divided by it to normalize from
 * source pixel space (e.g. 300 DPI or photo resolution) to PDF-point
 * space (72 DPI, ~612×792 for letter). This ensures groupWordsToLines()
 * operates in point space where yTolerance=5 is correctly calibrated,
 * and findNearbyNumber(maxDistance=200) searches the expected range.
 */
export declare function mapTesseractWordToTextBlock(word: TesseractWord, page: number, scaleFactor?: number): TextBlock | null;
/**
 * Group word-level TextBlocks into line-level TextBlocks.
 *
 * Tesseract returns individual words. The existing findLabelBlock() and
 * findNearbyNumber() work better with line-level blocks that contain
 * multi-word labels like "wages, tips" as a single block.
 *
 * Groups words that are on the same page and have similar Y coordinates
 * (within yTolerance pixels), then sorts by X and concatenates text.
 */
export declare function groupWordsToLines(words: TextBlock[], yTolerance?: number): TextBlock[];
/**
 * Normalize Tesseract progress events into our stage/percentage model.
 */
export declare function normalizeProgress(status: string, progress: number): {
    stage: OCRStage;
    pct: number;
};
/**
 * Run OCR on a single image. Returns line-grouped TextBlocks.
 *
 * @param scaleFactor - Divides pixel coordinates by this value to normalize
 *   to PDF-point space. For photos: imageWidth / 612. Default 1 (no scaling).
 */
export declare function recognizeImage(image: ImageBitmap | HTMLCanvasElement, onProgress?: (stage: OCRStage, pct: number) => void, scaleFactor?: number): Promise<TextBlock[]>;
/**
 * Run OCR on multiple images (multi-page). Returns line-grouped TextBlocks
 * with correct page numbering (1-indexed).
 *
 * @param scaleFactor - Divides pixel coordinates by this value to normalize
 *   to PDF-point space. For 300 DPI renders: 300/72 ≈ 4.17. Default 1.
 */
export declare function recognizeImages(images: Array<ImageBitmap | HTMLCanvasElement>, onProgress?: (stage: OCRStage, pct: number) => void, scaleFactor?: number): Promise<TextBlock[]>;
