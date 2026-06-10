/**
 * Maryland State Tax Constants — Tax Year 2025
 *
 * Sources:
 *   - MD Tax-General Article §10-105 — Maryland income tax rates
 *   - MD Tax-General Article §10-207 — Standard deduction
 *   - MD Tax-General Article §10-211 — Personal exemptions
 *   - Comptroller of Maryland — County income tax rates (TY2025)
 *   - MD Form 502 — Maryland Resident Income Tax Return
 */
import { StateTaxBracket } from '../../types/index.js';
export declare const MD_BRACKETS: Record<string, StateTaxBracket[]>;
export declare const MD_STANDARD_DEDUCTION: Record<string, number>;
export declare const MD_PERSONAL_EXEMPTION = 3200;
export declare const MD_EXEMPTION_PHASEOUT_START: Record<string, number>;
export declare const MD_COUNTY_RATES: Record<string, number>;
export declare const MD_DEFAULT_COUNTY_RATE = 0.0307;
export declare const MD_EITC_REFUNDABLE_RATE = 0.45;
