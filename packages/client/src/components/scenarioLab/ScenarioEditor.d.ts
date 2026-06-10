import type { TaxReturn } from '@nimbus/engine';
import type { Scenario, ScenarioLabAction } from './types';
interface ScenarioEditorProps {
    taxReturn: TaxReturn;
    scenario: Scenario;
    dispatch: React.Dispatch<ScenarioLabAction>;
    expandedCategories: Set<string>;
    searchQuery: string;
}
export default function ScenarioEditor({ taxReturn, scenario, dispatch, expandedCategories, searchQuery }: ScenarioEditorProps): import("react").JSX.Element;
export {};
