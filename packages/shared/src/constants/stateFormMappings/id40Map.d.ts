/**
 * ID Form 40 — Idaho Individual Income Tax Return — Field Mapping
 *
 * Maps TaxReturn, CalculationResult, and StateCalculationResult fields
 * to AcroForm field names in the official 2025 Form 40 fillable PDF.
 *
 * ID is a progressive-tax state: 2 brackets (0% + 5.3%).
 * Starts from federal AGI. $0 personal exemption, $0 dependent exemption.
 * Grocery credit via hooks.
 *
 * PDF field names are a mix of descriptive names (FirstName1, IncomeL7, etc.)
 * and form-section prefixed names (TxCompL13, CreditsL21, etc.).
 *
 * PDF: client/public/state-forms/id-40.pdf (793 fields, many worksheets)
 */
import type { StateFieldMapping, StateFormTemplate } from '../../types/stateFormMappings.js';
export declare const ID_40_FIELDS: StateFieldMapping[];
export declare const ID_40_TEMPLATE: StateFormTemplate;
