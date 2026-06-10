/**
 * Category Detail Grid — Level 3 sub-categorization review.
 *
 * Pure React component. Shows transactions grouped by sub-category with:
 *   - Distinct section headings + clear total lines
 *   - Checkbox multi-select with batch reclassify toolbar
 *   - Per-row reclassify dropdown
 *   - AI-powered batch reclassify
 */
import type { CategorizedTransaction, TransactionCategory } from '../../services/transactionCategorizerTypes';
interface Props {
    category: TransactionCategory;
    transactions: CategorizedTransaction[];
    onUpdateTransaction: (index: number, patch: Partial<CategorizedTransaction>) => void;
    onBack: () => void;
    onApproveAll: () => void;
    onApplyToReturn: () => void;
}
export default function CategoryDetailGrid({ category, transactions, onUpdateTransaction, onBack, onApproveAll, onApplyToReturn, }: Props): import("react").JSX.Element;
export {};
