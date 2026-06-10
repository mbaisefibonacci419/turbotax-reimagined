interface CategoryBarChartProps {
    items: Array<{
        label: string;
        value: number;
        stepId: string;
    }>;
    onBarClick?: (stepId: string) => void;
    colors?: string[];
}
export default function CategoryBarChart({ items: rawItems, onBarClick, colors }: CategoryBarChartProps): import("react").JSX.Element | null;
export {};
