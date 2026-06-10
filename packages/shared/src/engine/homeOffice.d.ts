import { HomeOfficeInfo, HomeOfficeResult } from '../types/index.js';
/**
 * Calculate home office deduction using either simplified or actual method.
 *
 * **Simplified**: $5/sqft, max 300 sqft = $1,500 max (Rev. Proc. 2013-13).
 *
 * **Actual (Form 8829)**: Implements the IRS three-tier cascading deduction
 * limit with a gross income limitation:
 *
 *   Tier 1 — Mortgage interest, real estate taxes, casualty losses
 *            (always deductible — would be on Schedule A anyway)
 *   Tier 2 — Operating expenses (insurance, utilities, repairs, rent, etc.)
 *            (limited to remaining gross income after Tier 1)
 *   Tier 3 — Depreciation + excess casualty losses
 *            (limited to remaining gross income after Tiers 1 & 2)
 *
 * Disallowed amounts carry forward to the next tax year.
 *
 * @authority
 *   IRC: Section 280A(c) — home office deduction
 *   Rev. Proc: 2013-13 — simplified method for home office deduction
 *   Form: Form 8829 — Expenses for Business Use of Your Home
 *   Pub: Publication 587 — Business Use of Your Home
 * @scope Full Form 8829 cascade (simplified + actual with 3-tier limit)
 */
export declare function calculateHomeOfficeDeduction(homeOffice: HomeOfficeInfo, tentativeProfit: number): number;
/**
 * Calculate home office deduction with full Form 8829 detail.
 * Returns a HomeOfficeResult with tier breakdowns, depreciation, and carryovers.
 */
export declare function calculateHomeOfficeDetailed(homeOffice: HomeOfficeInfo, tentativeProfit: number): HomeOfficeResult;
/**
 * Compare both methods and return the results for UI display.
 *
 * @authority
 *   IRC: Section 280A(c) — home office deduction
 *   Rev. Proc: 2013-13 — simplified method for home office deduction
 *   Form: Form 8829
 */
export declare function compareHomeOfficeMethods(homeOfficeOrSqft: HomeOfficeInfo | number, totalHomeSquareFeetOrProfit: number, actualExpensesOrUndef?: number, tentativeProfitOrUndef?: number): {
    simplified: number;
    actual: number;
};
