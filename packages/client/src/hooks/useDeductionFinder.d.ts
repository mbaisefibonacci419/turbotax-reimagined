/**
 * Deduction Finder Hook
 *
 * Manages the scan lifecycle: file upload → parse → scan → insights.
 * Supports multi-file accumulation with cross-file deduplication.
 *
 * Scan state (transactions, files, insights, AI results) is held in a Zustand
 * store so it survives component unmount/remount during step navigation.
 * Only dismissed/addressed IDs are persisted to the TaxReturn via updateField.
 */
import type { DeductionFinderState, DeductionInsight, NormalizedTransaction } from '../services/deductionFinderTypes';
import type { CategorizationResult } from '../services/transactionCategorizerTypes';
export interface UseDeductionFinderResult {
    /** All loaded transactions (across all uploaded files) */
    allTransactions: NormalizedTransaction[];
    /** Current scan state (null if no scan has been run) */
    scanState: DeductionFinderState | null;
    /** Insights not yet addressed or dismissed */
    visibleInsights: DeductionInsight[];
    /** Addressed insights (grayed, shown at bottom) */
    addressedInsights: DeductionInsight[];
    /** Dismissed insight count */
    dismissedCount: number;
    /** Whether to show dismissed insights */
    showDismissed: boolean;
    setShowDismissed: (show: boolean) => void;
    /** Dismissed insights (only visible when showDismissed is true) */
    dismissedInsights: DeductionInsight[];
    /** Process an uploaded CSV or PDF file (additive — merges with existing) */
    processFile: (file: File) => Promise<void>;
    /** Remove a previously uploaded file and re-scan */
    removeFile: (fileName: string) => void;
    /** Mark an insight as addressed */
    addressInsight: (id: string) => void;
    /** Dismiss an insight */
    dismissInsight: (id: string) => void;
    /** Whether a file is being processed */
    isProcessing: boolean;
    /** Trigger AI classification on existing transactions (BYOK only) */
    enhanceWithAI: () => Promise<void>;
    /** Whether AI classification is in progress */
    isClassifying: boolean;
    /** AI classification progress (e.g., "125 / 500 merchants") */
    aiProgress: string | null;
    /** AI classification error message */
    aiError: string | null;
    /** Whether AI results have been loaded */
    hasAIResults: boolean;
    /** Run full AI transaction categorization (BYOK only) */
    categorizeTransactions: () => Promise<void>;
    /** Cancel an in-progress AI categorization */
    cancelCategorization: () => void;
    /** Categorization result (null if not yet run) */
    categorizationResult: CategorizationResult | null;
    /** Whether AI categorization is in progress */
    isCategorizing: boolean;
    /** Categorization progress text */
    categorizationProgress: string | null;
    /** Approve all transactions in a category */
    approveCategory: (category: string) => void;
    /** Update a single transaction's category */
    updateTransaction: (index: number, patch: Partial<import('../services/transactionCategorizerTypes').CategorizedTransaction>) => void;
}
export declare function useDeductionFinder(): UseDeductionFinderResult;
