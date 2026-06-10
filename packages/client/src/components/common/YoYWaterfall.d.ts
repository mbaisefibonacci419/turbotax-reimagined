/**
 * YoYWaterfall — "Why did my refund change?" bridge chart.
 *
 * Syncfusion WaterfallSeries showing an additive decomposition from the
 * prior-year result to the current-year result:
 *
 *   Prior Result → Tax Changed → Credits Changed → Payments Changed → Current Result
 *
 * Steps are exactly additive: priorNet + taxΔ + creditsΔ + paymentsΔ = currentNet.
 * The payments step is computed as a residual to guarantee balance.
 */
import type { PriorYearSummary, Form1040Result } from '@nimbus/engine';
interface YoYWaterfallProps {
    priorYear: PriorYearSummary;
    current: Form1040Result;
}
export default function YoYWaterfall({ priorYear, current }: YoYWaterfallProps): import("react").JSX.Element | null;
export {};
