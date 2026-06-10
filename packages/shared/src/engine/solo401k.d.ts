import { Solo401kInput, Solo401kResult, SEPIRAInput, SEPIRAResult } from '../types/index.js';
/**
 * Calculate Solo 401(k) contribution limits and applied amounts.
 *
 * @authority
 *   IRC §402(g) — Elective deferral limit ($23,500 for 2025)
 *   IRC §414(v)(2)(B) — Catch-up contributions (age 50+, $7,500)
 *   IRC §414(v)(2)(E) — Super catch-up (ages 60-63, $11,250, SECURE 2.0)
 *   IRC §415(c) — Annual additions limit ($70,000 for 2025)
 *   IRC §401(d)(1) — SE individuals treated as employee+employer
 *   IRS Publication 560 — Rate table for self-employed
 *
 * @scope Self-employed individuals (sole proprietors, single-member LLCs).
 * @limitations Does not handle:
 *   - Multiple businesses each with Solo 401(k) plans
 *   - Controlled group / common ownership aggregation (IRC §414(b)-(c))
 */
export declare function calculateSolo401kLimits(input: Solo401kInput): Solo401kResult;
/**
 * Calculate SEP-IRA contribution limits.
 *
 * @authority
 *   IRC §408(k) — Simplified Employee Pension requirements
 *   IRC §404(h)(1)(C) — 25% of compensation limit
 *   IRC §402(h)(2) — Contribution cap ($70,000 for 2025)
 *   IRC §401(a)(17) — Compensation cap ($350,000 for 2025)
 *   IRS Publication 560 — Self-employed rate table (20% effective rate)
 *
 * @scope Self-employed individuals using SEP-IRA.
 * @limitations Does not handle employees of the self-employed person.
 */
export declare function calculateSEPIRALimits(input: SEPIRAInput): SEPIRAResult;
