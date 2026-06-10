interface DeductionsFlowSwitcherProps {
    totalIncome: number;
    adjustments: Array<{
        label: string;
        amount: number;
        stepId: string;
    }>;
    deductions: Array<{
        label: string;
        amount: number;
        stepId: string;
    }>;
    isItemized: boolean;
    totalAdjustments: number;
    agi: number;
    deductionAmount: number;
    deductionLabel: string;
    qbiDeduction: number;
    taxableIncome: number;
    onBarClick?: (stepId: string) => void;
}
export default function DeductionsFlowSwitcher(props: DeductionsFlowSwitcherProps): import("react").JSX.Element | null;
export {};
