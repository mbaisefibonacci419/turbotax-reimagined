/**
 * GA 500 Georgia Individual Income Tax Return — Field Mapping
 *
 * Maps TaxReturn, CalculationResult, and StateCalculationResult fields
 * to AcroForm field names in the official 2025 Form 500 fillable PDF.
 *
 * GA uses federal AGI as starting point. Flat 5.19% rate (HB 111).
 * Standard deduction varies by filing status. $4,000/dependent exemption.
 */
import type { StateFieldMapping, StateFormTemplate } from '../../types/stateFormMappings.js';
export declare const GA_500_FIELDS: StateFieldMapping[];
export declare const GA_500_TEMPLATE: StateFormTemplate;
