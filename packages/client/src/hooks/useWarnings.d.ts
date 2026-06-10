import { ValidationWarning, WarningsByStep } from '../services/warningService';
/**
 * Hook that computes all active validation warnings for the current tax return.
 * Memoized — only recomputes when taxReturn or calculation changes.
 *
 * Passes the CalculationResult to getActiveWarnings() so that plausibility
 * checks (WARN-level, from the shared engine) can use AGI for ratio-based
 * thresholds (e.g., charitable > 50% of AGI).
 */
export declare function useWarnings(): WarningsByStep[];
/**
 * Hook that returns warnings indexed by step ID for O(1) lookups.
 * Used by StepSidebar to check if a step has warnings.
 */
/**
 * Hook that returns per-item warnings for a specific step, indexed by item position.
 * Used by step components to show warning badges on individual item cards.
 *
 * Returns an empty Map when the step has no per-item warnings.
 */
export declare function useItemWarnings(stepId: string): Map<number, ValidationWarning[]>;
export declare function useWarningsByStepId(): Map<string, WarningsByStep>;
