import { FilingStatus, SaversCreditResult } from '../types/index.js';
/**
 * Eligibility options for the Saver's Credit.
 *
 * IRC §25B(c) disqualifies:
 *   (1) Individuals under age 18 at end of tax year
 *   (2) Full-time students (for 5+ months during the year)
 *   (3) Individuals claimed as a dependent on another return
 */
export interface SaversCreditEligibility {
    dateOfBirth?: string;
    spouseDateOfBirth?: string;
    taxYear: number;
    isFullTimeStudent?: boolean;
    isSpouseFullTimeStudent?: boolean;
    isClaimedAsDependent?: boolean;
}
/**
 * Calculate the Retirement Savings Contributions Credit (Saver's Credit, Form 8880).
 *
 * The credit is a percentage (50%, 20%, 10%, or 0%) of eligible retirement
 * contributions (IRA, 401(k), 403(b), etc.) up to $2,000 ($4,000 MFJ).
 *
 * The rate depends on filing status and AGI:
 *   Filing Status    |   50%        |   20%        |   10%        |   0%
 *   Single/MFS       | ≤ $23,750    | ≤ $25,750    | ≤ $36,500    | > $36,500
 *   HoH              | ≤ $35,625    | ≤ $38,625    | ≤ $54,750    | > $54,750
 *   MFJ/QSS          | ≤ $47,500    | ≤ $51,500    | ≤ $73,000    | > $73,000
 *
 * Eligibility (IRC §25B(c)):
 *   - Must be age 18 or older at end of tax year
 *   - Must not be a full-time student
 *   - Must not be claimed as a dependent on another person's return
 *
 * This is a non-refundable credit.
 *
 * @authority
 *   IRC: Section 25B — elective deferrals and IRA contributions by certain individuals
 *   IRC: Section 25B(c) — eligible individual (age 18+, not student, not dependent)
 *   Rev. Proc: 2024-40, Section 3.06 — saver's credit AGI thresholds
 *   Form: Form 8880
 * @scope Retirement Savings Contributions Credit (50%/20%/10%) with eligibility gating
 * @limitations None
 */
export declare function calculateSaversCredit(contributions: number, agi: number, filingStatus: FilingStatus, eligibility?: SaversCreditEligibility): SaversCreditResult;
