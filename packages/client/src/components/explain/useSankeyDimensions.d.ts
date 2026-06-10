/** Returns { ref, width, height } where height scales with node count. */
export declare function useSankeyDimensions(nodeCount: number): {
    ref: import("react").RefObject<HTMLDivElement | null>;
    width: number;
    height: number;
};
