interface SEWaterfallProps {
    grossReceipts: number;
    returnsAndAllowances: number;
    otherBusinessIncome: number;
    cogs: number;
    expenses: number;
    homeOffice: number;
    vehicle: number;
    depreciation: number;
    netProfit: number;
    seHealthInsurance: number;
    seRetirement: number;
    seTaxDeductibleHalf: number;
    onBarClick?: (stepId: string) => void;
}
export default function SEWaterfall({ grossReceipts, returnsAndAllowances, otherBusinessIncome, cogs, expenses, homeOffice, vehicle, depreciation, netProfit, seHealthInsurance, seRetirement, seTaxDeductibleHalf, onBarClick, }: SEWaterfallProps): import("react").JSX.Element | null;
export {};
