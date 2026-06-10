/**
 * Prior Year Importer — imports prior-year tax data for YoY comparison.
 *
 * Two import paths:
 * 1. Nimbus JSON export — re-runs calculateForm1040() for full computed results
 * 2. IRS 1040 PDF — extracts key line items via AcroForm fields (with text fallback)
 *
 * All processing runs client-side. Data never leaves the browser.
 */
import * as pdfjsLib from 'pdfjs-dist';
import './pdfWorkerInit';
import type { TaxReturn, PriorYearSummary } from '@nimbus/engine';
export interface PriorYearImportResult {
    summary: PriorYearSummary;
    carryforwardSuggestions: {
        capitalLossCarryforwardST?: number;
        capitalLossCarryforwardLT?: number;
        nolCarryforward?: number;
        priorYearTax?: number;
    };
    /** Raw TaxReturn — only present for JSON imports (used by template builder) */
    rawReturn?: TaxReturn;
    warnings: string[];
    errors: string[];
}
export declare const FORM_1040_EXTRACT_FIELDS: {
    readonly wages: "topmostSubform[0].Page1[0].f1_47[0]";
    readonly interest: "topmostSubform[0].Page1[0].f1_59[0]";
    readonly dividends: "topmostSubform[0].Page1[0].f1_61[0]";
    readonly iraDistrib: "topmostSubform[0].Page1[0].f1_63[0]";
    readonly pensions: "topmostSubform[0].Page1[0].f1_66[0]";
    readonly socialSecurity: "topmostSubform[0].Page1[0].f1_69[0]";
    readonly capitalGain: "topmostSubform[0].Page1[0].f1_70[0]";
    readonly totalIncome: "topmostSubform[0].Page1[0].f1_73[0]";
    readonly agi: "topmostSubform[0].Page1[0].f1_75[0]";
    readonly deduction: "topmostSubform[0].Page2[0].f2_02[0]";
    readonly taxableIncome: "topmostSubform[0].Page2[0].f2_06[0]";
    readonly totalTax: "topmostSubform[0].Page2[0].f2_16[0]";
    readonly estimatedPmts: "topmostSubform[0].Page2[0].f2_25[0]";
    readonly totalPayments: "topmostSubform[0].Page2[0].f2_29[0]";
    readonly refund: "topmostSubform[0].Page2[0].f2_31[0]";
    readonly amountOwed: "topmostSubform[0].Page2[0].f2_36[0]";
};
export declare const FORM_1040_EXTRACT_FIELDS_2024: {
    readonly wages: "topmostSubform[0].Page1[0].f1_32[0]";
    readonly interest: "topmostSubform[0].Page1[0].f1_43[0]";
    readonly dividends: "topmostSubform[0].Page1[0].f1_45[0]";
    readonly iraDistrib: "topmostSubform[0].Page1[0].Line4a-11_ReadOrder[0].f1_47[0]";
    readonly pensions: "topmostSubform[0].Page1[0].Line4a-11_ReadOrder[0].f1_49[0]";
    readonly socialSecurity: "topmostSubform[0].Page1[0].Line4a-11_ReadOrder[0].f1_51[0]";
    readonly capitalGain: "topmostSubform[0].Page1[0].Line4a-11_ReadOrder[0].f1_52[0]";
    readonly totalIncome: "topmostSubform[0].Page1[0].Line4a-11_ReadOrder[0].f1_54[0]";
    readonly agi: "topmostSubform[0].Page1[0].Line4a-11_ReadOrder[0].f1_56[0]";
    readonly deduction: "topmostSubform[0].Page1[0].f1_57[0]";
    readonly taxableIncome: "topmostSubform[0].Page1[0].f1_60[0]";
    readonly totalTax: "topmostSubform[0].Page2[0].f2_09[0]";
    readonly estimatedPmts: "topmostSubform[0].Page2[0].f2_14[0]";
    readonly totalPayments: "topmostSubform[0].Page2[0].f2_23[0]";
    readonly refund: "topmostSubform[0].Page2[0].f2_27[0]";
    readonly amountOwed: "topmostSubform[0].Page2[0].f2_29[0]";
};
export declare const FORM_1040_TEXT_KEYWORDS: Record<string, string[]>;
/** Fields where the fallback (15px tolerance) should be disabled to prevent
 *  adjacent-line value contamination. These are income lines that are packed
 *  ~12px apart on the IRS 1040 — using the wider fallback tolerance would
 *  cause values from neighboring lines to bleed through. */
export declare const STRICT_COLUMN_FIELDS: Set<string>;
export declare function importPriorYearJSON(file: File): Promise<PriorYearImportResult>;
export declare function importPriorYear1040PDF(file: File): Promise<PriorYearImportResult>;
export declare function extractAcroFormFinancials(pdf: pdfjsLib.PDFDocumentProxy, pageNumbers?: number[]): Promise<Record<string, number>>;
export declare function extractFinancialsFromText(pdf: pdfjsLib.PDFDocumentProxy, pageNumbers?: number[]): Promise<Record<string, number>>;
