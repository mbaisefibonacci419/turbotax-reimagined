/**
 * Categorization Applier — maps approved transaction categories to tax return fields.
 *
 * Takes approved CategorizedTransactions and generates field updates
 * that can be applied to the TaxReturn via updateField/updateDeepField.
 *
 * Does NOT auto-apply — returns a preview of what will change so the user
 * can confirm before committing.
 */
import type { TaxReturn } from '@nimbus/engine';
import type { CategorizedTransaction, TransactionCategory } from './transactionCategorizerTypes';
export interface FieldUpdate {
    /** Human-readable label for the preview UI. */
    label: string;
    /** Dot-path into TaxReturn (e.g., 'itemizedDeductions.charitableCash'). */
    path: string;
    /** Current value in the return (for diff display). */
    currentValue: number;
    /** New value to apply. */
    newValue: number;
    /** Whether this adds to the existing value vs. replaces it. */
    mode: 'add' | 'replace';
    /** Source category. */
    category: TransactionCategory;
    /** Target form/line. */
    formLine: string;
    /** Number of transactions contributing to this value. */
    transactionCount: number;
}
export interface ApplyPreview {
    updates: FieldUpdate[];
    /** Discovery keys that need to be enabled for the wizard steps to appear. */
    discoveryKeysToEnable: string[];
    /** Total dollar amount across all updates. */
    totalAmount: number;
}
/**
 * Build a preview of what applying approved categories would change.
 * Does NOT modify the tax return — just computes the diff.
 */
export declare function buildApplyPreview(transactions: CategorizedTransaction[], taxReturn: TaxReturn): ApplyPreview;
/**
 * Build ExpenseEntry objects from approved business_expense transactions.
 * Used by the apply handler to create Schedule C expense entries.
 */
export declare function buildScheduleCExpenses(transactions: CategorizedTransaction[]): Array<{
    scheduleCLine: number;
    category: string;
    description: string;
    amount: number;
}>;
