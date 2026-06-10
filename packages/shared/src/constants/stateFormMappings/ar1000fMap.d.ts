/**
 * AR1000F Arkansas Individual Income Tax Return — Field Mapping
 *
 * Maps TaxReturn, CalculationResult, and StateCalculationResult fields
 * to AcroForm field names in the official 2025 AR1000F fillable PDF.
 *
 * AR is a progressive-tax state: 5 brackets (0% to 3.9%).
 * Starts from federal AGI. $29 personal exemption credit.
 *
 * PDF field names follow the pattern: F_NR-{page}-{field_number}
 * Page 1 fields: F_NR-1-*, Page 2: F_NR0-2-*, Page 3: F_NR-3-*
 *
 * PDF: client/public/state-forms/ar-1000f.pdf (220 fields)
 */
import type { StateFieldMapping, StateFormTemplate } from '../../types/stateFormMappings.js';
export declare const AR_1000F_FIELDS: StateFieldMapping[];
export declare const AR_1000F_TEMPLATE: StateFormTemplate;
