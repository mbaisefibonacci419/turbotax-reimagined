/**
 * NE Form 1040N — Nebraska Individual Income Tax Return — Field Mapping
 *
 * Maps TaxReturn, CalculationResult, and StateCalculationResult fields
 * to AcroForm field names in the official 2025 Form 1040N fillable PDF.
 *
 * NE is a progressive-tax state: 4 brackets (2.46% to 5.2%).
 * Uses exemption credits ($171 per exemption) rather than deductions.
 * 10% refundable state EITC.
 *
 * PDF: client/public/state-forms/ne-1040n.pdf (388 fields)
 */
import type { StateFieldMapping, StateFormTemplate } from '../../types/stateFormMappings.js';
export declare const NE_1040N_FIELDS: StateFieldMapping[];
export declare const NE_1040N_TEMPLATE: StateFormTemplate;
