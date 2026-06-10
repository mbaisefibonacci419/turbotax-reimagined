/**
 * Hawaii State Tax Calculator — Tax Year 2025
 *
 * Calculates:
 *   1. HI income tax (12 progressive brackets — most in the US, top rate 11%)
 *   2. Personal exemptions ($1,144 per person)
 *   3. Food/excise tax credit ($110 per exemption, refundable)
 *   4. Hawaii EITC (20% of federal EITC, refundable)
 *
 * Starting point: Federal AGI → HI modifications → HI brackets
 *
 * Key Hawaii differences from federal:
 *   - 12 brackets (most of any state), filing-status-specific
 *   - Social Security benefits fully exempt
 *   - Refundable food/excise tax credit for all residents
 *   - State EITC: 20% of federal EITC (refundable)
 */
import { TaxReturn, CalculationResult, StateCalculationResult, StateReturnConfig } from '../../types/index.js';
export declare function calculateHawaii(taxReturn: TaxReturn, federalResult: CalculationResult, config: StateReturnConfig): StateCalculationResult;
