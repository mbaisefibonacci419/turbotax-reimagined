/**
 * California State Tax Calculator — Tax Year 2025
 *
 * Calculates:
 *   1. CA income tax (9 progressive brackets)
 *   2. Mental Health Services Tax (1% on income over $1M)
 *   3. Personal exemption credits
 *   4. CalEITC (California Earned Income Tax Credit)
 *   5. CA itemized deduction recalculation (no SALT cap, $1M mortgage limit)
 *
 * Starting point: Federal AGI → CA modifications → CA brackets
 *
 * Form 540 ordering (critical for MHST):
 *   Line 31: Tax from brackets
 *   Line 32: Exemption credits
 *   Lines 33-47: Other credits
 *   Line 48: Tax after credits
 *   Line 62: MHST added AFTER all credits (never reduced by credits)
 *   Line 64: Total tax
 */
import { TaxReturn, CalculationResult, StateCalculationResult, StateReturnConfig } from '../../types/index.js';
export declare function calculateCalifornia(taxReturn: TaxReturn, federalResult: CalculationResult, config: StateReturnConfig): StateCalculationResult;
