/**
 * ExpenseScannerSetup — pre-categorization context screen.
 *
 * Shows what the AI knows about the user's tax situation, lets them
 * select which expense categories to scan for, and provides quick-select
 * bundles for users with sparse return data.
 */
import type { TransactionCategory } from '../../services/transactionCategorizerTypes';
interface Props {
    transactionCount: number;
    onStartScan: (enabledCategories: TransactionCategory[], contextHints: Record<string, boolean>) => void;
}
export default function ExpenseScannerSetup({ transactionCount, onStartScan }: Props): import("react").JSX.Element;
export {};
