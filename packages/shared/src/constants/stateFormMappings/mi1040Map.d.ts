/**
 * MI-1040 Michigan Individual Income Tax Return — Field Mapping
 *
 * Maps TaxReturn, CalculationResult, and StateCalculationResult fields
 * to AcroForm field names in the 2025 MI-1040 fillable PDF.
 *
 * MI uses federal AGI as starting point. Flat 4.25% rate.
 * Personal exemption: $5,800/person (taxpayer + spouse + dependents).
 *
 * Real PDF field names include: FSSN1, SpSSN1, "Filer's First Name",
 * "Home address", "Line 10", etc.
 */
import type { StateFieldMapping, StateFormTemplate } from '../../types/stateFormMappings.js';
export declare const MI_1040_FIELDS: StateFieldMapping[];
export declare const MI_1040_TEMPLATE: StateFormTemplate;
