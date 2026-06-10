/**
 * Step Link Injector — auto-converts step/section references in chat messages
 * into clickable markdown links that navigate to wizard steps or open tools.
 *
 * Uses fragment URLs (`#step--step_id` / `#tool--tool_id`) instead of a custom
 * protocol because rehype-sanitize strips URLs with unrecognized protocols.
 * Fragment-only URLs have no protocol, so they always pass sanitization.
 *
 * LLMs don't reliably emit navigation links inside JSON strings, so we
 * post-process their output on the client. This is model-agnostic.
 *
 * Strategy:
 * 1. Patterns are ordered longest-first to avoid partial matches
 * 2. Every occurrence is linked (not just the first) for comprehensive navigation
 * 3. Skip text already inside markdown links or code blocks
 * 4. Process one pattern at a time, replacing all matches before moving to next
 */
/** Fragment prefix used for step navigation links. */
export declare const STEP_LINK_PREFIX = "#step--";
/** Fragment prefix used for tool panel links (Audit Risk, Calendar, etc.). */
export declare const TOOL_LINK_PREFIX = "#tool--";
/**
 * Inject navigation links into a chat message for recognized references.
 * Links every occurrence so users can click any reference.
 *
 * Uses fragment URLs (#step--id / #tool--id) so rehype-sanitize never strips them.
 */
export declare function injectStepLinks(message: string): string;
