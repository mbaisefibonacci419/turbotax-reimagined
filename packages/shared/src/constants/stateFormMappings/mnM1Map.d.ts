/**
 * MN Form M1 — Minnesota Individual Income Tax Return — Field Mapping
 *
 * Maps TaxReturn, CalculationResult, and StateCalculationResult fields
 * to AcroForm field names in the official 2025 Form M1 fillable PDF.
 *
 * MN is a progressive-tax state: 4 brackets (5.35% to 9.85%).
 * Starts from federal taxable income. $5,200 dependent exemption.
 * 45% refundable state EITC.
 *
 * PDF: client/public/state-forms/mn-m1.pdf (81 fields)
 */
import type { StateFieldMapping, StateFormTemplate } from '../../types/stateFormMappings.js';
export declare const MN_M1_FIELDS: StateFieldMapping[];
export declare const MN_M1_TEMPLATE: StateFormTemplate;
