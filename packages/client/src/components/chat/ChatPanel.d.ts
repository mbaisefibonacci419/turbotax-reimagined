/**
 * Chat Panel — right drawer containing the full chat experience.
 *
 * Slides in from the right edge. Contains:
 * - Header with title, mode indicator, settings gear, and close button
 * - Privacy disclaimer (first open only, mode-aware)
 * - PII warning banner (when PII detected in cloud modes)
 * - Scrollable message area with auto-scroll
 * - Loading indicator (pulsing dots)
 * - Error display
 * - Sticky input at bottom
 */
interface ChatPanelProps {
    panelWidth?: number;
    isDragging?: boolean;
    onResizeStart?: (e: React.MouseEvent | React.TouchEvent) => void;
    onResizeReset?: () => void;
    topOffset?: number;
    /** When true, renders as inline content instead of a fixed right drawer. Used by AgentLayout. */
    embedded?: boolean;
}
export default function ChatPanel({ panelWidth, isDragging, onResizeStart, onResizeReset, topOffset, embedded }: ChatPanelProps): import("react").JSX.Element;
export {};
