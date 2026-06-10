import type { CalculationResult } from '@nimbus/engine';
export interface GroundingDiscrepancy {
    mentionedAmount: number;
    closestKnownAmount: number;
    field: string;
    divergencePercent: number;
}
export interface GroundingResult {
    verified: boolean;
    discrepancies: GroundingDiscrepancy[];
    footnote: string | null;
}
export declare function validateResponseGrounding(responseText: string, calculation: CalculationResult | null): GroundingResult;
