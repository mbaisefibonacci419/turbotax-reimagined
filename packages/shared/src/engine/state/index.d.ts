/**
 * State Tax Engine — Entry point.
 *
 * Calculates state income tax for each state the taxpayer files in.
 * Uses the federal CalculationResult as the starting point, then applies
 * state-specific modifications (additions, subtractions, brackets, credits).
 *
 * For part-year and nonresident filers, income is allocated before passing
 * to individual state calculators. Resident states may receive a credit for
 * taxes paid to other states (two-pass approach: nonresident first, then resident).
 */
import { TaxReturn, CalculationResult, StateCalculationResult, FilingStatus, StateTaxBracket, StateBracketDetail } from '../../types/index.js';
/**
 * Calculate state taxes for all states in the taxpayer's stateReturns array.
 *
 * Uses a two-pass approach:
 *   Pass 1: Calculate nonresident and part-year states (allocated income)
 *   Pass 2: Calculate resident states with credit for taxes paid to other states
 */
export declare function calculateStateTaxes(taxReturn: TaxReturn, federalResult: CalculationResult): StateCalculationResult[];
/**
 * Apply progressive tax brackets.
 */
export declare function applyBrackets(taxableIncome: number, brackets: StateTaxBracket[]): {
    tax: number;
    details: StateBracketDetail[];
};
/**
 * Sum state withholding from all income forms for a given state:
 * W-2 Box 17, W-2G Box 15, 1099-MISC Box 16, 1099-NEC Box 7,
 * 1099-R Box 14, 1099-G Box 11, 1099-INT Box 17, 1099-DIV Box 16.
 */
export declare function getStateWithholding(taxReturn: TaxReturn, stateCode: string): number;
/**
 * Get the filing status key used for state bracket/deduction lookups.
 * Most states use similar categories to federal, but map to simplified keys.
 */
export declare function getStateFilingKey(filingStatus: FilingStatus | undefined): string;
export declare function getStateName(code: string): string;
export declare function getAllStates(): {
    code: string;
    name: string;
    hasIncomeTax: boolean;
}[];
