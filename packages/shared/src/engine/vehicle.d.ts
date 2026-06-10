import { VehicleInfo, VehicleResult } from '../types/index.js';
/**
 * Calculate vehicle expense deduction (backward-compatible wrapper).
 * Returns a single number for Schedule C integration.
 *
 * @authority
 *   IRC: Section 162 — trade or business expenses
 *   IRC: Section 274(d) — substantiation requirements for vehicle expenses
 *   IRC: Section 280F — luxury vehicle depreciation limits
 *   IRC: Section 280F(b)(1) — business use ≤ 50% requires straight-line depreciation
 *   IRC: Section 168 — MACRS depreciation; Section 168(k) — bonus depreciation
 *   IRS Notice: 2025-5 — standard mileage rate ($0.70/mile)
 *   Rev. Proc.: 2025-16 — Section 280F dollar amounts for 2025
 *   Pub: Publication 463 — Travel, Gift, and Car Expenses
 *   Pub: Publication 946 — How to Depreciate Property
 *   Form: Form 4562 — Depreciation and Amortization (Parts IV/V)
 * @scope Standard mileage and actual expense vehicle deduction with depreciation
 */
export declare function calculateVehicleDeduction(vehicle: VehicleInfo): number;
/**
 * Calculate vehicle deduction with full detail.
 * Returns a VehicleResult with expense breakdown, depreciation, Section 280F,
 * Form 4562 Part V documentation, and validation warnings.
 */
export declare function calculateVehicleDetailed(vehicle: VehicleInfo): VehicleResult;
/**
 * Compare both methods for UI display.
 * Overloaded: accepts either a VehicleInfo object or the legacy 3-argument signature.
 */
export declare function compareVehicleMethods(vehicleOrBusinessMiles: VehicleInfo | number, totalMiles?: number, actualExpenses?: number): {
    standardMileage: number;
    actual: number;
};
