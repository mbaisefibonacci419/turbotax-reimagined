import { FilingStatus, Income1099B, ScheduleDResult } from '../types/index.js';
/**
 * Calculate Schedule D — Capital Gains and Losses.
 *
 * Separates transactions into short-term (held ≤ 1 year) and long-term (held > 1 year).
 * Net capital loss is deductible up to $3,000 ($1,500 MFS) against ordinary income.
 * Excess loss carries forward to future years, preserving ST/LT character.
 *
 * Carryforward from prior year preserves character:
 *   - ST carryforward applied as additional short-term loss
 *   - LT carryforward applied as additional long-term loss
 *
 * For backward compatibility, if only the legacy single `carryforward` value is
 * provided (no ST/LT split), it is treated entirely as short-term.
 *
 * When computing the new carryforward, short-term net losses absorb the deduction
 * first, then long-term net losses. This preserves character for future years.
 *
 * @authority
 *   IRC: Section 1(h) — maximum capital gains rate
 *   IRC: Section 1211(b) — limitation on capital losses for individuals
 *   IRC: Section 1212(b) — capital loss carryforward for individuals
 *   Form: Schedule D (Form 1040)
 *   Pub: Publication 550 — Investment Income and Expenses
 * @scope Capital gains/losses with $3k loss limit and carryforward
 * @limitations No Form 4797 (Section 1231/1245/1250 recapture)
 */
export declare function calculateScheduleD(transactions: Income1099B[], carryforward: number, filingStatus: FilingStatus, carryforwardST?: number, carryforwardLT?: number, capitalGainDistributions?: number): ScheduleDResult;
