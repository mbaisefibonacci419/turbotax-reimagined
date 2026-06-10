/**
 * LA IT-540 Louisiana Resident Income Tax Return — Field Mapping
 *
 * Maps TaxReturn, CalculationResult, and StateCalculationResult fields
 * to AcroForm field names in the official 2025 IT-540 fillable PDF.
 *
 * LA uses federal AGI as starting point. Flat 3.0% rate (Act 11 reform).
 * Standard deduction varies by filing status. Exemptions repealed.
 */
import type { StateFieldMapping, StateFormTemplate } from '../../types/stateFormMappings.js';
export declare const LA_IT540_FIELDS: StateFieldMapping[];
export declare const LA_IT540_TEMPLATE: StateFormTemplate;
