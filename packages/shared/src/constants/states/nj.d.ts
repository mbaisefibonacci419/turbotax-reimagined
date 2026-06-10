/**
 * New Jersey State Tax Constants — Tax Year 2025
 *
 * Sources:
 *   - N.J.S.A. 54A:2-1 — New Jersey Gross Income Tax Act
 *   - NJ Division of Taxation — Tax Rate Schedules
 *   - NJ-1040 Instructions — Personal exemptions and deductions
 */
import { StateTaxBracket } from '../../types/index.js';
export declare const NJ_BRACKETS: Record<string, StateTaxBracket[]>;
export declare const NJ_PERSONAL_EXEMPTION = 1000;
export declare const NJ_DEPENDENT_EXEMPTION = 1500;
export declare const NJ_PROPERTY_TAX_DEDUCTION_MAX = 15000;
export declare const NJ_PROPERTY_TAX_CREDIT = 50;
export declare const NJ_RETIREMENT_EXCLUSION_THRESHOLD: Record<string, number>;
export declare const NJ_RETIREMENT_EXCLUSION_MAX: Record<string, number>;
