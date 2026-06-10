/**
 * ZIP code / state mismatch validation.
 *
 * Uses USPS ZIP-3 prefix ranges to detect when a user's ZIP code
 * doesn't match their selected state. Returns a warning (not error)
 * since edge cases exist at state borders.
 *
 * Entirely client-side — no network calls. Works offline.
 */
/**
 * Validate that a ZIP code and state are consistent.
 * Returns a warning message if they appear mismatched, undefined if OK.
 */
export declare function validateZipStateMatch(zip: string | undefined, state: string | undefined): string | undefined;
