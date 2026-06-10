/**
 * Simplified Method Worksheet — Taxable Portion of Pension/Annuity
 *
 * Used when a 1099-R has a gross distribution but the taxable amount is
 * not determined by the payer (Box 2a is blank or "unknown"). The IRS
 * Simplified Method (Pub 939 / Form 1040 instructions) computes the
 * tax-free portion based on after-tax contributions and expected payments.
 *
 * @authority
 *   IRC §72 — Annuities; certain proceeds of endowment and life insurance
 *   IRS Pub 939 — General Rule for Pensions and Annuities
 *   Form 1040 Instructions — Simplified Method Worksheet
 * @scope Single-life and joint-and-survivor annuities with annuity start dates after Nov 18, 1996
 * @limitations Does not handle pre-Nov 1996 annuity start dates (which use the General Rule per Pub 939)
 */
export interface SimplifiedMethodInput {
    /** Gross monthly pension/annuity payment (Box 1 ÷ number of payments in year) */
    monthlyPayment: number;
    /** Total after-tax (non-deductible) contributions to the plan — employer plan records */
    totalContributions: number;
    /** Age of the primary annuitant at annuity start date */
    ageAtStartDate: number;
    /** Is this a joint-and-survivor annuity? */
    isJointAndSurvivor: boolean;
    /** For joint-and-survivor: combined ages of annuitant and beneficiary at start date */
    combinedAge?: number;
    /** Number of payments received this tax year (typically 12 for full year) */
    paymentsThisYear: number;
    /** Total tax-free amount already recovered in prior years (from prior worksheets) */
    priorYearTaxFreeRecovery?: number;
}
export interface SimplifiedMethodResult {
    /** Expected number of payments from IRS table */
    expectedPayments: number;
    /** Tax-free portion of each payment */
    taxFreePerPayment: number;
    /** Total tax-free amount for this year */
    taxFreeThisYear: number;
    /** Taxable amount for this year (= gross payments − tax-free amount) */
    taxableAmount: number;
    /** Remaining cost basis to recover in future years */
    remainingBasis: number;
    /** Total gross payments received this year */
    grossPaymentsThisYear: number;
}
/**
 * Calculate the taxable portion of a pension/annuity using the IRS Simplified Method.
 *
 * Worksheet Steps (per Form 1040 instructions):
 * 1. Enter total pension received this year (monthly × paymentsThisYear)
 * 2. Enter cost (total after-tax contributions)
 * 3. Look up expected number of payments from IRS table
 * 4. Tax-free per payment = cost ÷ expected payments
 * 5. Tax-free this year = tax-free per payment × paymentsThisYear
 * 6. Taxable = gross − tax-free
 *
 * Once the full cost has been recovered, all subsequent payments are fully taxable.
 */
export declare function calculateSimplifiedMethod(input: SimplifiedMethodInput): SimplifiedMethodResult;
