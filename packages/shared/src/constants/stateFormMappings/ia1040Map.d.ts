/**
 * IA 1040 Iowa Individual Income Tax Return — Field Mapping
 *
 * Maps TaxReturn, CalculationResult, and StateCalculationResult fields
 * to AcroForm field names in the 2025 IA 1040 fillable PDF.
 *
 * IA uses federal AGI as starting point. Flat 3.8% rate.
 * Federal standard deduction conformity. $40 per exemption credit.
 *
 * PDF: client/public/state-forms/ia-1040.pdf (236 fields)
 * Enumerated via: npx tsx scripts/enumerate-pdf-fields.ts client/public/state-forms/ia-1040.pdf
 */
import type { StateFieldMapping, StateFormTemplate } from '../../types/stateFormMappings.js';
export declare const IA_1040_FIELDS: StateFieldMapping[];
export declare const IA_1040_TEMPLATE: StateFormTemplate;
