interface EstimatedPaymentsChartProps {
    quarters: [number, number, number, number];
    quarterlyDetail?: Array<{
        requiredInstallment: number;
        paymentMade: number;
    }>;
}
export default function EstimatedPaymentsChart({ quarters, quarterlyDetail }: EstimatedPaymentsChartProps): import("react").JSX.Element | null;
export {};
