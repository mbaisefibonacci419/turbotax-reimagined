/**
 * Smart Expense Scanner — top-level tool view.
 *
 * Streamlined flow for BYOK users:
 *   upload → setup → scanning → results
 *
 * No intermediate pattern scan step — the AI does all the work,
 * with deterministic gates applied as cross-validation.
 *
 * Private mode: shows a message explaining that AI is required.
 */
export default function ExpenseScannerToolView(): import("react").JSX.Element;
