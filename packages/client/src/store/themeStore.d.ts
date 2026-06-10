export type ThemeMode = 'light' | 'dark';
interface ThemeState {
    mode: ThemeMode;
    setMode: (mode: ThemeMode) => void;
    toggle: () => void;
}
export declare const useThemeStore: import("zustand").UseBoundStore<import("zustand").StoreApi<ThemeState>>;
export {};
