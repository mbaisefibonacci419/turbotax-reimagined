import clientConfig from "../packages/client/tailwind.config.js";

/** @type {import('tailwindcss').Config} */
export default {
  ...clientConfig,
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "../packages/client/src/**/*.{js,ts,jsx,tsx}",
  ],
};
