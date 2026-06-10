/**
 * ComparisonDashboard — full-width compare view showing all scenarios side by side.
 *
 * - Column headers with colored scenario labels and override summaries
 * - MetricComparisonRows: each metric as a full-width row with per-scenario values
 * - Side-by-side waterfalls
 * - Bracket overlay
 * - Drill-down table
 */
import type { CalculationResult, FilingStatus } from '@nimbus/engine';
import type { Scenario, DeltaMap } from '../types';
interface ComparisonDashboardProps {
    scenarios: Scenario[];
    baseResult: CalculationResult;
    scenarioResults: Map<string, CalculationResult>;
    deltas: Map<string, DeltaMap>;
    baseFilingStatus: FilingStatus;
}
export default function ComparisonDashboard({ scenarios, baseResult, scenarioResults, deltas, baseFilingStatus, }: ComparisonDashboardProps): import("react").JSX.Element | null;
export {};
