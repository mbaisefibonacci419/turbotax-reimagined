/**
 * Undo Store — manages snapshots of the tax return state before AI actions are applied.
 *
 * When the user applies actions from the AI assistant, the full TaxReturn is deep-cloned
 * and stored keyed by messageId. If the user clicks "Undo", the snapshot is restored
 * and the message reverts to its unapplied state.
 *
 * Snapshots are session-only (not persisted) and capped at MAX_SNAPSHOTS to prevent
 * unbounded memory growth.
 */
import type { TaxReturn } from '@nimbus/engine';
interface UndoEntry {
    messageId: string;
    snapshot: TaxReturn;
    timestamp: number;
}
interface UndoState {
    entries: UndoEntry[];
    saveSnapshot: (messageId: string, snapshot: TaxReturn) => void;
    getSnapshot: (messageId: string) => TaxReturn | null;
    removeSnapshot: (messageId: string) => void;
    hasSnapshot: (messageId: string) => boolean;
}
export declare const useUndoStore: import("zustand").UseBoundStore<import("zustand").StoreApi<UndoState>>;
export {};
