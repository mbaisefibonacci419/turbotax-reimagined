import type { CalculationResult, FilingStatus } from '@nimbus/engine';
import type { DeltaMap, ScenarioColor } from './types';
interface ScenarioResultPanelProps {
    baseResult: CalculationResult;
    scenarioResult: CalculationResult;
    delta: DeltaMap;
    baseFilingStatus?: FilingStatus;
    scenarioFilingStatus?: FilingStatus;
    scenarioName?: string;
    scenarioColor?: ScenarioColor;
}
export default function ScenarioResultPanel({ baseResult, scenarioResult, delta, baseFilingStatus, scenarioFilingStatus, scenarioName, scenarioColor }: ScenarioResultPanelProps): import("react").JSX.Element;
export {};
