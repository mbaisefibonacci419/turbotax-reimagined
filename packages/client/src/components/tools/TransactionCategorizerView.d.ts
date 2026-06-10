/**
 * Transaction Categorizer View — AI-powered transaction classification dashboard.
 *
 * Shown inside the ExpenseScannerToolView when AI categorization results are available.
 * Provides:
 *   - Summary cards per category (total amount, transaction count)
 *   - Expandable category groups with individual transactions
 *   - Checkbox multi-select with batch reclassify toolbar
 *   - Shift+click range selection
 *   - Individual reclassify dropdown per row
 *   - Drill-down into sub-categories for business expenses
 */
import type { CategorizationResult, CategorizedTransaction } from '../../services/transactionCategorizerTypes';
interface Props {
    result: CategorizationResult;
    onApproveCategory: (category: string) => void;
    onUpdateTransaction: (index: number, patch: Partial<CategorizedTransaction>) => void;
    onApplyToReturn: () => void;
}
export default function TransactionCategorizerView({ result, onApproveCategory, onUpdateTransaction, onApplyToReturn, }: Props): import("react").JSX.Element;
export {};
