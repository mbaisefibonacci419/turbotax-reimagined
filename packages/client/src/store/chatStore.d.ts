/**
 * Chat Store — Zustand store for the AI chat assistant.
 *
 * Manages chat messages, panel visibility, disclaimer state,
 * and the orchestration of sending messages → PII scanning →
 * building context → calling the active transport → displaying results.
 *
 * Chat history is encrypted and persisted per-return in localStorage
 * using the same AES-256-GCM key as the tax return data. Full history
 * is preserved for future conversation export as PDF tax records.
 */
import type { ChatAction, ChatOption } from '@nimbus/engine';
import { type GroundingDiscrepancy } from '../services/responseValidator';
/** Metadata for a document attached to a chat message. */
export interface ChatAttachment {
    /** Original file name (e.g., "W2-Acme.pdf"). */
    fileName: string;
    /** Whether this is a PDF or an image file. */
    fileType: 'pdf' | 'image';
    /** Extraction processing status. */
    status: 'extracting' | 'ocr-processing' | 'done' | 'error';
    /** Detected form type (after extraction). */
    formType?: string;
    /** Error message if extraction failed. */
    errorMessage?: string;
    /** OCR progress percentage (0–100). */
    ocrProgress?: number;
    /** OCR stage label. */
    ocrStage?: string;
}
export interface ChatMessageUI {
    id: string;
    role: 'user' | 'assistant';
    content: string;
    timestamp: number;
    /** Proposed actions from LLM (assistant messages only). */
    actions?: ChatAction[];
    /** Whether actions have been applied by the user. */
    actionsApplied?: boolean;
    /** Whether actions were dismissed by the user. */
    actionsDismissed?: boolean;
    /** Human-readable summary after applying actions. */
    actionsSummary?: string;
    /** User feedback on this response (null = not rated). Session-only. */
    feedback?: 'up' | 'down' | null;
    /** Suggested follow-up questions from the LLM. */
    followUpChips?: string[];
    /** Structured selectable options (rendered as tappable pills). */
    options?: ChatOption[];
    /** When true, options support multi-select with a confirm button. */
    multiSelect?: boolean;
    /** Attached document metadata (user messages only). */
    attachment?: ChatAttachment;
    /** Post-response grounding check: dollar amounts vs current calculation. */
    verification?: {
        verified: boolean;
        discrepancies?: GroundingDiscrepancy[];
        footnote?: string;
    };
}
/** PII warning state for display in the chat UI. */
export interface PIIWarningState {
    /** Whether a PII warning is currently showing. */
    active: boolean;
    /** The original message that triggered the warning. */
    originalMessage: string;
    /** The sanitized version of the message. */
    sanitizedMessage: string;
    /** Human-readable warnings. */
    warnings: string[];
    /** Types of PII detected. */
    detectedTypes: string[];
}
interface ChatState {
    messages: ChatMessageUI[];
    isOpen: boolean;
    isLoading: boolean;
    /** Accumulated streaming text while the LLM response is being received. */
    streamingContent: string | null;
    hasAcceptedDisclaimer: boolean;
    isAvailable: boolean;
    modelName: string | null;
    error: string | null;
    chatReturnId: string | null;
    /** PII warning state (shown when PII is detected in a message). */
    piiWarning: PIIWarningState | null;
    togglePanel: () => void;
    openPanel: () => void;
    closePanel: () => void;
    acceptDisclaimer: () => void;
    sendMessage: (text: string) => Promise<void>;
    /** Send a message that was sanitized after a PII warning. */
    sendSanitizedMessage: () => Promise<void>;
    /** Dismiss the PII warning without sending. */
    dismissPIIWarning: () => void;
    markActionsApplied: (messageId: string, summary: string) => void;
    markActionsDismissed: (messageId: string) => void;
    /** Undo applied actions for a message — restores the snapshot and resets message state. */
    undoActions: (messageId: string) => void;
    /** Set thumbs up/down feedback on a message. Clicking the same thumb toggles it off. */
    setMessageFeedback: (messageId: string, feedback: 'up' | 'down') => void;
    /** Re-send the last user message with fresh context, replacing the last assistant response. */
    regenerateLastResponse: () => Promise<void>;
    /** Edit a user message: truncate conversation from that point and re-send with new text. */
    editAndResend: (messageId: string, newText: string) => Promise<void>;
    /** Retry a user message: truncate from the following assistant response and re-send. */
    retryMessage: (messageId: string) => Promise<void>;
    /** Abort the in-flight message request (stop button / Esc). */
    abortMessage: () => void;
    clearHistory: () => void;
    clearError: () => void;
    checkAvailability: () => Promise<void>;
    hydrateForReturn: (returnId: string) => void;
    /** Open the chat panel and send a pre-filled prompt (used by "Guide Me" buttons).
     *  Optional extraContext is injected into formsReviewContext for the LLM. */
    openWithPrompt: (prompt: string, extraContext?: string) => Promise<void>;
    /** Attach a document (PDF/image), run extraction, and propose import actions. */
    sendDocumentMessage: (file: File) => Promise<void>;
    /** Insert an assistant message locally (no LLM). Used for proactive step-transition nudges. */
    injectProactiveMessage: (message: string, followUpChips?: string[], options?: ChatOption[]) => void;
    /** Persist a proactive nudge category to the return so it is not shown again. */
    dismissProactiveCategory: (category: string) => void;
}
export declare const useChatStore: import("zustand").UseBoundStore<import("zustand").StoreApi<ChatState>>;
export {};
