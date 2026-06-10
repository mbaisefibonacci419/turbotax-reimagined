/**
 * Action Preview — shows proposed LLM actions as selectable cards.
 *
 * Each action gets a checkbox so the user can cherry-pick which changes
 * to apply. Defaults to all selected. "Apply Selected" executes only
 * the checked actions; "Dismiss" skips all.
 */
import type { ChatAction } from '@nimbus/engine';
interface Props {
    actions: ChatAction[];
    messageId: string;
    applied: boolean;
    dismissed: boolean;
    summary?: string;
    onApplied: (messageId: string, summary: string) => void;
    onDismissed: (messageId: string) => void;
    onUndo: (messageId: string) => void;
}
export default function ActionPreview({ actions, messageId, applied, dismissed, summary, onApplied, onDismissed, onUndo, }: Props): import("react").JSX.Element;
export {};
