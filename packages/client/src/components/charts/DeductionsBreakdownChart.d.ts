interface BarItem {
    label: string;
    amount: number;
    stepId: string;
}
interface DeductionsBreakdownProps {
    adjustments: BarItem[];
    deductions: BarItem[];
    isItemized: boolean;
    deductionAmount: number;
    deductionLabel?: string;
    onBarClick?: (stepId: string) => void;
}
export default function DeductionsBreakdownChart({ adjustments, deductions, isItemized, deductionAmount, deductionLabel, onBarClick }: DeductionsBreakdownProps): import("react").JSX.Element | null;
export {};
