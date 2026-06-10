/**
 * SSN utility functions.
 *
 * Full 9-digit SSNs are stored encrypted at rest. These helpers handle
 * formatting, masking, and validation for display and form-filling.
 */
/** Format a raw 9-digit SSN as XXX-XX-XXXX */
export declare function formatSSN(ssn: string): string;
/** Mask an SSN, showing only the last 4 digits: ***-**-XXXX */
export declare function maskSSN(ssn: string): string;
/** Validate that a value is exactly 9 digits */
export declare function isValidSSN(value: string): boolean;
/**
 * Get a display-ready SSN string.
 * - If full SSN available: formatted XXX-XX-XXXX
 * - If only last 4: XXX-XX-{last4}
 * - Otherwise: em dash
 */
export declare function getDisplaySSN(ssn?: string, ssnLastFour?: string): string;
