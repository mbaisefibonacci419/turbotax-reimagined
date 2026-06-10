import type { Scenario, ScenarioLabAction } from './types';
interface ScenarioTabBarProps {
    scenarios: Scenario[];
    activeScenarioId: string | null;
    dispatch: React.Dispatch<ScenarioLabAction>;
}
export default function ScenarioTabBar({ scenarios, activeScenarioId, dispatch }: ScenarioTabBarProps): import("react").JSX.Element;
export {};
