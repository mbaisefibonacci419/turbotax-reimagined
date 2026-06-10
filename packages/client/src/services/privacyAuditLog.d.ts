/**
 * Privacy Audit Log — local-only IndexedDB log of every outbound AI request.
 *
 * Lets users verify exactly what data left their device: what was sent,
 * what PII was blocked, which context fields were included, and a truncated
 * response summary. Transforms the privacy promise from "trust us" to
 * "verify yourself."
 *
 * Security:
 *   - Never stores pre-redaction text (no PII in the log)
 *   - Only stores: redacted message, PII block summary, context keys, response preview
 *   - Encrypted with vault key via AES-256-GCM (same pattern as expense scanner)
 *   - Auto-caps at 200 entries (oldest pruned first)
 *   - Cleared by wipeAllData() (IndexedDB wipe already covers this)
 */
export interface PrivacyAuditEntry {
    id: string;
    timestamp: string;
    feature: 'chat' | 'expense-scanner' | 'document-extract';
    /** Sub-type for document extraction — e.g. full image sent to Claude Vision. */
    requestKind?: 'vision-extraction';
    direction: 'outbound';
    provider: string;
    model: string;
    /** The redacted message that was actually sent (post-PII stripping). */
    redactedMessage: string;
    /** Summary of PII that was blocked, e.g. ["SSN ×1", "email ×2"]. Never the actual values. */
    piiBlocked: string[];
    /** Which context keys were included in the request. */
    contextKeysSent: string[];
    /** First 200 chars of the AI response (enough to identify the exchange). */
    responseTruncated: string;
}
/**
 * Log an outbound AI request to the privacy audit log.
 * Encrypts the entry with the vault key before storing.
 */
export declare function logOutboundRequest(entry: Omit<PrivacyAuditEntry, 'id' | 'timestamp' | 'direction'>): Promise<void>;
/**
 * Read all entries from the privacy audit log (decrypted).
 * Returns newest-first.
 */
export declare function getAuditEntries(): Promise<PrivacyAuditEntry[]>;
/**
 * Clear all entries from the privacy audit log.
 */
export declare function clearAuditLog(): Promise<void>;
/** Stash PII types detected by the client-side scanner (called by chatStore). */
export declare function stashPiiTypes(types: string[]): void;
/** Consume stashed PII types (called by transport when logging). Clears the stash. */
export declare function consumePiiTypes(): string[];
/**
 * Build PII block summary from a scanForPII result.
 * Returns human-readable strings like "SSN ×1", "email ×2".
 */
export declare function buildPiiBlockSummary(detectedTypes: string[]): string[];
