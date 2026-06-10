/**
 * Wisconsin State Tax Calculator — Tax Year 2025
 *
 * Calculates:
 *   1. WI income tax (4 progressive brackets)
 *   2. Sliding-scale standard deduction (phases out for high earners)
 *   3. Personal and dependent exemptions ($700 each)
 *   4. WI EITC (percentage of federal EITC by number of children)
 *
 * Starting point: Federal AGI -> WI modifications -> WI brackets
 *
 * Key WI differences from federal:
 *   - Non-linear sliding-scale standard deduction that phases to $0
 *   - Social Security benefits are fully exempt
 *   - WI EITC varies by number of qualifying children (4% / 11% / 34%)
 *   - No state EITC for childless filers
 */
import { TaxReturn, CalculationResult, StateCalculationResult, StateReturnConfig } from '../../types/index.js';
export declare function calculateWisconsin(taxReturn: TaxReturn, federalResult: CalculationResult, config: StateReturnConfig): StateCalculationResult;
