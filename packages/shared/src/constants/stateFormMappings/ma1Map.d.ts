/**
 * MA Form 1 — Massachusetts Resident Income Tax Return — Field Mapping
 *
 * Maps TaxReturn, CalculationResult, and StateCalculationResult fields
 * to AcroForm field names in the official 2025 Form 1 fillable PDF.
 *
 * MA is a flat-tax state with a 5.0% rate on Part A income.
 * Additional rates apply: 8.5% short-term cap gains, 5% long-term, 12% collectibles.
 * 4% surtax on income over $1,083,150.
 *
 * PDF: client/public/state-forms/ma-1.pdf (115 fields)
 */
import type { StateFieldMapping, StateFormTemplate } from '../../types/stateFormMappings.js';
export declare const MA_1_FIELDS: StateFieldMapping[];
export declare const MA_1_TEMPLATE: StateFormTemplate;
