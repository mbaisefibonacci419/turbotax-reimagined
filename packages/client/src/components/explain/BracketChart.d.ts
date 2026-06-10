/**
 * BracketChart — visual bar chart showing how taxable income fills each bracket.
 *
 * Uses Syncfusion's ChartComponent with stacked bar series to show:
 * - How much income falls in each bracket (proportional bar widths)
 * - The tax rate for each bracket (series labels + tooltips)
 * - The tax amount per bracket (tooltip detail)
 * - Interactive hover tooltips with full breakdown
 */
import type { FilingStatus } from '@nimbus/engine';
interface BracketChartProps {
    taxableIncome: number;
    filingStatus: FilingStatus;
    incomeTax: number;
}
export default function BracketChart({ taxableIncome, filingStatus, incomeTax }: BracketChartProps): import("react").JSX.Element;
export {};
