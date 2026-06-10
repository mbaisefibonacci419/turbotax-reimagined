/**
 * useSensitivityData — hook for generating N-point sensitivity analysis.
 *
 * Chunks calculations across frames via requestIdleCallback to avoid
 * blocking the main thread. 100 points × ~2ms ≈ 200ms total.
 */
import type { TaxReturn } from '@nimbus/engine';
import type { SensitivityConfig } from '../types';
export interface SensitivityDataPoint {
    input: number;
    output: number;
    delta: number;
}
interface UseSensitivityDataReturn {
    data: SensitivityDataPoint[];
    isComputing: boolean;
    progress: number;
    currentValue: number;
    currentOutput: number;
}
export declare function useSensitivityData(taxReturn: TaxReturn, config: SensitivityConfig | null, overrides: Map<string, unknown>): UseSensitivityDataReturn;
export {};
