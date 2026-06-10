import { FilingStatus, ItemizedDeductions, ScheduleAResult } from '../types/index.js';
/**
 * Calculate Schedule A (Itemized Deductions).
 * Applies AGI floors, SALT cap, mortgage interest limitation, charitable AGI limits,
 * and totals all categories.
 *
 * When per-item non-cash donation detail is provided (nonCashDonations array),
 * delegates charitable calculation to Form 8283 for proper Section A/B
 * classification, category-specific AGI limits, and carryforward processing.
 * Otherwise falls back to existing lump-sum charitable calculation.
 *
 * @authority
 *   IRC: Section 164(b)(6) — SALT deduction cap ($40k for 2025-2029, OBBBA)
 *   IRC: Section 163(h)(3) — qualified residence interest
 *   IRC: Section 170 — charitable contributions
 *   IRC: Section 170(f)(11) — Form 8283 substantiation requirements
 *   IRC: Section 213(a) — medical expenses (7.5% AGI floor)
 *   TCJA: Sections 11042-11043 — SALT cap and mortgage limit changes
 *   Form: Schedule A (Form 1040), Form 8283
 *   Pub: Publication 17, Chapter 21; Publication 526
 * @scope Itemized deductions with SALT cap, mortgage limit, charitable limits, Form 8283
 * @limitations No AMT preference items
 */
export declare function calculateScheduleA(deductions: ItemizedDeductions, agi: number, filingStatus: FilingStatus): ScheduleAResult;
