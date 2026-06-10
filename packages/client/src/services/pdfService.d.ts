import { TaxReturn, CalculationResult } from '@nimbus/engine';
import type { StateCalculationResult } from '@nimbus/engine';
export declare function generateForm1040PDF(taxReturn: TaxReturn, calc: CalculationResult): Promise<Uint8Array>;
export declare function generateScheduleCPDF(taxReturn: TaxReturn, calc: CalculationResult): Promise<Uint8Array>;
export declare function generateScheduleSEPDF(taxReturn: TaxReturn, calc: CalculationResult): Promise<Uint8Array>;
/**
 * Generate a combined PDF with all applicable forms.
 */
export declare function generateScheduleDPDF(taxReturn: TaxReturn, calc: CalculationResult): Promise<Uint8Array>;
export declare function generateStateTaxSummaryPDF(sr: StateCalculationResult): Promise<Uint8Array>;
export declare function generateFullReturnPDF(taxReturn: TaxReturn, calc: CalculationResult): Promise<Uint8Array>;
