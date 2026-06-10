/**
 * KY 740 Kentucky Individual Income Tax Return — Field Mapping
 *
 * Maps TaxReturn, CalculationResult, and StateCalculationResult fields
 * to AcroForm field names in the official 2025 Form 740 fillable PDF.
 *
 * KY uses federal AGI as starting point. Flat 4.0% rate.
 * Standard deduction: $3,270 for all filing statuses.
 */
import type { StateFieldMapping, StateFormTemplate } from '../../types/stateFormMappings.js';
export declare const KY_740_FIELDS: StateFieldMapping[];
export declare const KY_740_TEMPLATE: StateFormTemplate;
