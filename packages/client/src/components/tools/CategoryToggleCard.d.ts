/**
 * CategoryToggleCard — a single toggleable expense category row.
 *
 * Shows the category icon (in its CATEGORY_META color), label, description,
 * target form, and an on/off toggle switch. When auto-detected from the
 * return context, shows an "Auto-detected" badge.
 */
import type { TransactionCategory, CategoryMeta } from '../../services/transactionCategorizerTypes';
interface Props {
    category: TransactionCategory;
    meta: CategoryMeta;
    enabled: boolean;
    autoDetected: boolean;
    onChange: (enabled: boolean) => void;
}
export default function CategoryToggleCard({ category, meta, enabled, autoDetected, onChange }: Props): import("react").JSX.Element;
export {};
