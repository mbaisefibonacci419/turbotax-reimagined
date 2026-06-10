/**
 * Full Form 1040 calculation — the main orchestrator.
 *
 * This is a thin orchestrator that delegates to section sub-orchestrators
 * in form1040Sections.ts. Each section reads from and writes to a shared
 * Form1040Context accumulator, keeping the data flow explicit.
 *
 * @authority
 *   IRC: Section 1 — tax imposed (rate tables)
 *   IRC: Section 63 — taxable income defined
 *   IRC: Section 62 — adjusted gross income defined
 *   Form: Form 1040
 * @scope Main orchestrator — assembles all schedules, computes total tax, payments, refund/owed
 * @limitations Does not include AMT Foreign Tax Credit or AMT NOL
 */
import { TaxReturn, CalculationResult } from '../types/index.js';
import type { TraceOptions } from '../types/index.js';
export type { Form1040Context } from './form1040Sections.js';
/**
 * Full Form 1040 calculation.
 * Takes a complete TaxReturn and produces the final calculation result.
 *
 * @param taxReturn The complete tax return data
 * @param traceOptions Optional — when { enabled: true }, generates a structured
 *   CalculationTrace tree explaining how each value was computed. Inspired by
 *   IRS Direct File Fact Graph's Expression.explain() capability.
 */
export declare function calculateForm1040(taxReturn: TaxReturn, traceOptions?: TraceOptions): CalculationResult;
