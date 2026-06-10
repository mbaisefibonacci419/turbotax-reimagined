/**
 * Chat API Service — refactored to use ChatTransport abstraction.
 *
 * This is now a thin orchestration layer:
 *   1. Reads the active AI mode from the settings store
 *   2. Runs client-side PII scanning (primary gate)
 *   3. Delegates to the appropriate ChatTransport
 *
 * The old direct fetch calls are replaced by transport.sendMessage().
 */
import type { ChatContext, ChatMessage, ChatResponse, ChatStatus } from '@nimbus/engine';
import type { ChatTransportStatus, StreamDeltaCallback } from './chat/types';
export interface PIICheckResult {
    /** Whether PII was detected. */
    hasPII: boolean;
    /** Sanitized version of the message. */
    sanitized: string;
    /** Human-readable warnings to show the user. */
    warnings: string[];
    /** Types of PII detected. */
    detectedTypes: string[];
}
/**
 * Scan a message for PII before sending.
 * This is the primary gate — called before any transport.
 */
export declare function checkForPII(message: string): PIICheckResult;
/**
 * Check whether the chat feature is available.
 *
 * With the two-tier AI system (Private / BYOK), the chat feature
 * is ALWAYS available — there's always a mode the user can use. The button
 * should always show. Transport readiness (model loaded, key configured)
 * is a separate concern handled when the user tries to send a message.
 */
export declare function checkChatStatus(): Promise<ChatStatus>;
/**
 * Get the transport status (richer than ChatStatus — includes progress, errors).
 */
export declare function getTransportStatus(): Promise<ChatTransportStatus>;
/**
 * Send a chat message via the active transport (batch mode, no streaming).
 * Caller should run checkForPII() first and handle PII warnings.
 * Throws in Private mode (no transport available).
 */
export declare function sendChatMessage(message: string, conversationHistory: ChatMessage[], context: ChatContext, signal?: AbortSignal): Promise<ChatResponse>;
/**
 * Send a chat message via SSE streaming. Calls onDelta with each text token.
 * Falls back to batch mode if the transport doesn't support streaming.
 */
export declare function sendChatMessageStream(message: string, conversationHistory: ChatMessage[], context: ChatContext, onDelta: StreamDeltaCallback, signal?: AbortSignal): Promise<ChatResponse>;
