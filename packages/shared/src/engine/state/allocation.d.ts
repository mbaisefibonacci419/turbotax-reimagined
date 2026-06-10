import { TaxReturn, CalculationResult, StateReturnConfig } from '../../types/index.js';
/**
 * State Income Allocation — Part-Year and Nonresident Filers
 *
 * Determines the portion of federal AGI that is taxable in a given state
 * based on residency type:
 *
 *   - **Resident**: All income taxable (no allocation needed)
 *   - **Part-year**: Prorated by days: allocatedAGI = federalAGI × (daysLivedInState / daysInYear)
 *   - **Nonresident**: Only state-source income is taxable (W-2 wages for that state,
 *     rental income in state, business income with nexus)
 *
 * @authority
 *   IRC: Various — state income tax is governed by individual state statutes
 *   Uniform: UDITPA §§ 3-8 — Uniform Division of Income for Tax Purposes Act
 *   Common state rules: NY IT-203, CA 540NR, NJ-1040NR
 * @scope Part-year proration, nonresident source income, credit for taxes paid to other states
 * @limitations Simplified model — does not handle state-specific allocation nuances
 */
export interface StateIncomeAllocation {
    /** State-taxable portion of federal AGI */
    allocatedAGI: number;
    /** For part-year: days/daysInYear; for nonresident: source/total; for resident: 1.0 */
    allocationRatio: number;
    /** W-2 wages from this state (W-2 Box 15 matches state) */
    sourceWages: number;
    /** Schedule C/K-1 business income attributable to state (override or estimate) */
    sourceBusinessIncome: number;
    /** Rental income from property located in state (override) */
    sourceRentalIncome: number;
    /** Other state-source income (override) */
    sourceOtherIncome: number;
}
/**
 * Allocate income to a state based on residency type.
 *
 * For residents, returns full federal AGI with ratio 1.0.
 * For part-year filers, prorates by days lived in state.
 * For nonresidents, sums state-source income only.
 */
export declare function allocateStateIncome(taxReturn: TaxReturn, federalResult: CalculationResult, config: StateReturnConfig): StateIncomeAllocation;
/**
 * Calculate credit for taxes paid to another state (for resident state returns).
 *
 * When a resident pays tax to another state as a nonresident, the resident state
 * typically allows a credit equal to the lesser of:
 *   (a) Tax actually paid to the other state, or
 *   (b) Resident state tax × (other-state income / total income)
 *
 * This prevents double taxation of the same income.
 */
export declare function calculateOtherStateCredit(residentStateTax: number, otherStateTaxPaid: number, otherStateIncome: number, totalIncome: number): number;
