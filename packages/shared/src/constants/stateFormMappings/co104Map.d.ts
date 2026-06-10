/**
 * CO DR 0104 Colorado Individual Income Tax Return — Field Mapping
 *
 * Maps TaxReturn, CalculationResult, and StateCalculationResult fields
 * to AcroForm field names in the official 2025 CO DR 0104 fillable PDF.
 *
 * CO starts from federal taxable income (no additional deductions/exemptions).
 * Flat 4.4% rate.
 */
import type { StateFieldMapping, StateFormTemplate } from '../../types/stateFormMappings.js';
export declare const CO_104_FIELDS: StateFieldMapping[];
export declare const CO_104_TEMPLATE: StateFormTemplate;
