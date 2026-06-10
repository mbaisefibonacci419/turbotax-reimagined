/**
 * Form 5329 — Additional Taxes on Qualified Retirement Plans
 *
 * Part I:  Early distribution penalty (10% on distributions with code 1).
 *          Supports IRC §72(t)(2) partial exceptions — when the 1099-R has
 *          distribution code 1 but the taxpayer qualifies for an exception
 *          (education, first-time homebuyer, medical, etc.), the exception
 *          amount is subtracted before applying the 10% penalty.
 *          Also includes SECURE 2.0 emergency personal expense exemption
 *          (IRC §72(t)(2)(I)) — up to $1,000/year penalty-free.
 *
 * Part V:  Excess contribution penalties (6% excise on IRA/HSA excess).
 *
 * @scope Current-year excess contributions and early distribution penalties.
 * @limitations Does not model correction windows (withdrawal before tax filing
 *   deadline to avoid penalty), prior-year carryforward of uncorrected excess,
 *   or interaction with returned contributions. Documented as simplified
 *   implementation.
 * @authority
 *   IRC §4973(a) — IRA excess contributions
 *   IRC §4973(g) — HSA excess contributions
 *   IRC §72(t)(1) — 10% early withdrawal penalty
 *   IRC §72(t)(2) — Exceptions to early distribution penalty
 *   IRC §72(t)(2)(I) — SECURE 2.0 emergency personal expense exception
 */
import { ExcessContributionInfo, EmergencyDistributionInfo, Form5329Result, Income1099R } from '../types/index.js';
/**
 * Calculate Form 5329 penalties: early distribution penalty + excess contribution excise.
 *
 * @param excessContributions - IRA/HSA excess contribution amounts
 * @param income1099R - All 1099-R distributions (for early distribution penalty)
 * @param emergencyDistributions - SECURE 2.0 emergency distribution info
 */
export declare function calculateForm5329(excessContributions: ExcessContributionInfo, income1099R?: Income1099R[], emergencyDistributions?: EmergencyDistributionInfo): Form5329Result;
