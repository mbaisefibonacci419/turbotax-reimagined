/**
 * IL-1040 Illinois Individual Income Tax Return — Field Mapping
 *
 * Maps TaxReturn, CalculationResult, and StateCalculationResult fields
 * to AcroForm field names in the official 2025 IL-1040 fillable PDF.
 *
 * IL uses federal AGI as starting point. Flat 4.95% rate.
 * Per-person exemption of $2,850 (taxpayer + spouse + dependents).
 */
import type { StateFieldMapping, StateFormTemplate } from '../../types/stateFormMappings.js';
export declare const IL_1040_FIELDS: StateFieldMapping[];
export declare const IL_1040_TEMPLATE: StateFormTemplate;
