/**
 * FindPreparerPanel — Help users find an authorized IRS e-file provider.
 *
 * Links to the IRS e-file provider directory and provides
 * guidance on what to bring.
 */
import type { TaxReturn } from '@nimbus/engine';
interface FindPreparerPanelProps {
    taxReturn: TaxReturn;
    onBack: () => void;
}
export default function FindPreparerPanel({ taxReturn, onBack }: FindPreparerPanelProps): import("react").JSX.Element;
export {};
