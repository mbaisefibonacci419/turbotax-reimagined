/**
 * Progressive-Tax State Calculator Factory — Tax Year 2025
 *
 * Creates a generic calculator for states that use progressive (graduated)
 * tax brackets. Covers ~20 states through config alone, with escape-hatch
 * hooks for state-specific additions, subtractions, credits, and local taxes.
 *
 * The factory reuses the existing `applyBrackets()` utility for bracket
 * computation and follows the same StateCalculator interface as all other
 * state calculators.
 */
import { type TaxReturn, type CalculationResult, type StateReturnConfig, type StateTaxBracket } from '../../types/index.js';
import type { StateCalculator } from './stateRegistry.js';
/** Filing status keys used in bracket/deduction lookups. */
export type FilingKey = 'single' | 'married_joint' | 'married_separate' | 'head_of_household';
export interface ProgressiveTaxStateConfig {
    stateCode: string;
    /** Starting point for state income calculation. */
    startingPoint: 'federal_agi' | 'federal_taxable_income';
    /** Progressive brackets keyed by filing status. */
    brackets: Record<FilingKey, StateTaxBracket[]>;
    /** Standard deduction by filing status key. */
    standardDeduction: Record<FilingKey, number>;
    /**
     * Personal exemption per person (taxpayer + spouse if MFJ).
     * Use Record<FilingKey, number> for filing-status-specific amounts.
     */
    personalExemption: number | Record<FilingKey, number>;
    /** Dependent exemption per dependent. */
    dependentExemption: number;
    /** If true, Social Security benefits are subtracted (default: true for most states). */
    exemptSocialSecurity?: boolean;
    /** State EITC as fraction of federal EITC (e.g., 0.30 = 30%). */
    stateEITCRate?: number;
    /** Whether state EITC is refundable (default: true). */
    stateEITCRefundable?: boolean;
    /** Optional surtax (millionaire's tax, etc.). */
    surtax?: {
        threshold: number | Record<FilingKey, number>;
        rate: number;
    };
    /**
     * Escape-hatch hooks for state-specific logic that doesn't fit the
     * standard factory flow. Each hook receives the tax return, federal
     * result, and state config, and returns a numeric adjustment.
     */
    hooks?: {
        /** Additional income to add to federal AGI (state-specific additions). */
        additions?: (tr: TaxReturn, fed: CalculationResult, cfg: StateReturnConfig) => number;
        /** Additional amounts to subtract beyond SS exemption. */
        subtractions?: (tr: TaxReturn, fed: CalculationResult, cfg: StateReturnConfig) => number;
        /** Custom credit logic. Returns credits amount + optional overrides. */
        credits?: (tr: TaxReturn, fed: CalculationResult, prelim: {
            stateAGI: number;
            taxableIncome: number;
            baseTax: number;
        }, cfg: StateReturnConfig) => {
            credits: number;
            taxAfterCredits?: number;
            refundableExcess?: number;
        };
        /** Local/county tax computation. */
        localTax?: (tr: TaxReturn, fed: CalculationResult, prelim: {
            taxableIncome: number;
            taxAfterCredits: number;
        }, cfg: StateReturnConfig) => number;
    };
}
/**
 * Count exemptions (taxpayer + spouse + dependents) for per-exemption credit hooks.
 * Exported for use in state config hooks to avoid duplicating person-counting logic.
 */
export declare function countExemptions(tr: TaxReturn): number;
/**
 * Create a StateCalculator for a progressive-tax state.
 *
 * @param config  The state's tax configuration (brackets, deductions, hooks, etc.)
 * @returns       A StateCalculator whose `.calculate()` method performs the
 *                full progressive-tax computation.
 */
export declare function createProgressiveTaxCalculator(config: ProgressiveTaxStateConfig): StateCalculator;
