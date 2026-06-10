type SaveState = 'idle' | 'saving' | 'saved';
/**
 * A hook that provides auto-save state tracking.
 * Call `markSaving()` when a save begins and `markSaved()` when it completes.
 * The "saved" state auto-clears after 2 seconds back to "idle".
 */
export declare function useSaveIndicator(): {
    saveState: SaveState;
    markSaving: () => void;
    markSaved: () => void;
    markError: () => void;
};
/**
 * Visual save indicator — shows saving/saved/idle states.
 * Place in the top-right of any form step for persistent feedback.
 */
export default function SaveIndicator({ state }: {
    state: SaveState;
}): import("react").JSX.Element;
export {};
