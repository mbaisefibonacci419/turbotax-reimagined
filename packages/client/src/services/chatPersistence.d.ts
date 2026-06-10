/**
 * Chat Persistence — encrypted per-return chat history in localStorage.
 *
 * Chat history is encrypted with the same AES-256-GCM key as the tax return
 * data (derived from the user's passphrase via PBKDF2). This means:
 * - History is unreadable without the passphrase
 * - History is cleared by wipeAllData() (nuclear delete)
 * - History is cleared when the associated return is deleted
 *
 * Full history is preserved (no cap) to support future conversation export
 * as PDF for tax records ("Why I chose itemized deductions").
 *
 * Raw action payloads are stripped before persistence — only the human-readable
 * actionsSummary is kept. This avoids duplicating structured tax data and keeps
 * the audit trail readable.
 */
/** Persistable subset of ChatMessageUI — strips raw actions. */
export interface PersistedMessage {
    id: string;
    role: 'user' | 'assistant';
    content: string;
    timestamp: number;
    actionsApplied?: boolean;
    actionsDismissed?: boolean;
    actionsSummary?: string;
    feedback?: 'up' | 'down' | null;
    followUpChips?: string[];
    /** Minimal attachment metadata (file name + detected form type only). */
    attachment?: {
        fileName: string;
        fileType: 'pdf' | 'image';
        formType?: string;
    };
}
/**
 * Strip a ChatMessageUI down to its persistable form.
 * Removes raw `actions` array (contains structured tax data).
 */
export declare function toPersisted(msg: {
    id: string;
    role: 'user' | 'assistant';
    content: string;
    timestamp: number;
    actions?: unknown[];
    actionsApplied?: boolean;
    actionsDismissed?: boolean;
    actionsSummary?: string;
    feedback?: 'up' | 'down' | null;
    followUpChips?: string[];
    attachment?: {
        fileName: string;
        fileType: 'pdf' | 'image';
        formType?: string;
        status?: string;
    };
}): PersistedMessage;
/**
 * Save chat messages for a return. Encrypts and writes to localStorage.
 * Debounced externally — call after each message exchange.
 */
export declare function saveChatHistory(returnId: string, messages: PersistedMessage[]): Promise<void>;
/**
 * Load chat messages for a return. Decrypts from localStorage.
 * Returns empty array if no history or decryption fails.
 */
export declare function loadChatHistory(returnId: string): Promise<PersistedMessage[]>;
/**
 * Delete chat history for a specific return.
 * Called when a return is deleted.
 */
export declare function deleteChatHistory(returnId: string): void;
/**
 * Delete all chat history across all returns.
 * Called by wipeAllData().
 */
export declare function deleteAllChatHistory(): void;
