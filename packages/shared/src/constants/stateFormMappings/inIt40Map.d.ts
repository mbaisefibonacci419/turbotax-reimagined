/**
 * IN IT-40 Indiana Full-Year Resident Individual Income Tax Return — Field Mapping
 *
 * Maps TaxReturn, CalculationResult, and StateCalculationResult fields
 * to AcroForm field names in the official 2025 IT-40 fillable PDF.
 *
 * IN uses federal AGI as starting point. Flat 3.0% rate.
 * Personal exemption: $1,000/person + $1,500/dependent.
 */
import type { StateFieldMapping, StateFormTemplate } from '../../types/stateFormMappings.js';
export declare const IN_IT40_FIELDS: StateFieldMapping[];
export declare const IN_IT40_TEMPLATE: StateFormTemplate;
