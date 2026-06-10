/**
 * State Calculator Registry — Maps state codes to calculation modules.
 *
 * All 50 states + DC are registered here. States fall into four categories:
 *   1. No-income-tax states (9) — return zero result
 *   2. Flat-tax states (13) — via createFlatTaxCalculator()
 *   3. Progressive-tax states (20) — via createProgressiveTaxCalculator()
 *   4. Custom calculators (9) — CA, NY, NJ, OH, WI, CT, MD, AL, HI
 */
import { TaxReturn, CalculationResult, StateCalculationResult, StateReturnConfig } from '../../types/index.js';
/** Interface that all state calculators implement. */
export interface StateCalculator {
    calculate(taxReturn: TaxReturn, federalResult: CalculationResult, config: StateReturnConfig): StateCalculationResult;
}
/** States with no income tax — immediate zero result. */
export declare const NO_INCOME_TAX_STATES: string[];
/** Flat-tax states — single rate with simple deductions. */
export declare const FLAT_TAX_STATES: string[];
/** Progressive-tax states — graduated brackets via factory. */
export declare const PROGRESSIVE_TAX_STATES: string[];
/**
 * Get the calculator for a state. Returns null if the state isn't implemented yet.
 */
export declare function getStateCalculator(stateCode: string): StateCalculator | null;
/**
 * Check if a state's tax calculation is supported.
 */
export declare function isStateSupported(stateCode: string): boolean;
/**
 * Get all supported state codes.
 */
export declare function getSupportedStates(): string[];
