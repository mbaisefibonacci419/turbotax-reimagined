/**
 * Chat Message Bubble — renders a single user or assistant message.
 *
 * User messages: right-aligned, blue-tinted background, plain text.
 * Assistant messages: left-aligned, surface-700 background, markdown rendered.
 *
 * Assistant messages also show an action bar with:
 * - Thumbs up / down feedback (always visible)
 * - Copy to clipboard (hover-reveal)
 * - Regenerate (only on last assistant message, hidden if actions were applied)
 */
import type { ChatMessageUI } from '../../store/chatStore';
interface Props {
    message: ChatMessageUI;
    isLastAssistant?: boolean;
    onActionsApplied: (messageId: string, summary: string) => void;
    onActionsDismissed: (messageId: string) => void;
    onUndoActions: (messageId: string) => void;
    onFeedback: (messageId: string, feedback: 'up' | 'down') => void;
    onRegenerate: () => void;
    onFollowUp: (text: string) => void;
    onEditAndResend: (messageId: string, newText: string) => void;
    onRetry: (messageId: string) => void;
}
export default function ChatMessage({ message, isLastAssistant, onActionsApplied, onActionsDismissed, onUndoActions, onFeedback, onRegenerate, onFollowUp, onEditAndResend, onRetry, }: Props): import("react").JSX.Element;
export {};
