import type { TaxReturn, CalculationResult } from '@nimbus/engine';
import type { DeltaMap, UseScenarioLabReturn, ScenarioVariable } from './types';
export declare function applyOverrides(base: TaxReturn, overrides: Map<string, unknown>, variableDefs?: ScenarioVariable[]): TaxReturn;
export declare function diffResults(base: CalculationResult, scenario: CalculationResult): DeltaMap;
/**
 * Read-only snapshot of the current scenario lab state for external consumers
 * (e.g., chat context builder). Returns null if no scenarios exist.
 */
export declare function getScenarioLabSnapshot(): {
    scenarios: Array<{
        id: string;
        name: string;
        overrideCount: number;
    }>;
    deltas: Map<string, DeltaMap>;
} | null;
export declare function useScenarioLab(taxReturn: TaxReturn): UseScenarioLabReturn;
