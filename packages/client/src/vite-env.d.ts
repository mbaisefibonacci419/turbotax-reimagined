/// <reference types="vite/client" />

interface ImportMetaEnv {
  /** Base URL for the backend API. Leave empty in production for same-origin requests. */
  readonly VITE_API_BASE?: string;
  /** Syncfusion community license key (inlined at build time). */
  readonly VITE_SYNCFUSION_LICENSE_KEY?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
