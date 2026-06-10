import type { TaxReturn, CalculationResult } from '@nimbus/engine';
interface PaperMailingPanelProps {
    taxReturn: TaxReturn;
    result: CalculationResult;
    onBack: () => void;
}
export default function PaperMailingPanel({ taxReturn, result, onBack }: PaperMailingPanelProps): import("react").JSX.Element;
export {};
