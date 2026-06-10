/**
 * PII Scanner — shared between server and client.
 *
 * Detects personally identifiable information in text using regex patterns.
 * Returns structured results indicating what was found and sanitized text
 * with PII replaced by placeholders.
 *
 * Used by:
 *   - Client: Primary gate — blocks sending messages containing PII.
 *             In Private mode, warns but allows (data stays local).
 *   - Server: Defense-in-depth — catches anything the client missed.
 */
export interface PIIScanResult {
    /** Whether any PII was detected. */
    hasPII: boolean;
    /** The text with PII replaced by placeholders. */
    sanitized: string;
    /** Count of PII items detected. */
    detectedCount: number;
    /** Types of PII detected (e.g., 'ssn', 'email'). */
    detectedTypes: string[];
    /** Human-readable warnings for the user. */
    warnings: string[];
}
/**
 * Scan text for PII and return structured results.
 * Returns both the sanitized text and metadata about what was found.
 */
export declare function scanForPII(text: string): PIIScanResult;
