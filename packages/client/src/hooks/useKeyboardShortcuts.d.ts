/**
 * Global Keyboard Shortcuts
 *
 * Centralized handler for all app-wide keyboard shortcuts.
 * Individual shortcuts (⌘K in useCommandPalette, ⌘J in NimbusAIButton)
 * remain in their own hooks/components for now — this hook handles the
 * new navigation and utility shortcuts.
 *
 * Shortcuts:
 *   ⌘ Enter       Next step
 *   ⌘ ⇧ Enter     Previous step
 *   ⌘ \           Toggle Interview / Forms view
 *   ⌘ S           Visual save confirmation
 *   ?             Show keyboard shortcuts help (when not in an input)
 */
export declare function useKeyboardShortcuts(): {
    helpOpen: boolean;
    openHelp: () => void;
    closeHelp: () => void;
};
