/**
 * IRS Form 1040 (2025) — AcroForm Field Mapping
 *
 * Maps CalculationResult and TaxReturn fields to the IRS fillable
 * Form 1040 PDF field names. Field names discovered via enumerate-pdf-fields.ts.
 *
 * PDF: client/public/irs-forms/f1040.pdf (Form 1040, 2025, Created 9/5/25)
 * Total fields: 199
 */
import type { IRSFieldMapping, IRSFormTemplate } from '../types/irsFormMappings.js';
export declare const FORM_1040_FIELDS: IRSFieldMapping[];
export declare const FORM_1040_TEMPLATE: IRSFormTemplate;
