interface IncomeChartSwitcherProps {
    items: Array<{
        label: string;
        value: number;
        stepId: string;
    }>;
    onSliceClick?: (stepId: string) => void;
}
export default function IncomeChartSwitcher({ items, onSliceClick }: IncomeChartSwitcherProps): import("react").JSX.Element | null;
export {};
