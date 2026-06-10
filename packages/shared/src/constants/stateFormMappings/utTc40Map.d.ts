/**
 * UT TC-40 Utah Individual Income Tax Return — Field Mapping
 *
 * Maps TaxReturn, CalculationResult, and StateCalculationResult fields
 * to AcroForm field names in the official 2025 TC-40 fillable PDF.
 *
 * UT uses federal AGI as starting point. Flat 4.5% rate.
 * Taxpayer credit = 6% of federal standard deduction (phases out at higher incomes).
 */
import type { StateFieldMapping, StateFormTemplate } from '../../types/stateFormMappings.js';
export declare const UT_TC40_FIELDS: StateFieldMapping[];
export declare const UT_TC40_TEMPLATE: StateFormTemplate;
