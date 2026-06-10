/**
 * HSA Distributions (1099-SA) — Health Savings Account Distributions
 *
 * Form 1099-SA reports distributions from an HSA (Health Savings Account).
 *
 * Tax treatment:
 * - Distribution Code 1: Normal distribution — taxable if NOT used for qualified medical expenses
 * - Distribution Code 2: Excess contributions removed — taxable
 * - Distribution Code 3: Disability — not taxable, no penalty
 * - Distribution Code 4: Death (non-spouse beneficiary) — taxable
 * - Distribution Code 5: Prohibited transaction — taxable + 20% penalty
 *
 * Penalty:
 * - 20% additional tax on taxable HSA distributions (not 10%)
 * - Penalty does NOT apply if: age 65+, disabled (code 3), or death distribution to spouse
 *
 * Qualified medical expenses: If the distribution was used entirely for qualified medical
 * expenses, the entire amount is tax-free. The user must confirm this.
 */
import { Income1099SA } from '../types/index.js';
export interface HSADistributionResult {
    grossDistribution: number;
    taxableAmount: number;
    penaltyAmount: number;
    isQualifiedMedical: boolean;
    distributionCode: string;
}
/**
 * Calculate the tax consequences of a single HSA distribution.
 *
 * @authority
 *   IRC: Section 223(f)(2) — tax treatment of HSA distributions
 *   IRC: Section 223(f)(4) — additional tax on distributions not used for qualified medical expenses
 *   Form: Form 1099-SA; Form 8889, Part II
 * @scope HSA distribution tax consequences (taxable + 20% penalty)
 * @limitations None
 */
export declare function calculateHSADistribution(dist: Income1099SA): HSADistributionResult;
/**
 * Aggregate multiple HSA distributions.
 *
 * @authority
 *   IRC: Section 223(f)(2) — tax treatment of HSA distributions
 *   IRC: Section 223(f)(4) — additional tax on distributions not used for qualified medical expenses
 *   Form: Form 1099-SA; Form 8889, Part II
 * @scope HSA distribution tax consequences (taxable + 20% penalty)
 * @limitations None
 */
export declare function aggregateHSADistributions(distributions: Income1099SA[], isAge65OrOlder?: boolean): {
    totalTaxable: number;
    totalPenalty: number;
    results: HSADistributionResult[];
};
