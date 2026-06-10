/**
 * PII Field Extractor
 *
 * Extracts structured tax-return field values from messages that contain PII.
 * This runs BEFORE the message is sanitized, so it sees the real values.
 * The extracted fields are applied directly to the local tax return (never
 * sent to the LLM), allowing the section to progress while keeping PII
 * out of the AI provider's hands.
 *
 * Supported extractions:
 *   - Street address → addressStreet
 *   - City/State/ZIP → addressCity, addressState, addressZip
 *   - Date of birth → dateOfBirth (ISO format)
 */
export interface ExtractedPIIField {
    field: string;
    value: string | number;
    label: string;
}
export interface PIIExtractionResult {
    fields: ExtractedPIIField[];
    llmHint: string;
}
/**
 * Extract structured tax-return fields from a message that contains PII.
 *
 * @param originalMessage The raw user message BEFORE sanitization.
 * @param detectedTypes   PII types detected by scanForPII (e.g., ['address', 'zip_code']).
 * @returns Extracted fields and an LLM hint describing what was auto-saved.
 */
export declare function extractPIIFields(originalMessage: string, detectedTypes: string[]): PIIExtractionResult;
