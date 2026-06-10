/**
 * useResizePanel — drag-to-resize hook for vertical panel dividers.
 *
 * Handles mousedown/mousemove/mouseup on a divider element to resize a panel.
 * Persists width to localStorage. Supports collapse threshold and double-click reset.
 * Only active on desktop (lg breakpoint, ≥1024px).
 */
interface UseResizePanelOptions {
    storageKey: string;
    defaultWidth: number;
    minWidth: number;
    maxWidth: number;
    /** Width below which the panel collapses to 0. Set to 0 to disable collapse. */
    collapseThreshold?: number;
    /** 'left' = sidebar (drag right edge), 'right' = chat panel (drag left edge). */
    side: 'left' | 'right';
}
interface UseResizePanelReturn {
    width: number;
    isCollapsed: boolean;
    isDragging: boolean;
    startResize: (e: React.MouseEvent | React.TouchEvent) => void;
    resetWidth: () => void;
}
export declare function useResizePanel(opts: UseResizePanelOptions): UseResizePanelReturn;
export {};
