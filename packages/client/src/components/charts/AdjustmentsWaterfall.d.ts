interface AdjustmentsWaterfallProps {
    totalIncome: number;
    adjustments: Array<{
        label: string;
        amount: number;
        stepId: string;
    }>;
    agi: number;
    onBarClick?: (stepId: string) => void;
}
export default function AdjustmentsWaterfall({ totalIncome, adjustments, agi, onBarClick }: AdjustmentsWaterfallProps): import("react").JSX.Element | null;
export {};
