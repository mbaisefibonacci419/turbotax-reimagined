interface AMTWaterfallProps {
    taxableIncome: number;
    adjustmentsTotal: number;
    exemption: number;
    tentativeMinTax: number;
    regularTax: number;
    amtAmount: number;
    applies: boolean;
}
export default function AMTWaterfall({ taxableIncome, adjustmentsTotal, exemption, tentativeMinTax, regularTax, amtAmount, applies, }: AMTWaterfallProps): import("react").JSX.Element | null;
export {};
