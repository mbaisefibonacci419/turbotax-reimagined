import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Toaster } from 'sonner';
import { registerLicense } from '@syncfusion/ej2-base';
import '@fontsource-variable/inter';
import App from './App';
import { useThemeStore } from './store/themeStore';
import { suppressSyncfusionLicense } from './utils/suppressSyncfusionLicense';
import './styles/globals.css';

// Block Syncfusion's unlicensed banner/modal before any chart component mounts.
suppressSyncfusionLicense();

const sfKey = import.meta.env.VITE_SYNCFUSION_LICENSE_KEY;
if (sfKey) registerLicense(sfKey);

function ThemedToaster() {
  const mode = useThemeStore((s) => s.mode);
  const isDark = mode === 'dark';
  return (
    <Toaster
      position="top-right"
      theme={mode}
      toastOptions={{
        style: {
          background: isDark ? '#1C1C1F' : '#FAFBFC',
          border: `1px solid ${isDark ? '#2C2C31' : '#D8D9DE'}`,
          color: isDark ? '#E2E8F0' : '#18181B',
        },
      }}
    />
  );
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
      <ThemedToaster />
    </BrowserRouter>
  </React.StrictMode>,
);
