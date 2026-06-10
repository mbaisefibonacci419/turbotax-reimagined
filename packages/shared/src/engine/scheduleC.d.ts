import { TaxReturn, ScheduleCResult, CostOfGoodsSold } from '../types/index.js';
/**
 * Calculate Schedule C (Profit or Loss from Business).
 * Full Lines 1-31 pipeline including gross receipts, returns & allowances,
 * cost of goods sold, and tiered meals limitation (50%/80%/100%).
 *
 * Supports multiple businesses (Sprint 15+). When multiple businesses are
 * defined, expenses are routed by businessId and per-business results are
 * included. Home office and vehicle deductions are applied once at the
 * aggregate level (not per-business).
 *
 * Backward compatibility: If `businesses` is empty but `business` is defined,
 * the single business is treated as a one-element array. Old data without
 * COGS, returns & allowances, or meals split continues to work unchanged.
 *
 * @authority
 *   IRC: Section 162 — trade or business expenses
 *   IRC: Section 274(n)(1) — 50% limitation on meal expenses (standard)
 *   IRC: Section 274(n)(3) — 80% limitation for DOT hours-of-service workers
 *   IRC: Section 280A(c) — home office deduction
 *   IRC: Section 274(d) — substantiation for vehicle expenses
 *   Form: Schedule C (Form 1040), Lines 1-31 + Part III (COGS)
 *   Pub: Publication 334 — Tax Guide for Small Business
 *   Pub: Publication 463 — Travel, Gift, and Car Expenses (meals limitation)
 * @scope Business profit/loss with home office, vehicle, and Form 4562 depreciation deductions
 */
export declare function calculateScheduleC(taxReturn: TaxReturn): ScheduleCResult;
/**
 * Compute Cost of Goods Sold — Schedule C Part III (Lines 35-42).
 *
 * Line 40 = beginningInventory + purchases + costOfLabor + materialsAndSupplies + otherCosts
 * Line 42 = Line 40 - endingInventory (COGS, floored at 0)
 *
 * @authority
 *   Form: Schedule C Part III
 *   Pub: Publication 334 — Chapter 6 (How to Figure Cost of Goods Sold)
 */
export declare function computeCOGS(cogs?: CostOfGoodsSold): number;
