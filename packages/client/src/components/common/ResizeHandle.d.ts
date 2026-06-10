/**
 * ResizeHandle — draggable vertical divider between panels.
 *
 * Thin grab bar (6px hit area, 2px visible line) with hover/active feedback.
 * Hidden on mobile (below lg breakpoint). Double-click to reset panel width.
 */
interface ResizeHandleProps {
    isDragging: boolean;
    onMouseDown: (e: React.MouseEvent | React.TouchEvent) => void;
    onDoubleClick: () => void;
}
export default function ResizeHandle({ isDragging, onMouseDown, onDoubleClick }: ResizeHandleProps): import("react").JSX.Element;
export {};
