/**
 * Maine 1040ME — Maine Individual Income Tax Return — Field Mapping
 *
 * Maps TaxReturn, CalculationResult, and StateCalculationResult fields
 * to AcroForm field names in the official 2025 Form 1040ME fillable PDF.
 *
 * ME is a progressive-tax state: 3 brackets (5.8% to 7.15%).
 * Starts from federal AGI. $4,700 personal exemption.
 * Dual EITC rates: 12% non-refundable + 25% refundable.
 *
 * PDF field names are descriptive (e.g., "Form 1040ME Your First Name").
 *
 * PDF: client/public/state-forms/me-1040.pdf (110 fields)
 */
import type { StateFieldMapping, StateFormTemplate } from '../../types/stateFormMappings.js';
export declare const ME_1040_FIELDS: StateFieldMapping[];
export declare const ME_1040_TEMPLATE: StateFormTemplate;
