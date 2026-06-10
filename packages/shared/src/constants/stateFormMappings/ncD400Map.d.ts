/**
 * NC D-400 North Carolina Individual Income Tax Return — Field Mapping
 *
 * Maps TaxReturn, CalculationResult, and StateCalculationResult fields
 * to AcroForm field names in the 2025 D-400 fillable PDF.
 *
 * NC uses federal AGI as starting point. Flat 4.25% rate.
 * Standard deduction varies by filing status. No personal/dependent exemptions.
 *
 * Real PDF field names use the `y_d400wf_` prefix (e.g., y_d400wf_fname1).
 */
import type { StateFieldMapping, StateFormTemplate } from '../../types/stateFormMappings.js';
export declare const NC_D400_FIELDS: StateFieldMapping[];
export declare const NC_D400_TEMPLATE: StateFormTemplate;
