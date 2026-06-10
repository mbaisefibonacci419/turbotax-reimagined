import { TaxReturn, HoHValidationResult } from '../types/index.js';
/**
 * Validate Head of Household filing status requirements.
 *
 * IRC §2(b) requires ALL of the following:
 *   1. Unmarried (or "considered unmarried") at end of tax year
 *   2. Paid more than half the cost of maintaining a household for the year
 *   3. A qualifying person lived with the taxpayer for more than half the year
 *
 * Qualifying persons (IRC §2(b)(1)(A)):
 *   - Qualifying child (dependent) who lived with taxpayer > 6 months
 *   - Qualifying relative (dependent parent) — exception: parent need NOT live with taxpayer
 *
 * "Considered unmarried" for MFS:
 *   - Lived apart from spouse for last 6 months of the year (IRC §7703(b))
 *   - Paid > 50% of household costs
 *   - Has qualifying dependent in the home
 *
 * This is a warning/flag approach — validation errors do NOT block the calculation.
 * The caller decides whether to surface these warnings to the user.
 *
 * @authority
 *   IRC: Section 2(b) — definition of head of household
 *   IRC: Section 7703(b) — determination of marital status ("considered unmarried")
 *   Form: Form 1040, Filing Status checkbox
 *   Publication: Pub 501 — Dependents, Standard Deduction, and Filing Information
 * @scope HoH filing status eligibility validation
 * @limitations
 *   Does not verify marital status documentation
 *   Does not model temporary absence rules (e.g., school, illness)
 *   Does not model the parent-not-living-with-you exception for dependent parent
 *   Does not verify actual household costs vs. contributions
 */
export declare function validateHeadOfHousehold(taxReturn: TaxReturn): HoHValidationResult;
