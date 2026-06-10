interface ExpenseItem {
    label: string;
    amount: number;
    stepId: string;
}
interface SEFlowSwitcherProps {
    grossReceipts: number;
    returnsAndAllowances: number;
    otherBusinessIncome: number;
    cogs: number;
    totalExpenses: number;
    expenses: ExpenseItem[];
    homeOffice: number;
    vehicle: number;
    depreciation: number;
    netProfit: number;
    seHealthInsurance: number;
    seRetirement: number;
    seTaxDeductibleHalf: number;
    onBarClick?: (stepId: string) => void;
}
export default function SEFlowSwitcher(props: SEFlowSwitcherProps): import("react").JSX.Element | null;
export {};
