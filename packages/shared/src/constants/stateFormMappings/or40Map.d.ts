/**
 * OR-40 Oregon Individual Income Tax Return — Field Mapping
 *
 * Maps TaxReturn, CalculationResult, and StateCalculationResult fields
 * to AcroForm field names in the official 2025 OR-40 fillable PDF.
 *
 * OR is a progressive-tax state: 4 brackets (4.75% to 9.9%).
 * Starts from federal AGI. $256 exemption credit per person.
 * 12% refundable state EITC.
 *
 * PDF field names follow the pattern: or-40-p{page}-{field_number}
 *
 * PDF: client/public/state-forms/or-40.pdf (146 fields)
 */
import type { StateFieldMapping, StateFormTemplate } from '../../types/stateFormMappings.js';
export declare const OR_40_FIELDS: StateFieldMapping[];
export declare const OR_40_TEMPLATE: StateFormTemplate;
