import type { TaxReturn, CalculationResult } from '@nimbus/engine';
import type { IRSFormTemplate } from '@nimbus/engine';
/**
 * Fill a single IRS PDF form with data from the tax return and calculation result.
 */
export declare function fillIRSForm(template: IRSFormTemplate, taxReturn: TaxReturn, calc: CalculationResult, options?: {
    flatten?: boolean;
}): Promise<Uint8Array>;
/**
 * Generate a 1040-ES voucher PDF: fill the official template, then extract
 * only the voucher pages (discarding the worksheet/instruction pages).
 */
export declare function generateEstimatedTaxVouchersPDF(taxReturn: TaxReturn, calc: CalculationResult): Promise<Uint8Array>;
/**
 * Generate a pre-filled Form 4868 (Automatic Extension of Time to File).
 * Standalone — not part of the filing packet.
 */
export declare function generateForm4868PDF(taxReturn: TaxReturn, calc: CalculationResult): Promise<Uint8Array>;
/**
 * All available form templates in IRS attachment sequence order.
 */
export declare const ALL_TEMPLATES: IRSFormTemplate[];
/**
 * Generate a merged PDF containing only the selected form instances.
 * Iterates ALL_TEMPLATES in IRS attachment sequence order so the output
 * matches the standard filing order regardless of selection order.
 */
export declare function generateSelectedFormsPDF(selections: {
    formId: string;
    instanceIndex: number;
}[], taxReturn: TaxReturn, calc: CalculationResult): Promise<Uint8Array>;
/**
 * Generate a complete IRS return PDF by filling all applicable forms
 * and merging them into a single document.
 */
export declare function generateIRSReturnPDF(taxReturn: TaxReturn, calc: CalculationResult): Promise<Uint8Array>;
/**
 * Generate a complete filing packet: cover page + all applicable IRS forms.
 */
export declare function generateFilingPacketPDF(taxReturn: TaxReturn, calc: CalculationResult): Promise<Uint8Array>;
