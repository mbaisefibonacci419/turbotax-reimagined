import { CasualtyLossInfo, CasualtyLossResult } from '../types/index.js';
/**
 * Calculate Form 4684 — Casualties and Thefts.
 *
 * Post-TCJA: personal-use property casualty losses are only deductible if
 * attributable to a federally declared disaster (IRC §165(h)(5)).
 *
 * Per-property loss = min(decrease in FMV, adjusted basis) - insurance.
 * Personal losses: subtract $100 per casualty event, then 10% of AGI.
 * Business/income-producing losses: direct deduction, no floors.
 *
 * @authority
 *   IRC §165(c)(3) — Losses of individuals from casualties
 *   IRC §165(h)(1) — $100 per-casualty floor
 *   IRC §165(h)(2) — 10% AGI floor for personal casualty losses
 *   IRC §165(h)(5) — TCJA limitation to federally declared disasters
 *   Form: Form 4684
 */
export declare function calculateForm4684(losses: CasualtyLossInfo[], agi: number): CasualtyLossResult;
