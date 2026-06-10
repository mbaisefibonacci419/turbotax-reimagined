/**
 * TraceBuilder — fluent utility for building calculation traces.
 *
 * Inspired by IRS Direct File Fact Graph's Expression.explain() capability.
 * Wraps existing engine assignments so traces can be added incrementally
 * without restructuring calculation functions.
 *
 * Usage in engine functions:
 *   const tb = createTraceBuilder(traceOptions?.enabled ?? false);
 *   const totalWages = tb.trace('form1040.line1a', 'Total W-2 Wages', sum, {
 *     authority: 'Form 1040, Line 1a',
 *     inputs: w2s.map(w => ({ lineId: `w2.wages`, label: w.employer, value: w.wages })),
 *   });
 *   // totalWages === sum (pass-through)
 *
 * When tracing is disabled, the NoOpTraceBuilder returns the value immediately
 * with zero object allocations.
 */
import type { CalculationTrace, TraceInput } from '../types/index.js';
export interface TraceEntryOptions {
    formula?: string;
    authority?: string;
    inputs?: TraceInput[];
    children?: CalculationTrace[];
    note?: string;
}
/**
 * Records calculation traces during engine execution.
 * Call `trace()` to record a computation and pass through the value.
 * Call `build()` at the end to collect all recorded traces.
 */
export declare class TraceBuilder {
    private traces;
    /**
     * Record a trace entry and return the value unchanged (pass-through).
     * This allows wrapping existing assignments:
     *   const x = tb.trace('id', 'label', computedValue, { ... });
     */
    trace(lineId: string, label: string, value: number, opts?: TraceEntryOptions): number;
    /** Collect all recorded traces. */
    build(): CalculationTrace[];
}
/**
 * No-op trace builder — returns values immediately with zero overhead.
 * Used when tracing is disabled (the default path).
 */
export declare class NoOpTraceBuilder extends TraceBuilder {
    trace(_lineId: string, _label: string, value: number, _opts?: TraceEntryOptions): number;
    build(): CalculationTrace[];
}
/**
 * Factory: create the appropriate trace builder based on whether tracing is enabled.
 */
export declare function createTraceBuilder(enabled: boolean): TraceBuilder;
