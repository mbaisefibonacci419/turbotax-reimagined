/**
 * Alabama State Tax Constants --- Tax Year 2025
 *
 * Sources:
 *   - Ala. Code SS 40-18-5 --- Alabama income tax rates
 *   - Ala. Code SS 40-18-15 --- Standard deduction
 *   - Ala. Code SS 40-18-19 --- Personal exemptions
 *   - Alabama Form 40 Instructions pp.9-10 (2025 standard deduction table)
 *
 * Key Alabama characteristics:
 *   - UNIQUE: Taxpayers deduct federal income tax paid from Alabama taxable income
 *   - Same 3 brackets for all filing statuses: 2%, 4%, 5%
 *   - Standard deduction phases down in $500 steps ($250 for MFS) when AGI exceeds threshold
 *   - Social Security fully exempt
 *   - No state EITC
 */
import { StateTaxBracket } from '../../types/index.js';
export declare const AL_BRACKETS: Record<string, StateTaxBracket[]>;
export interface ALStandardDeductionParams {
    base: number;
    phaseoutStart: number;
    stepSize: number;
    reductionPerStep: number;
    floor: number;
}
export declare const AL_STANDARD_DEDUCTION: Record<string, ALStandardDeductionParams>;
export declare const AL_PERSONAL_EXEMPTION: Record<string, number>;
export declare const AL_DEPENDENT_EXEMPTION_TIERS: {
    maxAGI: number;
    amount: number;
}[];
export declare const AL_DEPENDENT_EXEMPTION_FLOOR = 300;
