/**
 * Deduction Finder — Return Context Builder
 *
 * Maps the full TaxReturn + CalculationResult into a slim ReturnContext
 * object for pattern gating. Pure function, no side effects.
 */
import type { TaxReturn, CalculationResult } from '@nimbus/engine';
import type { ReturnContext } from './deductionFinderTypes';
export declare function buildReturnContext(taxReturn: TaxReturn, calculation: CalculationResult | null): ReturnContext;
