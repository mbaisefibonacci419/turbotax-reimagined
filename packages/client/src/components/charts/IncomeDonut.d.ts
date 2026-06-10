interface IncomeDonutProps {
    items: Array<{
        label: string;
        value: number;
        stepId: string;
    }>;
    onSliceClick?: (stepId: string) => void;
    height?: string;
}
export default function IncomeDonut({ items: rawItems, onSliceClick, height }: IncomeDonutProps): import("react").JSX.Element | null;
export {};
