/**
 * Hawaii State Tax Constants — Tax Year 2025
 *
 * Sources:
 *   - HRS §235-51 — Hawaii income tax rates
 *   - HRS §235-54 — Personal exemptions
 *   - HRS §235-55.85 — Food/excise tax credit ($220/exemption, doubled by HB 2404)
 *   - HRS §235-110.91 — Hawaii EITC (40% of federal, doubled by HB 2404)
 *   - Hawaii Form N-11 — Individual Income Tax Return (Resident)
 *
 * Key Hawaii characteristics:
 *   - 12 progressive brackets (most in the US), top rate 11%
 *   - Filing-status-specific brackets (Single vs MFJ differ)
 *   - Social Security benefits fully exempt
 *   - Refundable food/excise tax credit ($220 per exemption, HB 2404)
 *   - State EITC: 40% of federal EITC (refundable, HB 2404)
 */
import { StateTaxBracket } from '../../types/index.js';
export declare const HI_BRACKETS: Record<string, StateTaxBracket[]>;
export declare const HI_STANDARD_DEDUCTION: Record<string, number>;
export declare const HI_PERSONAL_EXEMPTION = 1144;
export declare const HI_DEPENDENT_EXEMPTION = 1144;
export interface HIFoodCreditTier {
    maxAGI: number;
    credit: number;
}
export declare const HI_FOOD_CREDIT_SINGLE: HIFoodCreditTier[];
export declare const HI_FOOD_CREDIT_OTHER: HIFoodCreditTier[];
export declare const HI_FOOD_EXCISE_CREDIT_PER_EXEMPTION = 220;
export declare const HI_EITC_MATCH_RATE = 0.4;
