/**
 * Local-only data layer — all tax data stays in the browser's localStorage.
 * No server, no network requests, no tracking. Your data never leaves your computer.
 *
 * Storage key layout:
 *   nimbus:returns          → string[] of return IDs
 *   nimbus:return:{id}      → encrypted TaxReturn JSON (or plaintext for unencrypted)
 *   nimbus:chat:{id}        → encrypted chat history JSON (per-return)
 *   nimbus:salt             → PBKDF2 salt for key derivation
 *   nimbus:verify           → encrypted verification token
 *
 * Encryption: When active, returns are encrypted with AES-256-GCM before storage.
 * An in-memory cache holds decrypted returns after unlock for synchronous access.
 */
import { TaxReturn } from '@nimbus/engine';
/** Populate cache by decrypting all returns from localStorage. Called on unlock. */
export declare function loadAllReturns(): Promise<void>;
export declare function clearReturnCache(): void;
/** Write a TaxReturn to cache + localStorage. Encrypts if key is available. */
export declare function writeReturn(tr: TaxReturn): void;
export declare function createReturn(): TaxReturn;
/** Import a fully-formed TaxReturn (e.g. from a .nimbus file). Saves to localStorage. */
export declare function importReturn(tr: TaxReturn): TaxReturn;
export declare function listReturns(): TaxReturn[];
/**
 * Export all returns as an encrypted .nimbus download (data portability).
 * Uses PBKDF2 key derivation + AES-256-GCM, same pattern as fileTransfer.ts.
 */
export declare function exportAllData(password: string): Promise<void>;
export declare function getReturn(id: string): TaxReturn;
export declare function updateReturn(id: string, body: Record<string, unknown>): TaxReturn;
export declare function deleteReturn(id: string): {
    success: boolean;
};
/**
 * Wipe ALL Nimbus data: localStorage, sessionStorage, IndexedDB,
 * service worker caches, and SW registrations.
 * Intended for privacy-critical "delete everything" scenarios.
 */
export declare function wipeAllData(): Promise<void>;
export declare function addIncomeItem<T extends object>(returnId: string, type: string, body: T): {
    id: string;
    [key: string]: unknown;
};
/**
 * Batch-add multiple income items at once (single localStorage write).
 * Used by the CSV import feature for bulk 1099-B / 1099-DA inserts.
 */
export declare function batchAddIncomeItems(returnId: string, type: string, items: Record<string, unknown>[]): {
    ids: string[];
    count: number;
};
export declare function updateIncomeItem<T extends object>(returnId: string, type: string, itemId: string, body: T): {
    id: string;
    [key: string]: unknown;
};
export declare function deleteIncomeItem(returnId: string, type: string, itemId: string): {
    success: boolean;
};
export declare function upsertBusiness(returnId: string, body: Record<string, unknown>): TaxReturn;
export declare function upsertItemized(returnId: string, body: Record<string, unknown>): TaxReturn;
export declare function upsertChildTaxCredit(returnId: string, body: Record<string, unknown>): TaxReturn;
export declare function upsertSSA1099(returnId: string, body: Record<string, unknown>): TaxReturn;
export declare function deleteSSA1099(returnId: string): TaxReturn;
export declare function upsertDependentCare(returnId: string, body: Record<string, unknown>): TaxReturn;
export declare function deleteDependentCare(returnId: string): TaxReturn;
export declare function upsertSaversCredit(returnId: string, body: Record<string, unknown>): TaxReturn;
export declare function deleteSaversCredit(returnId: string): TaxReturn;
export declare function upsertCleanEnergy(returnId: string, body: Record<string, unknown>): TaxReturn;
export declare function deleteCleanEnergy(returnId: string): TaxReturn;
export declare function upsertEVCredit(returnId: string, body: Record<string, unknown>): TaxReturn;
export declare function deleteEVCredit(returnId: string): TaxReturn;
export declare function upsertEnergyEfficiency(returnId: string, body: Record<string, unknown>): TaxReturn;
export declare function deleteEnergyEfficiency(returnId: string): TaxReturn;
export declare function upsertAdoptionCredit(returnId: string, body: Record<string, unknown>): TaxReturn;
export declare function deleteAdoptionCredit(returnId: string): TaxReturn;
export declare function upsertPremiumTaxCredit(returnId: string, body: Record<string, unknown>): TaxReturn;
export declare function deletePremiumTaxCredit(returnId: string): TaxReturn;
export declare function upsertScheduleR(returnId: string, body: Record<string, unknown>): TaxReturn;
export declare function deleteScheduleR(returnId: string): TaxReturn;
export declare function upsertForm8801(returnId: string, body: Record<string, unknown>): TaxReturn;
export declare function deleteForm8801(returnId: string): TaxReturn;
export declare function upsertArcherMSA(returnId: string, body: Record<string, unknown>): TaxReturn;
export declare function deleteArcherMSA(returnId: string): TaxReturn;
export interface ExpenseCategory {
    schedule_c_line: number;
    category_key: string;
    display_name: string;
    description: string;
    examples: string;
}
export declare function getExpenseCategories(): ExpenseCategory[];
export declare function calculateReturn(returnId: string): import("@nimbus/engine").CalculationResult;
export declare function downloadPDF(returnId: string, password?: string): Promise<Blob>;
export declare function downloadIRSFormsPDF(returnId: string, password?: string): Promise<Blob>;
declare const _default: {};
export default _default;
