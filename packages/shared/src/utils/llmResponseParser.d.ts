/**
 * LLM Response Parser — shared between server and client.
 *
 * Parses structured JSON from raw LLM output. Handles JSON with or without
 * markdown code fences, and falls back to treating the entire response as
 * a plain text message when no valid JSON is found.
 *
 * Used by:
 *   - Server: after calling OpenAI/Anthropic (paid/BYOK modes)
 *   - Client: after calling local WebLLM model (private mode)
 */
import type { ChatResponse } from '../types/chat.js';
/**
 * Parse raw LLM text output into a structured ChatResponse.
 * Handles JSON with or without markdown code fences.
 * Falls back to treating the entire response as a plain message.
 */
export declare function parseResponse(raw: string): ChatResponse;
/**
 * Extract JSON from a response that may contain markdown code fences
 * or other surrounding text.
 */
export declare function extractJSON(text: string): string | null;
