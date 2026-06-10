import type { TaxReturn, CalculationResult, StateCalculationResult } from '@nimbus/engine';
import type { StateFormTemplate } from '@nimbus/engine';
/**
 * Fill a single state PDF form with data.
 */
export declare function fillStateForm(template: StateFormTemplate, taxReturn: TaxReturn, calc: CalculationResult, stateResult: StateCalculationResult, options?: {
    flatten?: boolean;
}): Promise<Uint8Array>;
/**
 * Generate a filled state form PDF for a given state result.
 * Returns null if no form template exists for the state.
 */
export declare function generateStateFormPDF(taxReturn: TaxReturn, calc: CalculationResult, stateResult: StateCalculationResult): Promise<Uint8Array | null>;
