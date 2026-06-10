/**
 * useDocumentImport — shared OCR state machine hook.
 *
 * Extracted from PDFImportPanel so both PDFImportPanel and InlinePDFImport
 * can handle digital PDFs, scanned PDFs, and photos with full OCR support.
 *
 * State machine: upload → extracting → (ocr-confirm → ocr-processing →) review → importing → done
 *                                                                          ↕
 *                                                                    ai-enhancing
 */
import { type PDFExtractResult, type SupportedFormType } from '../services/pdfImporter';
import { type CrossValidatedField } from '../services/aiExtractionService';
import type { OCRStage } from '../services/ocrService';
import { type DuplicateCheckResult } from '../services/duplicateDetection';
export type DocumentImportState = 'upload' | 'extracting' | 'ocr-confirm' | 'ocr-processing' | 'review' | 'ai-enhancing' | 'importing' | 'done';
export interface UseDocumentImportOptions {
    expectedFormType?: SupportedFormType;
}
export interface UseDocumentImportReturn {
    state: DocumentImportState;
    result: PDFExtractResult | null;
    editData: Record<string, unknown>;
    ocrStage: OCRStage;
    ocrProgress: number;
    pendingFile: File | null;
    importedFormType: string;
    duplicateCheck: DuplicateCheckResult | null;
    crossValidatedFields: CrossValidatedField[] | null;
    aiEnhanced: boolean;
    aiError: string | null;
    aiEligible: boolean;
    handleFile: (file: File) => Promise<void>;
    handleRunOCR: () => Promise<void>;
    handleFieldChange: (key: string, value: unknown) => void;
    handleImport: () => boolean;
    handleEnhanceWithAI: () => Promise<void>;
    reset: () => void;
}
/** Check if a file is an image (not PDF) */
export declare function isImageFile(file: File): boolean;
export declare function useDocumentImport(options?: UseDocumentImportOptions): UseDocumentImportReturn;
