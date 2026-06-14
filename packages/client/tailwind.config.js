/** @type {import('tailwindcss').Config} */
import colors from 'tailwindcss/colors';

function cssVar(name) {
  return `rgb(var(--${name}) / <alpha-value>)`;
}

/**
 * Light-theme readability fix.
 *
 * Many components use the light pastel text shades (200/300) of semantic color
 * scales (e.g. `text-amber-300`, `text-emerald-300`) which were designed for a
 * dark surface. On this light-only canvas those shades are nearly invisible.
 *
 * `readableText` spreads the full default Tailwind palette — so solid fills and
 * borders that rely on the 400/500/600 shades keep working — and overrides only
 * the 200/300 shades with an accessible-on-white color (WCAG AA for body text).
 */
function readableText(base, textColor) {
  return { ...base, 200: textColor, 300: textColor };
}

// Accessible-on-white text colors per semantic family (≥ 4.5:1 contrast).
const TEXT = {
  warn: '#b45309',    // amber-700
  success: '#047857', // emerald-700
  danger: '#b91c1c',  // red-700
  info: '#1d4ed8',    // blue-700
  indigo: '#4338ca',
  violet: '#6d28d9',
};

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        slate: {
          50:  cssVar('slate-50'),
          100: cssVar('slate-100'),
          200: cssVar('slate-200'),
          300: cssVar('slate-300'),
          400: cssVar('slate-400'),
          500: cssVar('slate-500'),
          600: cssVar('slate-600'),
          700: cssVar('slate-700'),
          800: cssVar('slate-800'),
          900: cssVar('slate-900'),
          950: cssVar('slate-950'),
        },
        surface: {
          900: cssVar('surface-900'),
          800: cssVar('surface-800'),
          700: cssVar('surface-700'),
          600: cssVar('surface-600'),
        },
        primary: {
          50:  cssVar('primary-50'),
          100: cssVar('primary-100'),
          200: cssVar('primary-200'),
          300: cssVar('primary-300'),
          400: cssVar('primary-400'),
          500: cssVar('primary-500'),
          600: cssVar('primary-600'),
          700: cssVar('primary-700'),
          800: cssVar('primary-800'),
          900: cssVar('primary-900'),
        },
        'telos-orange': {
          50:  cssVar('primary-50'),
          100: cssVar('primary-100'),
          200: cssVar('primary-200'),
          300: cssVar('primary-300'),
          400: cssVar('primary-400'),
          500: cssVar('primary-500'),
          600: cssVar('primary-600'),
          700: cssVar('primary-700'),
          800: cssVar('primary-800'),
          900: cssVar('primary-900'),
        },
        'telos-blue': {
          50:  cssVar('primary-50'),
          100: cssVar('primary-100'),
          200: cssVar('primary-200'),
          300: cssVar('primary-300'),
          400: cssVar('primary-400'),
          500: cssVar('primary-500'),
          600: cssVar('primary-600'),
          700: cssVar('primary-700'),
          800: cssVar('primary-800'),
          900: cssVar('primary-900'),
        },
        'nimbus-emerald': {
          400: cssVar('success-400'),
          500: cssVar('success-500'),
          600: cssVar('success-600'),
        },
        'nimbus-violet': {
          50:  cssVar('primary-50'),
          100: cssVar('primary-100'),
          200: cssVar('primary-200'),
          300: cssVar('primary-300'),
          400: cssVar('primary-400'),
          500: cssVar('primary-500'),
          600: cssVar('primary-600'),
          700: cssVar('primary-700'),
          800: cssVar('primary-800'),
          900: cssVar('primary-900'),
        },
        telos: {
          orange: {
            50:  cssVar('primary-50'),
            100: cssVar('primary-100'),
            200: cssVar('primary-200'),
            300: cssVar('primary-300'),
            400: cssVar('primary-400'),
            500: cssVar('primary-500'),
            600: cssVar('primary-600'),
            700: cssVar('primary-700'),
            800: cssVar('primary-800'),
            900: cssVar('primary-900'),
          },
          blue: {
            50:  cssVar('primary-50'),
            100: cssVar('primary-100'),
            200: cssVar('primary-200'),
            300: cssVar('primary-300'),
            400: cssVar('primary-400'),
            500: cssVar('primary-500'),
            600: cssVar('primary-600'),
            700: cssVar('primary-700'),
            800: cssVar('primary-800'),
            900: cssVar('primary-900'),
          },
        },
        success: {
          400: cssVar('success-400'),
          500: cssVar('success-500'),
          600: cssVar('success-600'),
        },
        emerald: {
          ...colors.emerald,
          200: TEXT.success,
          300: TEXT.success,
          400: cssVar('success-400'),
          500: cssVar('success-500'),
          600: cssVar('success-600'),
        },
        green: readableText(colors.green, TEXT.success),
        teal: readableText(colors.teal, TEXT.success),
        warning: {
          400: cssVar('warning-400'),
          500: cssVar('warning-500'),
          600: cssVar('warning-600'),
        },
        amber: {
          ...colors.amber,
          200: TEXT.warn,
          300: TEXT.warn,
          400: cssVar('warning-400'),
          500: cssVar('warning-500'),
          600: cssVar('warning-600'),
        },
        yellow: readableText(colors.yellow, TEXT.warn),
        orange: readableText(colors.orange, TEXT.warn),
        red: readableText(colors.red, TEXT.danger),
        rose: readableText(colors.rose, TEXT.danger),
        sky: readableText(colors.sky, TEXT.info),
        blue: readableText(colors.blue, TEXT.info),
        indigo: readableText(colors.indigo, TEXT.indigo),
        violet: readableText(colors.violet, TEXT.violet),
        purple: readableText(colors.purple, TEXT.violet),
        alert: {
          warn: {
            bg:      cssVar('alert-warn-bg'),
            border:  cssVar('alert-warn-border'),
            text:    cssVar('alert-warn-text'),
            icon:    cssVar('alert-warn-icon'),
            dismiss: cssVar('alert-warn-dismiss'),
            body:    cssVar('alert-warn-body'),
          },
          nudge: {
            bg:     cssVar('alert-nudge-bg'),
            border: cssVar('alert-nudge-border'),
            text:   cssVar('alert-nudge-text'),
            body:   cssVar('alert-nudge-body'),
            icon:   cssVar('alert-nudge-icon'),
          },
        },
      },
      fontSize: {
        xxs: ['0.625rem', { lineHeight: '0.875rem' }],
        '2xs': ['0.6875rem', { lineHeight: '1rem' }],
      },
      fontFamily: {
        sans: ['AvenirNext forINTUIT', 'Avenir Next', 'Avenir', 'system-ui', '-apple-system', 'sans-serif'],
      },
      maxWidth: {
        wizard: '720px',
      },
    },
  },
  plugins: [],
};
