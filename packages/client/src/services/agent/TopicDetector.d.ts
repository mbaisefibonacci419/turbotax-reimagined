/**
 * Topic Detector
 *
 * Lightweight keyword-based intent classifier that detects when a user's
 * message is about a different skill than the currently active one.
 * Used by the orchestrator to initiate detours.
 */
/**
 * Check if a user message suggests a different skill than the active one.
 * Returns the target skill ID, or null if no switch detected.
 */
export declare function detectTopicSwitch(message: string, activeSkillId: string | null): string | null;
