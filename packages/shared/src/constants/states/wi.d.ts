/**
 * Wisconsin State Tax Constants — Tax Year 2025
 *
 * Sources:
 *   - Wis. Stat. §71.06 — Wisconsin income tax rates
 *   - Wis. Stat. §71.05(22) — Standard deduction sliding scale
 *   - Wis. Stat. §71.05(23) — Personal exemptions
 *   - Wisconsin Form 1 — Individual Income Tax Return
 *   - Wisconsin Schedule WD — Capital Gains and Losses
 *   - WI DOR Tax Bulletin — 2025 indexed amounts
 */
import { StateTaxBracket } from '../../types/index.js';
export declare const WI_BRACKETS: Record<string, StateTaxBracket[]>;
export interface WIStandardDeductionParams {
    baseAmount: number;
    phaseoutStart: number;
    reductionRate: number;
    /** Optional second-stage phaseout (HoH only for TY2025). */
    stage2?: {
        phaseoutStart: number;
        reductionRate: number;
    };
}
export declare const WI_STANDARD_DEDUCTION: Record<string, WIStandardDeductionParams>;
export declare const WI_PERSONAL_EXEMPTION = 700;
export declare const WI_DEPENDENT_EXEMPTION = 700;
export declare const WI_EITC_RATES: Record<number, number>;
