/**
 * KS K-40 — Kansas Individual Income Tax Return — Field Mapping
 *
 * Maps TaxReturn, CalculationResult, and StateCalculationResult fields
 * to AcroForm field names in the official 2025 K-40 fillable PDF.
 *
 * KS is a progressive-tax state: 5.2% / 5.58% brackets.
 * $9,160 personal exemption, $2,320 dependent exemption.
 * 17% refundable state EITC.
 *
 * PDF: client/public/state-forms/ks-k40.pdf (313 fields)
 */
import type { StateFieldMapping, StateFormTemplate } from '../../types/stateFormMappings.js';
export declare const KS_K40_FIELDS: StateFieldMapping[];
export declare const KS_K40_TEMPLATE: StateFormTemplate;
