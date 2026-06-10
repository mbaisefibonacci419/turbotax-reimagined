/**
 * Ohio State Income Tax Calculator — Tax Year 2025
 *
 * Calculates:
 *   1. OH income tax (3 effective brackets: 0%, 2.75%, 3.5%)
 *   2. AGI-phased personal exemptions (phase-out $40K–$80K)
 *   3. Social Security exemption (fully exempt)
 *
 * Starting point: Federal AGI → OH modifications → OH brackets
 *
 * Key Ohio differences from federal:
 *   - No standard deduction
 *   - Personal exemption phases out linearly based on Ohio AGI ($40K–$80K)
 *   - Social Security benefits fully exempt
 *   - Same brackets for all filing statuses
 *   - Municipal/local income tax handled separately (Phase 3F)
 */
import { TaxReturn, CalculationResult, StateCalculationResult, StateReturnConfig } from '../../types/index.js';
export declare function calculateOhio(taxReturn: TaxReturn, federalResult: CalculationResult, config: StateReturnConfig): StateCalculationResult;
