/**
 * MT Form 2 Montana Individual Income Tax Return — Field Mapping
 *
 * Maps TaxReturn, CalculationResult, and StateCalculationResult fields
 * to AcroForm field names in the 2025 MT Form 2 fillable PDF.
 *
 * MT uses progressive tax with 2 brackets (4.7% / 5.9%).
 * Starting point: federal taxable income. No standard deduction or
 * personal/dependent exemptions at state level (zeroed out in config).
 *
 * PDF field names are human-readable (e.g., "Primary Taxpayer's First Name",
 * "Page 1 Line 1"). Page 2 lines handle payments/refund.
 */
import type { StateFieldMapping, StateFormTemplate } from '../../types/stateFormMappings.js';
export declare const MT_FORM2_FIELDS: StateFieldMapping[];
export declare const MT_FORM2_TEMPLATE: StateFormTemplate;
