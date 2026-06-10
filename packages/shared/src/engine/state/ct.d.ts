/**
 * Connecticut State Tax Calculator — Tax Year 2025
 *
 * Implements the full CT-1040 Tax Calculation Schedule (TCS):
 *   Line 1: CT AGI
 *   Line 2: Personal exemption deduction (Table A, with phase-out)
 *   Line 3: CT Taxable Income = Line 1 - Line 2
 *   Line 4: Initial tax from brackets (Table B)
 *   Line 5: 2% rate phase-out add-back (Table C)
 *   Line 6: Benefit recapture (Table D)
 *   Line 7: Combined tax = Line 4 + Line 5 + Line 6
 *   Line 8: Personal tax credit decimal (Table E)
 *   Line 9: CT Income Tax = Line 7 × (1.00 - Line 8)
 *
 * Plus: CT EITC (40% of federal + $250/child, refundable)
 *
 * Source: CT DRS Form CT-1040 TCS, CGS §12-700/702/703/704e
 */
import { TaxReturn, CalculationResult, StateCalculationResult, StateReturnConfig } from '../../types/index.js';
export declare function calculateConnecticut(taxReturn: TaxReturn, federalResult: CalculationResult, config: StateReturnConfig): StateCalculationResult;
