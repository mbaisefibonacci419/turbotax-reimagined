/**
 * Connecticut State Tax Constants — Tax Year 2025
 *
 * Sources:
 *   - CT Gen. Stat. §12-700 — Connecticut income tax rates
 *   - CT Gen. Stat. §12-702 — Personal exemptions
 *   - CT Gen. Stat. §12-703 — Personal tax credit (Table E)
 *   - CT Gen. Stat. §12-700(b) — 2% rate phase-out (Table C) and benefit recapture (Table D)
 *   - CT Gen. Stat. §12-704e — Connecticut EITC (40% of federal EITC + $250/child for TY2025)
 *   - CT DRS Form CT-1040 TCS — Tax Calculation Schedule
 *   - CT DRS TPG-211 (2025) — Withholding calculation rules
 */
import { StateTaxBracket } from '../../types/index.js';
export declare const CT_BRACKETS: Record<string, StateTaxBracket[]>;
export declare const CT_PERSONAL_EXEMPTION: Record<string, number>;
export declare const CT_EXEMPTION_PHASEOUT_START: Record<string, number>;
export interface CTTableCParams {
    startThreshold: number;
    bandWidth: number;
    incrementPerBand: number;
    maxAddBack: number;
}
export declare const CT_TABLE_C: Record<string, CTTableCParams>;
export interface CTTableDParams {
    phase1: {
        startThreshold: number;
        bandWidth: number;
        incrementPerBand: number;
        plateau: number;
        plateauEnd: number;
    };
    phase2: {
        startThreshold: number;
        bandWidth: number;
        incrementPerBand: number;
        max: number;
    };
}
export declare const CT_TABLE_D: Record<string, CTTableDParams>;
export interface CTTableETier {
    maxAGI: number;
    decimal: number;
}
export declare const CT_TABLE_E: Record<string, CTTableETier[]>;
export declare const CT_EITC_MATCH_RATE = 0.4;
export declare const CT_EITC_CHILD_BONUS = 250;
