import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "sonner";
import { suppressSyncfusionLicense } from "@tax/client/src/utils/suppressSyncfusionLicense";
import "@tax/client/src/styles/globals.css";
import { App } from "./App";

// Block Syncfusion's unlicensed banner/modal before any chart component mounts.
suppressSyncfusionLicense();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
      <Toaster
        position="top-right"
        theme="light"
        toastOptions={{
          style: {
            background: '#FFFFFF',
            border: '1px solid var(--color-container-border-primary)',
            color: 'var(--color-text-primary)',
            fontFamily: 'var(--font-family-brand)',
          },
        }}
      />
    </BrowserRouter>
  </React.StrictMode>,
);
