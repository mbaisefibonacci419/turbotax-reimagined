import { Income1099C, Form982Info, Form982Result } from '../types/index.js';
/**
 * Calculate taxable cancellation of debt income.
 *
 * When debt is cancelled, the amount is generally taxable income (Schedule 1, Line 8z).
 * Form 982 allows exclusion if the taxpayer was insolvent or in bankruptcy.
 *
 * Insolvency exclusion: Excluded amount = min(total cancelled, insolvency amount)
 * where insolvency amount = total liabilities - total assets (FMV) immediately before discharge.
 *
 * Bankruptcy exclusion: Full exclusion if discharged in Title 11 bankruptcy (takes precedence).
 *
 * Qualified principal residence debt and qualified farm debt have separate exclusion rules.
 *
 * @authority
 *   IRC: Section 61(a)(11) — gross income includes income from discharge of indebtedness
 *   IRC: Section 108 — income from discharge of indebtedness (exclusions)
 *   IRC: Section 108(b)(2) — reduction of tax attributes (mandatory order)
 *   Form: Form 982
 * @scope COD income with exclusions (bankruptcy, insolvency, QPRI, farm)
 * @limitations General business credit and minimum tax credit not tracked
 */
export declare function calculateCancellationOfDebt(forms1099C: Income1099C[], form982?: Form982Info): Form982Result;
/**
 * Compute Part II attribute reductions for Form 982.
 *
 * Per IRC §108(b)(2), when debt is excluded from income, the taxpayer must reduce
 * tax attributes in a mandatory order by the exclusion amount. This prevents a
 * double benefit (excluding income AND keeping the tax attributes).
 *
 * Mandatory order (§108(b)(2)):
 *   (A) NOL for the year + carryovers
 *   (B) General business credit carryover (not tracked — always 0)
 *   (C) Minimum tax credit (not tracked — always 0)
 *   (D) Net capital loss + carryover
 *   (E) Basis reduction under §1017
 *   (F) Passive activity loss / credit carryover
 *
 * The exclusion amount is allocated in this order until fully consumed.
 * Any remainder goes to basis reduction (Line 8).
 */
export declare function applyAttributeReduction(result: Form982Result, availableAttributes: {
    nol: number;
    capitalLoss: number;
    passiveActivityLoss: number;
}): Form982Result;
