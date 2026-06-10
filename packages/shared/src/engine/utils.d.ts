/**
 * Shared Engine Utilities
 *
 * Common helper functions used across multiple tax calculation modules.
 * Consolidated to eliminate duplication and ensure consistent rounding behavior.
 */
/**
 * Round a number to two decimal places (cents).
 * Used throughout the tax engine for dollar-amount rounding.
 *
 * Uses Math.round (round half away from zero for .5) which matches
 * IRS rounding convention for tax calculations.
 */
export declare function round2(n: number): number;
/**
 * Parse a date string into { year, month (0-based), day } without relying on
 * `new Date(string)` which is locale/browser-dependent for date-only strings.
 *
 * Accepts "YYYY-MM-DD", "YYYY/MM/DD", and ISO 8601 ("YYYY-MM-DDTHH:mm…").
 * Returns null if the string cannot be parsed.
 */
/**
 * Immutably set a value at a dot-notation path in an object.
 * Creates missing intermediary objects along the path.
 *
 * Example: setDeepPath({ a: { b: 1 } }, 'a.c', 2) => { a: { b: 1, c: 2 } }
 *
 * Does not handle array bracket syntax — array updates should use
 * full-array replacement (existing pattern used by wizard steps).
 */
export declare function setDeepPath<T extends Record<string, unknown>>(obj: T, path: string, value: unknown): T;
export declare function parseDateString(dateStr: string): {
    year: number;
    month: number;
    day: number;
} | null;
