interface ExpenseItem {
    label: string;
    amount: number;
    stepId: string;
}
interface SEFlowSankeyProps {
    grossReceipts: number;
    returnsAndAllowances: number;
    otherBusinessIncome: number;
    cogs: number;
    expenses: ExpenseItem[];
    homeOffice: number;
    vehicle: number;
    depreciation: number;
    netProfit: number;
    seHealthInsurance: number;
    seRetirement: number;
    seTaxDeductibleHalf: number;
    onNodeClick?: (stepId: string) => void;
}
export default function SEFlowSankey(props: SEFlowSankeyProps): import("react").JSX.Element;
export {};
