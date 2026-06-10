/**
 * MS Form 80-105 — Mississippi Resident Individual Income Tax Return — Field Mapping
 *
 * Maps TaxReturn, CalculationResult, and StateCalculationResult fields
 * to AcroForm field names in the official 2025 Form 80-105 fillable PDF.
 *
 * MS is a progressive-tax state: 2 brackets (0% on first $10,000, 4.4% above).
 * $2,300–$4,600 standard deduction. Personal exemptions: $6,000–$12,000.
 * $1,500 dependent exemption.
 *
 * PDF: client/public/state-forms/ms-80105.pdf (159 fields)
 * Enumerated via: npx tsx scripts/enumerate-pdf-fields.ts client/public/state-forms/ms-80105.pdf
 */
import type { StateFieldMapping, StateFormTemplate } from '../../types/stateFormMappings.js';
export declare const MS_80105_FIELDS: StateFieldMapping[];
export declare const MS_80105_TEMPLATE: StateFormTemplate;
