import type { TaxReturn, CalculationResult } from '@nimbus/engine';
interface FreeEfilingPanelProps {
    taxReturn: TaxReturn;
    result: CalculationResult;
    onBack: () => void;
}
export default function FreeEfilingPanel({ taxReturn, result, onBack }: FreeEfilingPanelProps): import("react").JSX.Element;
export {};
