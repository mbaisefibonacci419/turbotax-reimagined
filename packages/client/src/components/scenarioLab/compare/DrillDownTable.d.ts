/**
 * DrillDownTable — expandable per-line diff table for Compare view.
 *
 * Shows per-category breakdown with per-scenario values and delta coloring.
 */
import type { CalculationResult } from '@nimbus/engine';
import type { Scenario } from '../types';
interface DrillDownTableProps {
    scenarios: Scenario[];
    baseResult: CalculationResult;
    scenarioResults: Map<string, CalculationResult>;
}
export default function DrillDownTable({ scenarios, baseResult, scenarioResults }: DrillDownTableProps): import("react").JSX.Element;
export {};
