/**
 * AI Settings Store — persisted Zustand store for AI mode preferences.
 *
 * Manages the user's AI mode selection (Private/BYOK), Anthropic API key,
 * model choice, and consent state.
 *
 * Security:
 *   - BYOK API keys are encrypted at rest using the vault passphrase (AES-256-GCM).
 *   - The encrypted blob is stored in localStorage['nimbus:ai-key-enc'].
 *   - The decrypted key is held in memory only while the vault is unlocked.
 *   - On lock, the in-memory key is cleared.
 *   - Keys are not persisted on our servers. For requests that use your own key,
 *     it is sent in the HTTPS body only for that call. When using a server-managed key,
 *     the client omits apiKey and the server uses ANTHROPIC_API_KEY — the browser never sees it.
 */
import type { AIMode, AISettings } from '@nimbus/engine';
interface AISettingsState extends AISettings {
    _decryptedApiKey: string;
    /** Whether GET /api/chat/status reported a server-side API key (refreshed on unlock). */
    serverKeyAvailable: boolean;
    setMode: (mode: AIMode) => void;
    setBYOKApiKey: (key: string) => void;
    setBYOKModel: (model: string) => void;
    setUseServerKey: (value: boolean) => void;
    clearBYOKKey: () => void;
    saveApiKeyEncrypted: (key: string) => Promise<void>;
    loadApiKey: () => Promise<void>;
    clearDecryptedKey: () => void;
    /** Probe server for ANTHROPIC_API_KEY; updates serverKeyAvailable and BYOK readiness. */
    checkServerKey: () => Promise<void>;
    acceptCloudConsent: () => void;
    revokeCloudConsent: () => void;
    resetToDefaults: () => void;
}
export declare const useAISettingsStore: import("zustand").UseBoundStore<Omit<import("zustand").StoreApi<AISettingsState>, "setState" | "persist"> & {
    setState(partial: AISettingsState | Partial<AISettingsState> | ((state: AISettingsState) => AISettingsState | Partial<AISettingsState>), replace?: false | undefined): unknown;
    setState(state: AISettingsState | ((state: AISettingsState) => AISettingsState), replace: true): unknown;
    persist: {
        setOptions: (options: Partial<import("zustand/middleware").PersistOptions<AISettingsState, any, unknown>>) => void;
        clearStorage: () => void;
        rehydrate: () => Promise<void> | void;
        hasHydrated: () => boolean;
        onHydrate: (fn: (state: AISettingsState) => void) => () => void;
        onFinishHydration: (fn: (state: AISettingsState) => void) => () => void;
        getOptions: () => Partial<import("zustand/middleware").PersistOptions<AISettingsState, any, unknown>>;
    };
}>;
export {};
