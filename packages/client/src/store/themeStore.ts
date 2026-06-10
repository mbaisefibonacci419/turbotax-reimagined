import { create } from 'zustand';

export type ThemeMode = 'light' | 'dark';

interface ThemeState {
  mode: ThemeMode;
  setMode: (mode: ThemeMode) => void;
  toggle: () => void;
}

function applyMode(_mode: ThemeMode) {
  const root = document.documentElement;
  root.classList.remove('light', 'dark');
  root.classList.add('light');

  const metaTheme = document.querySelector('meta[name="theme-color"]');
  if (metaTheme) {
    metaTheme.setAttribute('content', '#FFFFFF');
  }

  swapSyncfusionTheme('light');
}

function swapSyncfusionTheme(_mode: ThemeMode) {
  const id = 'syncfusion-theme';
  let link = document.getElementById(id) as HTMLLinkElement | null;
  const href = '/syncfusion-tailwind.css';
  if (link) {
    if (link.getAttribute('href') !== href) link.setAttribute('href', href);
  } else {
    link = document.createElement('link');
    link.id = id;
    link.rel = 'stylesheet';
    link.href = href;
    document.head.appendChild(link);
  }
}

export const useThemeStore = create<ThemeState>((set, get) => {
  if (typeof window !== 'undefined') applyMode('light');

  return {
    mode: 'light',
    setMode: (mode) => {
      applyMode(mode);
      set({ mode });
    },
    toggle: () => {
      // No-op: TurboTax is light-only
    },
  };
});
