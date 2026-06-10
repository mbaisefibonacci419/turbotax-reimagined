/**
 * Keyboard Shortcuts Help Modal
 *
 * Shows all available keyboard shortcuts, organized by category.
 * Opened via ? key or from the command palette.
 * Matches the command palette's visual style.
 */
interface Props {
    open: boolean;
    onClose: () => void;
}
export default function KeyboardShortcutsModal({ open, onClose }: Props): import("react").JSX.Element | null;
export {};
