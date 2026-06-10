/**
 * Hook: attach to a container ref to enable right-click → "Ask NimbusAI" on any element.
 * Returns a portal element to render in the component tree.
 */
export declare function useContextExplainer(containerRef: React.RefObject<HTMLElement | null>): import("react").ReactPortal | null;
