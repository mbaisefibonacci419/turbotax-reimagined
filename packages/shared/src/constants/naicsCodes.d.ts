/**
 * NAICS (North American Industry Classification System) codes for Schedule C Line B.
 *
 * This is a curated subset of ~300 NAICS codes most commonly used by sole proprietors,
 * independent contractors, and small businesses filing Schedule C. It is NOT the full
 * NAICS directory (which has 1,000+ entries), but covers the vast majority of real-world
 * sole-proprietor filings.
 *
 * Each entry includes an `isSSTB` flag indicating whether the code falls within a
 * Specified Service Trade or Business (SSTB) category for purposes of the IRC §199A
 * Qualified Business Income deduction. SSTB classifications per IRC §199A(d)(2) and
 * Treas. Reg. §1.199A-5:
 *   - Health care
 *   - Law
 *   - Accounting
 *   - Actuarial science
 *   - Performing arts
 *   - Consulting
 *   - Athletics
 *   - Financial services / brokerage
 *   - Any trade or business where the principal asset is the reputation or skill of employees/owners
 *
 * Note: "Consulting" SSTB status under §199A is narrower than NAICS consulting codes.
 * Engineering, architecture, and similar technical services are NOT SSTB even if advisory.
 * We mark codes as SSTB only when they clearly fall within the regulatory definition.
 *
 * @authority
 *   IRC: Section 199A(d)(2) — SSTB definition
 *   Treas. Reg: §1.199A-5 — SSTB safe harbors and categories
 *   IRS: Schedule C Instructions — Principal Business or Professional Activity Codes
 */
export interface NAICSEntry {
    code: string;
    description: string;
    isSSTB: boolean;
}
export declare const NAICS_CODES: NAICSEntry[];
/**
 * Lookup a NAICS entry by its 6-digit code.
 * Returns undefined if the code is not in the curated list.
 */
export declare function findNAICSByCode(code: string): NAICSEntry | undefined;
/**
 * Search NAICS codes by description (case-insensitive substring match).
 * Returns all entries whose description contains the search term.
 */
export declare function searchNAICS(query: string): NAICSEntry[];
