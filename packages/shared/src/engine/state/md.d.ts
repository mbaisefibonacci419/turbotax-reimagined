/**
 * Maryland State Income Tax Calculator — Tax Year 2025
 *
 * Calculates:
 *   1. MD income tax (10 progressive brackets, filing-status-specific)
 *   2. Standard deduction (flat amounts per HB 352, effective TY2025)
 *   3. Personal exemptions ($3,200 per person, with AGI phaseout)
 *   4. County piggyback tax (24 counties + Baltimore City)
 *   5. MD EITC (45% of federal EITC, refundable)
 *
 * Starting point: Federal AGI → MD modifications → MD brackets + county tax
 *
 * Key MD differences from federal:
 *   - Social Security benefits are fully exempt
 *   - Flat standard deduction (HB 352 replaced 15%-of-AGI formula for TY2025)
 *   - Brackets differ for Single/MFS vs MFJ/HoH (HB 352)
 *   - County "piggyback" tax on top of state tax (applied to taxable income)
 *   - Personal exemption phases out at higher income levels
 */
import { TaxReturn, CalculationResult, StateCalculationResult, StateReturnConfig } from '../../types/index.js';
export declare function calculateMaryland(taxReturn: TaxReturn, federalResult: CalculationResult, config: StateReturnConfig): StateCalculationResult;
