/**
 * DE PIT-RES — Delaware Resident Personal Income Tax Return — Field Mapping
 *
 * Maps TaxReturn, CalculationResult, and StateCalculationResult fields
 * to AcroForm field names in the official 2025 DE PIT-RES fillable PDF.
 *
 * DE is a progressive-tax state: 7 brackets (0% to 6.6%).
 * Standard deduction: $3,250 single / $6,500 MFJ.
 * Personal exemption credit: $110 per exemption.
 * DE EITC: taxpayer picks better of 4.5% refundable or 20% non-refundable.
 *
 * PDF: client/public/state-forms/de-pit-res.pdf (183 fields)
 * Enumerated via: npx tsx scripts/enumerate-pdf-fields.ts client/public/state-forms/de-pit-res.pdf
 */
import type { StateFieldMapping, StateFormTemplate } from '../../types/stateFormMappings.js';
export declare const DE_PIT_RES_FIELDS: StateFieldMapping[];
export declare const DE_PIT_RES_TEMPLATE: StateFormTemplate;
