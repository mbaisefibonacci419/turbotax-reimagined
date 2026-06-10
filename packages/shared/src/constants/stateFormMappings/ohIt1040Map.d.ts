/**
 * OH IT 1040 — Ohio Individual Income Tax Return — Field Mapping
 *
 * Maps TaxReturn, CalculationResult, and StateCalculationResult fields
 * to AcroForm field names in the official 2025 OH IT 1040 fillable PDF.
 *
 * OH uses a custom calculator with 3 effective brackets (0%, 2.75%, 3.5%).
 * AGI-phased personal exemptions ($2,400 per person, phases out $40K–$80K).
 * No standard deduction. Social Security fully exempt.
 * Same brackets for all filing statuses.
 *
 * PDF: client/public/state-forms/oh-it1040.pdf (588 fields)
 * Enumerated via: npx tsx scripts/enumerate-pdf-fields.ts client/public/state-forms/oh-it1040.pdf
 *
 * additionalLines from OH calculator:
 *   - ohTaxBeforeCredits: tax before credits
 *   - personalExemptions: total exemption amount
 *   - perPersonExemption: per-person exemption (after phase-out)
 *   - exemptionCount: number of exemptions claimed
 *   - localTax: local/municipal tax (placeholder)
 */
import type { StateFieldMapping, StateFormTemplate } from '../../types/stateFormMappings.js';
export declare const OH_IT1040_FIELDS: StateFieldMapping[];
export declare const OH_IT1040_TEMPLATE: StateFormTemplate;
