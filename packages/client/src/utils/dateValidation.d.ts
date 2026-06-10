/**
 * Date validation utilities for Nimbus.
 *
 * Provides context-specific validation for different date field types:
 *   - Date of birth (filer, spouse, dependent)
 *   - Transaction sale/disposition dates (should be in the tax year)
 *   - Transaction acquisition dates (must be before sale date)
 *
 * Returns warning messages (amber) rather than errors (red) because
 * edge cases exist — e.g. a corrected form with a prior-year date.
 */
/**
 * Validate a date of birth (filer, spouse, or dependent).
 * - Must not be in the future
 * - Must not be before 1900 (unreasonable)
 */
export declare function validateDateOfBirth(dateStr: string): string | undefined;
/**
 * Validate a transaction sale / disposition date (1099-B, 1099-DA, etc.).
 * - Should be in the current tax year
 * - Must not be in the future
 */
export declare function validateSaleDate(dateStr: string): string | undefined;
/**
 * Validate a transaction acquisition date (when the asset was purchased).
 * - Must not be in the future
 * - If a sale date is provided, acquired date must be on or before it
 */
/**
 * Compute holding period from dates.
 * Long-term = held for more than 1 year (> 365 days, accounting for leap years).
 * Returns null if either date is missing or invalid.
 */
export declare function computeHoldingPeriod(dateAcquired: string, dateSold: string): 'long' | 'short' | null;
/**
 * Validate the holding period selection against the dates.
 * Returns a warning if the user's isLongTerm selection contradicts the dates.
 */
export declare function validateHoldingPeriod(dateAcquired: string, dateSold: string, isLongTerm: boolean): string | undefined;
/**
 * Check if a person is age 65 or older by end of the tax year.
 * IRS rule: you are considered 65 on the day before your 65th birthday.
 */
export declare function isAge65OrOlder(dateOfBirth: string | undefined, taxYear?: number): boolean;
/**
 * Get a person's age at end of the tax year (Dec 31).
 * Returns undefined if DOB is missing or unparseable.
 */
export declare function getAgeAtEndOfYear(dateOfBirth: string | undefined, taxYear?: number): number | undefined;
/**
 * Validate a charitable contribution date (Form 8283, noncash donations).
 * - Must not be in the future
 * - Should be in the current tax year
 * - If an acquisition date is provided, contribution must be on or after it
 */
export declare function validateContributionDate(dateStr: string, dateAcquiredStr?: string): string | undefined;
export declare function validateAcquiredDate(dateStr: string, saleDateStr?: string): string | undefined;
/**
 * Validate a tax-year event date (Form 4797 sale, 1099-C cancellation, etc.).
 * - Must not be in the future
 * - Should be in the current tax year
 */
export declare function validateTaxYearEventDate(dateStr: string): string | undefined;
/**
 * Validate a divorce/separation agreement date.
 * - Must not be in the future
 * - Must not be before 1900 (unreasonable)
 */
export declare function validateDivorceDate(dateStr: string): string | undefined;
/**
 * Validate a spouse date of death.
 * - Must not be in the future
 * - Should be in the current tax year (filing for year of death)
 */
export declare function validateDeathDate(dateStr: string): string | undefined;
/**
 * Validate a "placed in service" or "first used" date.
 * - Must not be in the future
 */
export declare function validatePlacedInServiceDate(dateStr: string): string | undefined;
