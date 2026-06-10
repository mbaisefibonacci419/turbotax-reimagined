/**
 * OK Form 511 — Oklahoma Resident Individual Income Tax Return — Field Mapping
 *
 * Maps TaxReturn, CalculationResult, and StateCalculationResult fields
 * to AcroForm field names in the official 2025 Form 511 fillable PDF.
 *
 * OK is a progressive-tax state: 6 brackets, top 4.75%.
 * $1,000 personal exemption per person, 5% refundable state EITC.
 *
 * PDF: client/public/state-forms/ok-511.pdf (294 fields)
 */
import type { StateFieldMapping, StateFormTemplate } from '../../types/stateFormMappings.js';
export declare const OK_511_FIELDS: StateFieldMapping[];
export declare const OK_511_TEMPLATE: StateFormTemplate;
