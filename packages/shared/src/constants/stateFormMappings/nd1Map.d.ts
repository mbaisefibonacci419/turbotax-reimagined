/**
 * ND-1 North Dakota Individual Income Tax Return — Field Mapping
 *
 * Maps TaxReturn, CalculationResult, and StateCalculationResult fields
 * to AcroForm field names in the official 2025 Form ND-1 fillable PDF.
 *
 * ND is a progressive-tax state: 3 brackets (0% to 2.5%).
 * Starts from federal taxable income. No personal exemption.
 *
 * PDF field names are descriptive (e.g., "First Name MI", "SX 1a", "Line 4a").
 *
 * PDF: client/public/state-forms/nd-1.pdf (92 fields)
 */
import type { StateFieldMapping, StateFormTemplate } from '../../types/stateFormMappings.js';
export declare const ND_1_FIELDS: StateFieldMapping[];
export declare const ND_1_TEMPLATE: StateFormTemplate;
