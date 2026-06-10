/**
 * Import Duplicate Detection — prevents double-counting from careless re-imports.
 *
 * Compares incoming W-2 / 1099 data against already-entered items in the tax return
 * by matching employer/payer name and key dollar amounts.
 *
 * All matching is client-side. Data never leaves the browser.
 */
import type { TaxReturn } from '@nimbus/engine';
export interface DuplicateMatch {
    /** ID of the existing item that looks like a duplicate */
    existingId: string;
    /** Human-readable label for the existing item (e.g. "Acme Corp — $50,000") */
    existingLabel: string;
    /** How confident we are: 'exact' = name + amount match, 'likely' = name match only */
    confidence: 'exact' | 'likely';
}
export interface DuplicateCheckResult {
    /** Whether any potential duplicates were found */
    hasDuplicates: boolean;
    /** The matching existing items */
    matches: DuplicateMatch[];
}
/**
 * Check a single incoming item against existing data in the tax return.
 * Used by the PDF import flow.
 *
 * @param taxReturn - Current tax return from the Zustand store
 * @param incomeType - The type key (e.g. 'w2', '1099nec', '1099int')
 * @param incoming - The extracted/edited data about to be imported
 */
export declare function checkForDuplicates(taxReturn: TaxReturn, incomeType: string, incoming: Record<string, unknown>): DuplicateCheckResult;
/**
 * Check a batch of incoming items against existing data.
 * Used by the CSV import flow for 1099-B / 1099-DA.
 * Returns the count of items that have duplicates already in the return.
 *
 * @param taxReturn - Current tax return from the Zustand store
 * @param incomeType - '1099b' or '1099da'
 * @param items - Array of parsed row data about to be imported
 */
export declare function checkBatchForDuplicates(taxReturn: TaxReturn, incomeType: string, items: Record<string, unknown>[]): {
    duplicateCount: number;
    totalCount: number;
};
