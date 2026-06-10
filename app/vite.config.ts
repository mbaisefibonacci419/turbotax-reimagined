import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  // Serve the full client asset set (irs-forms, state-forms, icons, tesseract-data,
  // ej2-pdfviewer-lib) from the client package. Without this, requests like
  // /irs-forms/f1040.pdf fall back to index.html (HTTP 200) and the PDF viewer
  // silently receives HTML instead of a PDF — Forms mode renders blank.
  publicDir: path.resolve(__dirname, "../packages/client/public"),
  resolve: {
    alias: {
      "@nimbo-tt/shell": path.resolve(__dirname, "../packages/shell"),
      "@tax/client": path.resolve(__dirname, "../packages/client"),
      "@nimbus/engine": path.resolve(__dirname, "../packages/shared/src"),
    },
  },
  server: {
    port: 5174,
    proxy: {
      "/api": {
        target: "http://localhost:3001",
        changeOrigin: true,
      },
    },
  },
});
