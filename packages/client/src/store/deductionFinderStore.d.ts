/**
 * Deduction Finder Store
 *
 * Persists scan state (transactions, files, AI results) across component
 * mount/unmount cycles. Without this, navigating away from the Deduction
 * Finder step loses all uploaded data and scan results.
 *
 * Security:
 *   - Categorization results are encrypted at rest using the vault passphrase (AES-256-GCM).
 *   - The encrypted blob is stored in localStorage['nimbus:expense-scanner-enc'].
 *   - On vault lock, in-memory categorization data is cleared.
 *   - On vault unlock, the encrypted blob is decrypted and restored.
 *   - Raw transactions are NOT persisted (re-upload is fast).
 */
import type { DeductionFinderState, NormalizedTransaction, UploadedFileInfo } from '../services/deductionFinderTypes';
import type { MerchantClassification } from '../services/merchantClassifier';
import type { CategorizationResult, CategorizedTransaction } from '../services/transactionCategorizerTypes';
interface DeductionFinderStoreState {
    scanState: DeductionFinderState | null;
    allTransactions: NormalizedTransaction[];
    uploadedFiles: UploadedFileInfo[];
    aiClassifications: MerchantClassification[] | null;
    isProcessing: boolean;
    isClassifying: boolean;
    aiError: string | null;
    categorizationResult: CategorizationResult | null;
    categorizationProgress: string | null;
    isCategorizing: boolean;
    enabledCategories: string[];
    scannerPhase: 'upload' | 'setup' | 'scanning' | 'results';
    setScanState: (s: DeductionFinderState | null) => void;
    setAllTransactions: (t: NormalizedTransaction[]) => void;
    setUploadedFiles: (f: UploadedFileInfo[]) => void;
    setAiClassifications: (c: MerchantClassification[] | null) => void;
    setIsProcessing: (v: boolean) => void;
    setIsClassifying: (v: boolean) => void;
    setAiError: (e: string | null) => void;
    setCategorizationResult: (r: CategorizationResult | null) => void;
    setCategorizationProgress: (p: string | null) => void;
    setIsCategorizing: (v: boolean) => void;
    setEnabledCategories: (cats: string[]) => void;
    setScannerPhase: (phase: 'upload' | 'setup' | 'scanning' | 'results') => void;
    /** Update a single categorized transaction (for user reclassification). */
    updateCategorizedTransaction: (index: number, patch: Partial<CategorizedTransaction>) => void;
    /** Approve all transactions in a category. */
    approveCategory: (category: string) => void;
    loadDecrypted: () => Promise<void>;
    clearDecryptedState: () => void;
    reset: () => void;
}
export declare const useDeductionFinderStore: import("zustand").UseBoundStore<import("zustand").StoreApi<DeductionFinderStoreState>>;
export {};
