/**
 * BYOK Transport — sends messages via the server proxy using the user's Anthropic API key.
 *
 * The user's API key is sent in the request body (not a header) to avoid
 * appearing in access logs. The server uses it for a one-shot API call
 * and immediately discards it.
 *
 * Privacy: The server acts as a CORS proxy. It runs PII scanning as
 * defense-in-depth, but the client should scan first.
 */
import type { ChatContext, ChatMessage, ChatResponse, AIProvider } from '@nimbus/engine';
import type { ChatTransport, ChatTransportStatus, StreamDeltaCallback } from './types';
export declare class BYOKTransport implements ChatTransport {
    private provider;
    private apiKey;
    private model;
    readonly displayName = "BYOK (Your API Key)";
    readonly mode: "byok";
    constructor(provider: AIProvider, apiKey: string, model: string);
    private buildRequestBody;
    private createAbortController;
    private logAuditTrail;
    sendMessage(message: string, conversationHistory: ChatMessage[], context: ChatContext, signal?: AbortSignal): Promise<ChatResponse>;
    sendMessageStream(message: string, conversationHistory: ChatMessage[], context: ChatContext, onDelta: StreamDeltaCallback, signal?: AbortSignal): Promise<ChatResponse>;
    checkStatus(): Promise<ChatTransportStatus>;
}
