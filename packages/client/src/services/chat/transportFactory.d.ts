/**
 * Transport Factory
 *
 * Creates and caches ChatTransport instances based on the user's AI settings.
 * The factory ensures only one transport instance exists per configuration,
 * disposing old instances when settings change.
 *
 * Private mode has no transport — AI chat is unavailable.
 * BYOK mode uses the Anthropic cloud transport.
 */
import type { AISettings } from '@nimbus/engine';
import type { ChatTransport } from './types';
/**
 * Get or create the ChatTransport for the current AI settings.
 * Returns null for Private mode (no LLM available).
 */
export declare function getTransport(settings: AISettings): ChatTransport | null;
/**
 * Dispose the current transport and clear the cache.
 * Call when the user changes AI mode or signs out.
 */
export declare function disposeTransport(): void;
