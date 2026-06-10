/**
 * VT IN-111 — Vermont Individual Income Tax Return — Field Mapping
 *
 * Maps TaxReturn, CalculationResult, and StateCalculationResult fields
 * to AcroForm field names in the official 2025 Form IN-111 fillable PDF.
 *
 * VT is a progressive-tax state: 4 brackets (3.35% to 8.75%).
 * Starts from federal taxable income. $4,800 personal exemption.
 * 38% refundable state EITC.
 *
 * PDF field names are descriptive (e.g., "TPFirstName", "Line1", "Line2").
 *
 * PDF: client/public/state-forms/vt-in111.pdf (89 fields)
 */
import type { StateFieldMapping, StateFormTemplate } from '../../types/stateFormMappings.js';
export declare const VT_IN111_FIELDS: StateFieldMapping[];
export declare const VT_IN111_TEMPLATE: StateFormTemplate;
