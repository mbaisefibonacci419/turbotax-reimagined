/**
 * AL Form 40 Alabama Individual Income Tax Return — Field Mapping
 *
 * Maps TaxReturn, CalculationResult, and StateCalculationResult fields
 * to AcroForm field names in the 2025 AL Form 40 fillable PDF.
 *
 * AL uses a custom calculator (engine/state/al.ts) with:
 *   - Progressive brackets (2% / 4% / 5%)
 *   - Federal tax deduction (unique to AL)
 *   - Standard deduction with income-based phase-down
 *   - Personal exemption + dependent exemption tiers
 *
 * PDF field names are uppercase identifiers (e.g., FIRSTNAME, WAGESINC).
 * Schedule fields (Sch* prefix) are excluded — this covers main Form 40 only.
 */
import type { StateFieldMapping, StateFormTemplate } from '../../types/stateFormMappings.js';
export declare const AL_40_FIELDS: StateFieldMapping[];
export declare const AL_40_TEMPLATE: StateFormTemplate;
