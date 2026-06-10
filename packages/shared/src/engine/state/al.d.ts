/**
 * Alabama State Tax Calculator --- Tax Year 2025
 *
 * Calculates:
 *   1. AL income tax (3 progressive brackets, same for all filing statuses)
 *   2. Standard deduction and personal/dependent exemptions
 *   3. Federal income tax deduction (UNIQUE to Alabama)
 *
 * Starting point: Federal AGI -> AL modifications -> AL brackets
 *
 * Key Alabama differences from most states:
 *   - FEDERAL TAX DEDUCTION: Alabama allows taxpayers to deduct federal
 *     income tax actually paid (after credits) from their Alabama taxable
 *     income. This is Alabama's most distinctive feature and creates a
 *     circular dependency that is resolved by using the federal return's
 *     final totalTax as the deduction amount.
 *   - Social Security benefits are fully exempt
 *   - Same bracket schedule for all filing statuses (2% / 4% / 5%)
 *   - No state EITC
 */
import { TaxReturn, CalculationResult, StateCalculationResult, StateReturnConfig } from '../../types/index.js';
export declare function calculateAlabama(taxReturn: TaxReturn, federalResult: CalculationResult, config: StateReturnConfig): StateCalculationResult;
