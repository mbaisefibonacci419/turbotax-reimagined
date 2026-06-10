/**
 * New Jersey State Income Tax Calculator — Tax Year 2025
 *
 * Calculates:
 *   1. NJ income tax (progressive brackets, varies by filing status)
 *   2. Personal exemptions (taxpayer, spouse, dependents)
 *   3. Property tax deduction or credit
 *   4. Retirement income exclusion (for qualifying residents)
 *
 * Starting point: Federal AGI → NJ modifications → NJ brackets
 *
 * Key NJ differences from federal:
 *   - No standard deduction — uses personal exemptions only
 *   - Does not tax Social Security benefits
 *   - Retirement income exclusion for lower-income residents
 *   - Property tax deduction up to $15,000 (or $50 credit)
 */
import { TaxReturn, CalculationResult, StateCalculationResult, StateReturnConfig } from '../../types/index.js';
export declare function calculateNewJersey(taxReturn: TaxReturn, federalResult: CalculationResult, config: StateReturnConfig): StateCalculationResult;
