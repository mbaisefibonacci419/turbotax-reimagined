/**
 * Recalculates the tax estimate whenever the tax return data changes.
 * Only runs if there's at least some income entered.
 *
 * Debounced at 150ms to avoid recalculating on every keystroke during
 * rapid data entry (e.g., typing a dollar amount in CurrencyInput).
 *
 * Tracing is always enabled — overhead is negligible (~9 trace objects)
 * and traces are consumed by ExplainTaxesPanel, ReviewForm1040Step,
 * and TaxSummaryStep via the Zustand store.
 */
export declare function useLiveCalculation(): void;
