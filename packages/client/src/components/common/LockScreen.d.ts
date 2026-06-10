/**
 * Lock Screen — gates access to the app behind a passphrase.
 *
 * Two modes:
 * 1. Setup: First time — user creates a passphrase (with confirmation)
 * 2. Unlock: Subsequent visits — user enters passphrase to decrypt data
 */
interface LockScreenProps {
    mode: 'setup' | 'unlock';
    onUnlock: (passphrase: string) => Promise<boolean>;
    error?: string | null;
    /** When true, renders just the form (no full-page wrapper, no logo). Used inline on Dashboard. */
    inline?: boolean;
}
export default function LockScreen({ mode, onUnlock, error: externalError, inline }: LockScreenProps): import("react").JSX.Element;
export {};
