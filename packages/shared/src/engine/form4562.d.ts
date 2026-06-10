import { DepreciationAsset, Form4562Result } from '../types/index.js';
/**
 * Calculate Form 4562 — Depreciation and Amortization (Parts I–IV).
 *
 * Computes Section 179 immediate expensing, bonus depreciation, and MACRS
 * regular depreciation for a registry of business assets. Returns per-asset
 * detail and aggregate totals that flow to Schedule C Line 13.
 *
 * Software assets (isSoftware: true) use 36-month straight-line amortization
 * per IRC §167(f)(1) instead of MACRS, and are reported on Form 4562 Line 16.
 *
 * @param assets        Array of depreciable business assets
 * @param businessIncome Tentative profit from the business (Section 179 income limit)
 * @returns Form4562Result with per-asset breakdowns and aggregate totals
 *
 * @authority
 *   IRC: Section 179 — Election to expense certain depreciable business assets
 *   IRC: Section 168 — Accelerated cost recovery system (MACRS)
 *   IRC: Section 168(k) — Special depreciation allowance (bonus depreciation)
 *   IRC: Section 167(f)(1) — Computer software (36-month straight-line)
 *   Form: Form 4562 — Depreciation and Amortization
 *   Pub: Publication 946 — How to Depreciate Property
 * @scope GDS half-year and mid-quarter conventions. Software amortization. No ADS.
 */
export declare function calculateForm4562(assets: DepreciationAsset[], businessIncome: number): Form4562Result;
/**
 * Determine the calendar quarter from a date string.
 * Returns 1-4 (Q1 = Jan–Mar, Q2 = Apr–Jun, Q3 = Jul–Sep, Q4 = Oct–Dec).
 */
export declare function getQuarter(dateInService?: string): 1 | 2 | 3 | 4;
/**
 * Detect whether the mid-quarter convention is required for current-year assets.
 *
 * IRC §168(d)(3): The mid-quarter convention applies if the aggregate bases
 * of property placed in service during the last 3 months of the tax year
 * EXCEED 40% of the aggregate bases of all property placed in service during
 * the tax year. "Exceed" means strictly greater than 40%.
 *
 * Per Treas. Reg. §1.168(d)-1(b)(4)(ii), the basis used for the 40% test is
 * the depreciable basis AFTER subtracting Section 179 elected amounts (but
 * before bonus depreciation).
 *
 * Only current-year (year index = 0) assets are considered.
 * Assumes calendar-year taxpayer — "last 3 months" = Oct–Dec (Q4).
 */
export declare function detectConvention(currentYearAssets: DepreciationAsset[], section179Allocations?: Map<string, number>): 'half-year' | 'mid-quarter';
