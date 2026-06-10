/** Safe currency formatter — returns "$0" for NaN/undefined/null instead of "$NaN". */
export declare function formatCurrency(value: number | undefined | null): string;
/** Safe percent formatter — returns "0.0%" for NaN/undefined/null. */
export declare function formatPercent(value: number | undefined | null, decimals?: number): string;
