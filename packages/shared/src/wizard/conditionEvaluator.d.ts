/**
 * Declarative Condition Evaluator
 *
 * Evaluates StepCondition descriptors against a TaxReturn object.
 * Also provides `describeCondition()` for human-readable English
 * descriptions (used by AI chat and audit logs).
 *
 * Pure functions, zero dependencies beyond types.
 */
import type { TaxReturn, CalculationResult } from '../types/index.js';
import type { StepCondition } from './conditionTypes.js';
/**
 * Evaluate a declarative step condition against a TaxReturn.
 * Returns true if the step should be visible, false if hidden.
 *
 * When a CalculationResult is provided, AGI-based conditions (agi_lte)
 * can be evaluated. Without it, those conditions default to true.
 */
export declare function evaluateCondition(condition: StepCondition, taxReturn: TaxReturn, calculation?: CalculationResult | null): boolean;
/**
 * Describe a condition in human-readable English.
 * Used by the AI chat to explain why a step is visible/hidden,
 * and for flow audit documentation.
 */
export declare function describeCondition(condition: StepCondition): string;
