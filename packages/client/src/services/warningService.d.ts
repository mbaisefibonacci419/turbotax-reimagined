/**
 * Centralized warning computation service.
 *
 * Pure function that evaluates all saved tax return data and returns
 * a structured list of active validation warnings grouped by wizard step.
 *
 * Reuses existing validators from dateValidation.ts — no duplicated logic.
 *
 * HOW TO ADD A NEW WARNING:
 * 1. Add a validation function to dateValidation.ts (or inline if simple)
 * 2. Add a new section in getActiveWarnings() below, before the "Group by step" block
 * 3. Push to the `warnings` array with the correct stepId (must match WIZARD_STEPS id)
 * 4. For array items (e.g. W-2s), use forEach and include itemIndex + itemLabel
 * 5. That's it — sidebar dots and review card pick it up automatically
 *
 * Example — flag W-2 withholding that exceeds wages:
 *   (taxReturn.w2Income || []).forEach((w2, idx) => {
 *     if (w2.federalTaxWithheld > w2.wages) {
 *       warnings.push({
 *         stepId: 'w2_income',
 *         field: `w2Income[${idx}].federalTaxWithheld`,
 *         message: 'Federal tax withheld exceeds wages — please verify.',
 *         itemIndex: idx,
 *         itemLabel: w2.employerName || `W-2 ${idx + 1}`,
 *       });
 *     }
 *   });
 */
import type { TaxReturn, CalculationResult } from '@nimbus/engine';
export interface ValidationWarning {
    stepId: string;
    field: string;
    message: string;
    itemIndex?: number;
    itemLabel?: string;
}
export interface WarningsByStep {
    stepId: string;
    stepLabel: string;
    warnings: ValidationWarning[];
}
/**
 * Compute all active validation warnings for a tax return.
 * Pure function — no side effects, deterministic output.
 *
 * When a CalculationResult is provided, also runs plausibility checks
 * (e.g., W-2 wages > $1M, charitable > 50% of AGI). These are
 * WARN-level checks that never block calculation.
 */
export declare function getActiveWarnings(taxReturn: TaxReturn, calculation?: CalculationResult | null): WarningsByStep[];
/** Check if a specific step has any warnings. */
export declare function hasWarningsForStep(stepId: string, warnings: WarningsByStep[]): boolean;
/** Get total warning count across all steps. */
export declare function getTotalWarningCount(warnings: WarningsByStep[]): number;
