/**
 * DeltaWaterfall — diverging bar chart showing how each tax category
 * contributes to the net scenario impact.
 *
 * income Δ → adjustment Δ → deduction Δ → tax Δ → credit Δ → net impact
 *
 * Uses Syncfusion BarSeries for tooltips, data labels, and consistent
 * styling with the main TaxFlowDiagram waterfall.
 */
import type { DeltaMap } from '../types';
interface DeltaWaterfallProps {
    delta: DeltaMap;
}
export default function DeltaWaterfall({ delta }: DeltaWaterfallProps): import("react").JSX.Element | null;
export {};
