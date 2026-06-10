/**
 * New York State + NYC Tax Calculator — Tax Year 2025
 *
 * Calculates:
 *   1. NYS income tax (progressive brackets + supplemental tax worksheets)
 *   2. NYC income tax (if applicable, progressive brackets + credits)
 *   3. Yonkers surcharge (if applicable, 16.75% of NYS tax after nonrefundable credits)
 *   4. NYS credits — nonrefundable: household, college tuition
 *                   — refundable: EITC, Empire State Child Credit, dependent care
 *   5. NYC credits — nonrefundable: household, school tax, tax elimination
 *                   — refundable: EITC, dependent care
 *   6. MCTMT (Metropolitan Commuter Transportation Mobility Tax)
 *
 * Starting point: Federal AGI -> NY modifications -> NY brackets/worksheets
 *
 * Sources: IT-201 Instructions (2025), 41 pages
 */
import { TaxReturn, CalculationResult, StateCalculationResult, StateReturnConfig } from '../../types/index.js';
export declare function calculateNewYork(taxReturn: TaxReturn, federalResult: CalculationResult, config: StateReturnConfig): StateCalculationResult;
