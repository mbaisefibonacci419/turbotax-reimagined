/**
 * VA Form 760 — Virginia Resident Individual Income Tax Return — Field Mapping
 *
 * Maps TaxReturn, CalculationResult, and StateCalculationResult fields
 * to AcroForm field names in the official 2025 Form 760 fillable PDF.
 *
 * VA is a progressive-tax state: 4 brackets (2% to 5.75%).
 * $930 personal exemption, $930 dependent exemption.
 * 20% refundable state EITC.
 *
 * PDF: client/public/state-forms/va-760.pdf (114 fields)
 * Enumerated via: npx tsx scripts/enumerate-pdf-fields.ts client/public/state-forms/va-760.pdf
 */
import type { StateFieldMapping, StateFormTemplate } from '../../types/stateFormMappings.js';
export declare const VA_760_FIELDS: StateFieldMapping[];
export declare const VA_760_TEMPLATE: StateFormTemplate;
