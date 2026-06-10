import type { TaxReturn, CalculationResult } from '@nimbus/engine';
interface TransferGuidePanelProps {
    taxReturn: TaxReturn;
    result: CalculationResult;
    onBack: () => void;
}
export default function TransferGuidePanel({ taxReturn, result, onBack }: TransferGuidePanelProps): import("react").JSX.Element;
export {};
