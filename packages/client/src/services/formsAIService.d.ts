/**
 * Forms AI Service — powers AI-assisted features in Forms Mode.
 *
 * Provides:
 * 1. Field explanation context builder (for "explain this field")
 * 2. Form review / audit (for "what's wrong with my form")
 * 3. Form search by natural language (for "find the right form")
 * 4. Field completeness analysis (for smart sidebar badges)
 * 5. Full-return narrative review
 */
import type { IRSFormTemplate, TaxReturn, CalculationResult, ClassifiedField } from '@nimbus/engine';
/** Short user message + detailed context for the LLM. */
export interface AIPrompt {
    /** Short message shown in chat (must be under 2000 chars). */
    message: string;
    /** Detailed data injected into formsReviewContext (no size limit). */
    context?: string;
}
/**
 * Build a short chat prompt + context to explain a specific form field.
 * Used by the "Ask AI about this field" action in PdfFormViewer.
 */
export declare function buildFieldExplainPrompt(template: IRSFormTemplate, cf: ClassifiedField, currentValue: string | undefined): AIPrompt;
export interface FormReviewIssue {
    severity: 'error' | 'warning' | 'info';
    fieldLabel: string;
    message: string;
}
/**
 * Analyze a form for issues: empty required fields, suspicious values,
 * math inconsistencies.
 */
export declare function reviewForm(template: IRSFormTemplate, taxReturn: TaxReturn, calculation: CalculationResult, instanceIndex?: number): FormReviewIssue[];
/**
 * Build a short chat message + detailed context for a full form review.
 */
export declare function buildFormReviewPrompt(template: IRSFormTemplate, taxReturn: TaxReturn, calculation: CalculationResult, instanceIndex?: number): AIPrompt;
interface FormSearchResult {
    template: IRSFormTemplate;
    relevance: 'high' | 'medium' | 'low';
    reason: string;
}
/**
 * Search for forms by natural language query.
 * Returns matching templates sorted by relevance.
 */
export declare function searchForms(query: string, taxReturn?: TaxReturn | null, calculation?: CalculationResult | null): FormSearchResult[];
export interface FormCompleteness {
    formId: string;
    totalEditable: number;
    filled: number;
    /** 0–100 percentage */
    percent: number;
    /** 'complete' (100%), 'partial' (1-99%), 'empty' (0%) */
    status: 'complete' | 'partial' | 'empty';
    /** True if form has errors (e.g., negative values, missing required) */
    hasIssues: boolean;
}
/**
 * Compute field completeness for a single form.
 */
export declare function getFormCompleteness(template: IRSFormTemplate, taxReturn: TaxReturn, calculation: CalculationResult, instanceIndex?: number): FormCompleteness;
/**
 * Build a short chat message + detailed context for a comprehensive return review.
 */
export declare function buildFullReturnReviewPrompt(taxReturn: TaxReturn, calculation: CalculationResult): AIPrompt;
export {};
