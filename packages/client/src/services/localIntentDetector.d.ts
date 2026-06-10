/**
 * Local Intent Detector
 *
 * Catches simple, high-confidence user intents (navigation, refund summaries,
 * completeness checks, field reads, deletion) and builds ChatResponse actions
 * directly — no LLM round-trip needed.
 *
 * Deletion is handled locally because LLMs reliably refuse to generate
 * remove_item actions due to safety priors around deletion, even when the
 * system prompt explicitly permits it.
 */
import type { ChatResponse } from '@nimbus/engine';
/**
 * Try to detect a local intent from the user's message.
 * Returns a synthetic ChatResponse if detected, or null to fall through to the LLM.
 */
export declare function detectLocalIntent(message: string): ChatResponse | null;
