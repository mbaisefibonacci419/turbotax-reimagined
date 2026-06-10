/**
 * Contextual Starter Prompts — suggested questions shown when the chat is empty.
 *
 * Prompts are resolved by: exact step/tool ID → section fallback → global default.
 * Keep prompts short (fits in narrow chat panel), actionable, and relevant to what
 * the user is currently looking at.
 */
/** Prompts for a given step or section. */
export interface StarterPromptSet {
    prompts: string[];
}
/**
 * Nudge-derived prompt (from the proactive nudge system).
 * When active nudges exist, their chat prompts are shown first
 * so the user can ask about unclaimed benefits with one click.
 */
export interface NudgePrompt {
    prompt: string;
    /** Benefit amount for display, e.g. "$4,400" */
    benefitLabel?: string;
}
/**
 * Resolve starter prompts for the current step/tool.
 * Priority: nudge prompts (if any) → tool ID → step ID → section → global default.
 *
 * When nudges are active, up to 2 nudge-derived prompts are prepended,
 * replacing the least-relevant static prompts to keep the total at 3.
 */
export declare function getStarterPrompts(stepId: string, section: string, nudgePrompts?: NudgePrompt[]): string[];
/**
 * Get the single best "Guide Me" prompt for the current step.
 * Used by the floating Nimbus AI button.
 *
 * If a step has a custom prompt, use it. Otherwise, generate a
 * context-aware prompt using the step label so the AI always gets
 * a specific question rather than a generic section fallback.
 */
export declare function getGuidePrompt(stepId: string, section: string, stepLabel?: string): string;
