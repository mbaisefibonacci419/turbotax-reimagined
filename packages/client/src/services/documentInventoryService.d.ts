/**
 * Document Inventory Service — pure completeness analysis for tax returns.
 *
 * Analyzes a TaxReturn and returns a structured inventory model showing:
 * - All income form groups with per-entry completeness status
 * - Discovery cross-reference (discovered but not entered)
 * - Non-income section completeness (personal info, filing status, etc.)
 *
 * Pure functions, zero React dependencies, fully testable.
 */
import type { TaxReturn } from '@nimbus/engine';
export type CompletenessStatus = 'complete' | 'partial' | 'missing_required' | 'not_entered';
export interface FormEntry {
    id: string;
    label: string;
    status: CompletenessStatus;
    filledFields: number;
    totalFields: number;
    missingRequired: string[];
    missingOptional: string[];
}
export interface FormTypeGroup {
    formType: string;
    formLabel: string;
    stepId: string;
    discoveryAnswer: 'yes' | 'no' | 'later' | 'not_asked';
    entries: FormEntry[];
    count: number;
    keyTotal: number;
    keyTotalLabel: string;
    groupStatus: CompletenessStatus;
}
export interface NonIncomeSection {
    id: string;
    label: string;
    stepId: string;
    status: CompletenessStatus;
    summary: string[];
    issues: string[];
}
export interface DocumentInventory {
    incomeGroups: FormTypeGroup[];
    pendingGroups: FormTypeGroup[];
    nonIncomeSections: NonIncomeSection[];
    overallCompleteness: number;
    totalFormsEntered: number;
    totalFormsPending: number;
}
export declare function buildDocumentInventory(taxReturn: TaxReturn): DocumentInventory;
