/**
 * AZ Form 140 — Arizona Resident Personal Income Tax Return — Field Mapping
 *
 * Maps TaxReturn, CalculationResult, and StateCalculationResult fields
 * to AcroForm field names in the official 2025 Form 140 fillable PDF.
 *
 * AZ is a flat-tax state at 2.5%. Conforms to federal standard deduction.
 * Aged exemption of $2,100 for 65+. Dependent credits: $100 under-17, $25 17+.
 *
 * PDF: client/public/state-forms/az-140.pdf (406 fields)
 */
import type { StateFieldMapping, StateFormTemplate } from '../../types/stateFormMappings.js';
export declare const AZ_140_FIELDS: StateFieldMapping[];
export declare const AZ_140_TEMPLATE: StateFormTemplate;
