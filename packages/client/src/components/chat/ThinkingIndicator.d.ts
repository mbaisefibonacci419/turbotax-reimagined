/**
 * Thinking Indicator — shows contextual "reasoning" steps while the AI is working.
 *
 * Replaces the generic bouncing dots with tax-specific thinking steps that
 * accumulate over time, giving users a sense of progress. Steps are picked
 * based on the user's message content and current wizard section.
 *
 * Steps are simulated (not streamed from the model) but contextually accurate —
 * they reflect the kind of analysis the model is actually performing.
 */
interface Props {
    /** The user's last message, used to pick contextual steps. */
    userMessage?: string;
    /** Current wizard section (income, deductions, credits, etc.). */
    section?: string;
}
export default function ThinkingIndicator({ userMessage, section }: Props): import("react").JSX.Element;
export {};
