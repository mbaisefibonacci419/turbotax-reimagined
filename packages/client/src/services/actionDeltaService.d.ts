import type { CalculationResult } from '@nimbus/engine';
export interface MetricDelta {
    label: string;
    before: number;
    after: number;
    delta: number;
    direction: 'up' | 'down' | 'unchanged';
}
export interface ActionDeltaResult {
    significant: boolean;
    deltas: MetricDelta[];
    summaryText: string;
}
export declare function computeActionDelta(before: CalculationResult | null, after: CalculationResult | null): ActionDeltaResult;
