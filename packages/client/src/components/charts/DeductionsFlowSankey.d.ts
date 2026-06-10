interface BarItem {
    label: string;
    amount: number;
    stepId: string;
}
interface DeductionsFlowSankeyProps {
    totalIncome: number;
    adjustments: BarItem[];
    deductions: BarItem[];
    isItemized: boolean;
    agi: number;
    deductionAmount: number;
    deductionLabel: string;
    qbiDeduction: number;
    taxableIncome: number;
    onNodeClick?: (stepId: string) => void;
}
export default function DeductionsFlowSankey(props: DeductionsFlowSankeyProps): import("react").JSX.Element;
export {};
