/**
 * Plausibility Warnings — WARN-level validations for implausible values.
 *
 * Inspired by IRS Direct File Fact Graph's distinction between ERROR
 * (blocks submission) and WARN (flags implausibility).
 *
 * These checks catch likely data-entry mistakes without blocking
 * calculation. They surface as yellow warnings in the wizard and
 * review summary.
 *
 * @authority General — thresholds based on IRS audit triggers and
 *   statistical norms from SOI (Statistics of Income) data.
 */
import type { TaxReturn } from '../types/index.js';
export interface PlausibilityWarning {
    /** Warning category for grouping. */
    category: 'income' | 'deduction' | 'credit' | 'general';
    /** Dot-path into TaxReturn (e.g., "w2Income[0].wages"). */
    field: string;
    /** Wizard step ID this warning maps to. */
    stepId: string;
    /** Human-readable warning message. */
    message: string;
    /** Always 'warn' — never blocks calculation. */
    severity: 'warn';
    /** The actual value that triggered the warning. */
    value: number;
    /** The threshold it exceeded. */
    threshold: number;
    /** Index within an array (for per-item warnings). */
    itemIndex?: number;
    /** Human-readable item label (e.g., employer name). */
    itemLabel?: string;
}
/**
 * Check a TaxReturn for implausible (but not invalid) values.
 * Pure function — no side effects, deterministic output.
 *
 * @param taxReturn The tax return to check
 * @param agi Optional AGI for ratio-based checks (from CalculationResult)
 * @returns Array of plausibility warnings (may be empty)
 */
export declare function checkPlausibility(taxReturn: TaxReturn, agi?: number): PlausibilityWarning[];
