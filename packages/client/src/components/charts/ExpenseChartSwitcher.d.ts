interface ExpenseChartSwitcherProps {
    items: Array<{
        label: string;
        value: number;
        stepId: string;
    }>;
    onBarClick?: (stepId: string) => void;
}
export default function ExpenseChartSwitcher({ items, onBarClick }: ExpenseChartSwitcherProps): import("react").JSX.Element | null;
export {};
