interface CreditItem {
    label: string;
    value: number;
    stepId: string;
    refundable: boolean;
}
interface CreditsChartSwitcherProps {
    items: CreditItem[];
    onSliceClick?: (stepId: string) => void;
}
export default function CreditsChartSwitcher({ items, onSliceClick }: CreditsChartSwitcherProps): import("react").JSX.Element | null;
export {};
