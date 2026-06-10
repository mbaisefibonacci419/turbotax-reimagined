/**
 * State Tax Form Line References — TY 2025
 *
 * Maps state codes to the official form names and key line numbers
 * used in calculation trace authority fields. These reference the
 * 2025 tax year forms from each state's Department of Revenue.
 *
 * Sourced from: docs/state-tax-booklets/*.pdf
 */
export interface StateFormLineRefs {
    /** Form name, e.g. "PA-40" */
    formName: string;
    /** Line where Federal AGI or starting income appears */
    agiLine?: string;
    /** Line for state taxable income */
    taxableIncomeLine?: string;
    /** Line for computed income tax */
    incomeTaxLine?: string;
    /** Line for total tax after credits */
    totalTaxLine?: string;
    /** Line for refund or amount owed */
    refundLine?: string;
}
/**
 * Lookup table mapping state codes to form line references.
 * Used by the flat-tax and progressive-tax factory calculators
 * to populate trace authority fields.
 */
export declare const STATE_FORM_REFS: Record<string, StateFormLineRefs | undefined>;
