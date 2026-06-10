/**
 * MO Form MO-1040 — Missouri Individual Income Tax Return — Field Mapping
 *
 * Maps TaxReturn, CalculationResult, and StateCalculationResult fields
 * to AcroForm field names in the official 2025 MO-1040 fillable PDF.
 *
 * MO is a progressive-tax state: 7 brackets (2% to 4.7%).
 * Starts from federal AGI. Federal standard deduction conformity.
 * $1,200 dependent exemption. 20% non-refundable state EITC.
 *
 * PDF: client/public/state-forms/mo-1040.pdf (192 fields)
 */
import type { StateFieldMapping, StateFormTemplate } from '../../types/stateFormMappings.js';
export declare const MO_1040_FIELDS: StateFieldMapping[];
export declare const MO_1040_TEMPLATE: StateFormTemplate;
