import { TaxReturn, DeceasedSpouseValidationResult } from '../types/index.js';
/**
 * Validate filing status for returns involving a deceased spouse.
 *
 * IRC §6013(a)(2): A joint return may be filed for the year of death.
 * The surviving spouse may file as MFJ for the year the spouse died,
 * reporting all income for both spouses for the full year.
 *
 * IRC §2(a): Qualifying Surviving Spouse (QSS) status is available for
 * the 2 tax years following the year of death, provided:
 *   - The surviving spouse has not remarried
 *   - The surviving spouse maintains a household for a qualifying child
 *   - The surviving spouse was eligible to file a joint return in the year of death
 *
 * This is a non-blocking validation — errors are returned as warnings/errors
 * but do not prevent calculation.
 *
 * @authority
 *   IRC: Section 6013(a)(2) — Joint return with deceased spouse (year of death)
 *   IRC: Section 2(a) — Qualifying surviving spouse (2 years after death)
 *   IRC: Section 6013(d)(1)(B) — Executor may revoke joint return election
 *   Form: Form 1040, Filing Status line
 * @scope Validates MFJ for year of death and QSS for subsequent 2 years
 * @limitations Does not verify remarriage status or executor consent;
 *   relies on user attestation for QSS qualifying child requirement
 */
export declare function validateDeceasedSpouse(taxReturn: TaxReturn): DeceasedSpouseValidationResult;
