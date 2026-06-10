/**
 * Flat-Tax State Constants — Tax Year 2025
 *
 * These states levy a single (flat) rate on taxable income, with varying
 * deduction and exemption rules.
 *
 * Sources:
 *   - PA: 72 P.S. §7302 — 3.07% flat rate
 *   - IL: 35 ILCS 5/201(b)(5.3) — 4.95% flat rate
 *   - MA: M.G.L. c.62 §4 — 5.0% Part A / 8.5% ST cap gains / 5% LT cap gains
 *   - NC: N.C.G.S. §105-153.7 — 4.25% flat rate (reduced from 4.5% for TY2025)
 *   - MI: MCL §206.51 — 4.25% flat rate
 *   - IN: IC §6-3-2-1 — 3.0% flat rate (reduced from 3.05% for TY2025)
 *   - CO: C.R.S. §39-22-104 — 4.4% flat rate (starts from federal taxable income)
 *   - KY: KRS §141.020 — 4.0% flat rate
 *   - UT: U.C.A. §59-10-104 — 4.5% flat rate with taxpayer credit (reduced from 4.65% for TY2025)
 *   - GA: O.C.G.A. §48-7-20 — 5.19% flat rate (HB 111, retroactive for TY2025)
 *   - AZ: A.R.S. §43-1011 — 2.5% flat rate (Prop 208/211 consolidated)
 *   - LA: La. R.S. 47:32 — 3.0% flat rate (Act 11 reform, TY2025)
 *   - IA: Iowa Code §422.5 — 3.8% flat rate (TY2025)
 */
export interface FlatTaxStateConfig {
    stateCode: string;
    rate: number;
    /** Standard deduction by filing status key, or a single value for all. */
    standardDeduction: Record<string, number>;
    /** Personal exemption per person (taxpayer + spouse). 0 if not applicable. */
    personalExemption: number;
    /** Additional dependent exemption per dependent. 0 if not applicable. */
    dependentExemption: number;
    /** If true, start from federal taxable income instead of federal AGI. */
    usesFederalTaxableIncome?: boolean;
    /** If true, skip Social Security subtraction (state taxes SS or uses different base). */
    skipSocialSecuritySubtraction?: boolean;
    /** UT-specific: taxpayer credit rate applied to (federal std deduction + personal exemptions). */
    taxpayerCreditRate?: number;
    /** MA-specific: short-term capital gains rate (8.5% effective TY2023). */
    shortTermCapitalGainsRate?: number;
    /** MA-specific: long-term capital gains rate (5%). */
    longTermCapitalGainsRate?: number;
    /** MA-specific: long-term collectibles capital gains rate (12%). */
    collectiblesCapitalGainsRate?: number;
    /** MA-specific: 4% surtax on income over threshold (Question 1, M.G.L. c.62 §4(d)). */
    surtax?: {
        threshold: number;
        rate: number;
    };
    /** AZ-specific: aged exemption (deduction for filers 65+). */
    agedExemption?: number;
    /** AZ-specific: dependent credit per child (nonrefundable). */
    dependentCredit?: {
        under17: number;
        age17plus: number;
    };
    /** AZ-specific: AGI phaseout start for dependent credit. */
    dependentCreditPhaseout?: {
        single: number;
        married_joint: number;
    };
    /** Notes for special handling or UI display. */
    notes?: string;
}
export declare const FLAT_TAX_CONSTANTS: Record<string, FlatTaxStateConfig>;
export declare const MA_PERSONAL_EXEMPTION: Record<string, number>;
