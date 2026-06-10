/**
 * Apply to Return Modal — preview and confirm before writing categorized
 * expenses to the tax return.
 *
 * Shows a diff of what will change (current → new value) for each field,
 * which discovery keys will be enabled, and a confirm/cancel button.
 */
import { type ApplyPreview } from '../../services/categorizationApplier';
import type { CategorizedTransaction } from '../../services/transactionCategorizerTypes';
interface Props {
    transactions: CategorizedTransaction[];
    onConfirm: (preview: ApplyPreview) => void;
    onCancel: () => void;
}
export default function ApplyToReturnModal({ transactions, onConfirm, onCancel }: Props): import("react").JSX.Element | null;
export {};
