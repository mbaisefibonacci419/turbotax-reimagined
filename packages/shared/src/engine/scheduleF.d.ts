import { ScheduleFInfo, ScheduleFResult } from '../types/index.js';
/**
 * Calculate Schedule F (Profit or Loss from Farming).
 *
 * Schedule F is structurally similar to Schedule C — farm income minus farm
 * expenses yields net farm profit (or loss). Net farm profit flows to:
 *   - Form 1040 total income (Schedule 1, Line 6)
 *   - Schedule SE for self-employment tax (same as Schedule C)
 *
 * Income categories (Part I — Farm Income, Cash Method):
 *   - Sales of livestock and other resale items (Line 1)
 *   - Cost or basis of items in Line 1 (Line 2, subtracted)
 *   - Sales of livestock, produce, grains, and other farm products you raised (Line 4)
 *   - Cooperative distributions (1099-PATR) (Line 5a/5b)
 *   - Agricultural program payments (Line 6a/6b)
 *   - CCC loans (Line 7a/7b)
 *   - Crop insurance proceeds (Line 8a/8b)
 *   - Custom hire (machine work) income (Line 9)
 *   - Other farm income (Line 10)
 *
 * Expenses (Part II — Farm Expenses):
 *   22 expense categories (Lines 12-32) matching Schedule F line items.
 *
 * @authority
 *   IRC: Section 61 — gross income defined (farm income is gross income)
 *   IRC: Section 162 — trade or business expenses (farm expenses deductible)
 *   IRC: Section 175 — soil and water conservation expenditures
 *   IRC: Section 180 — expenditures for fertilizer
 *   Form: Schedule F (Form 1040), Lines 1-36
 * @scope Cash method Schedule F computation (income − expenses = net profit/loss)
 * @limitations Does not model accrual method, commodity credit loans in detail,
 *   or Form 4562 depreciation
 */
/**
 * Calculate Schedule F (Profit or Loss from Farming).
 *
 * @param info - Farm income and expense detail
 * @returns ScheduleFResult with gross income, total expenses, and net farm profit/loss
 */
export declare function calculateScheduleF(info: ScheduleFInfo): ScheduleFResult;
