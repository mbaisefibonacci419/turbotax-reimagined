/**
 * SensitivityView — config bar + chart + table for sensitivity analysis.
 *
 * Select a variable, range, and output metric. See how the output changes
 * as the input varies across the range.
 *
 * Uses Syncfusion SplineArea chart with crosshair tracking + strip line marker.
 */
import type { TaxReturn } from '@nimbus/engine';
import type { ScenarioLabAction, SensitivityConfig } from '../types';
interface SensitivityViewProps {
    taxReturn: TaxReturn;
    config: SensitivityConfig | null;
    dispatch: React.Dispatch<ScenarioLabAction>;
    overrides: Map<string, unknown>;
}
export default function SensitivityView({ taxReturn, config, dispatch, overrides }: SensitivityViewProps): import("react").JSX.Element;
export {};
