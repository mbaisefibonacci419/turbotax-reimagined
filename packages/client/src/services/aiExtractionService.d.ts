/**
 * AI Extraction Service — client-side AI enhancement for OCR-extracted documents.
 *
 * Three responsibilities:
 * A. API client — sends PII-stripped OCR text to the extraction endpoint
 * B. Cross-validation engine — compares local OCR vs. AI results per field
 * C. Form-specific validation rules — sanity checks on extracted values
 *
 * Tax advice boundary:
 *   The AI extracts field values — it NEVER provides tax advice.
 *   "Engine calculates, AI narrates, user decides."
 */
import type { AIProvider } from '@nimbus/engine';
import type { SupportedFormType } from './pdfExtractHelpers';
export type FieldConfidence = 'high' | 'medium' | 'low';
export interface AIExtractedField {
    value: string | number | boolean;
    confidence: FieldConfidence;
}
export interface AIExtractionResult {
    formType: string;
    formTypeConfidence: FieldConfidence;
    fields: Record<string, AIExtractedField>;
}
export interface CrossValidatedField {
    key: string;
    label: string;
    localValue: unknown;
    aiValue: unknown;
    finalValue: unknown;
    confidence: FieldConfidence;
    source: 'local' | 'ai' | 'both_agree' | 'user_override';
    reasoning: string;
}
/**
 * Upload a PDF to the server for extraction using Docling (local Python)
 * with automatic fallback to Claude Vision (API key required).
 * This is the primary extraction path — no "Enhance with AI" step needed.
 */
export declare function extractPDFServerSide(file: File, formTypeHint: string | null, model: string, apiKey?: string): Promise<AIExtractionResult & {
    method?: string;
}>;
/** Raw base64 (no data: prefix) from a local file. */
export declare function fileToBase64Data(file: File): Promise<string>;
/**
 * Map an image file to an Anthropic vision media_type, using type and extension.
 */
export declare function resolveVisionMediaType(file: File): 'image/jpeg' | 'image/png' | 'image/webp' | 'image/gif' | null;
/**
 * Send a document image to Claude Vision for field extraction (BYOK).
 * The image is not PII-stripped; the user trades redaction for accuracy.
 */
export declare function extractFieldsWithVision(imageBase64: string, mediaType: 'image/jpeg' | 'image/png' | 'image/webp' | 'image/gif', formTypeHint: string | null, provider: AIProvider, apiKey: string | undefined, model: string): Promise<AIExtractionResult>;
/**
 * Send PII-stripped OCR text to the AI extraction endpoint.
 * Runs scanForPII() client-side as the primary PII gate.
 */
export declare function extractFieldsWithAI(ocrText: string, formTypeHint: string | null, aiSettings: {
    provider: AIProvider;
    apiKey?: string;
    model: string;
}): Promise<AIExtractionResult>;
/**
 * Cross-validate local OCR extraction against AI extraction results.
 * Returns per-field confidence and reasoning.
 */
export declare function crossValidate(localData: Record<string, unknown>, aiResult: AIExtractionResult, formType: SupportedFormType): CrossValidatedField[];
