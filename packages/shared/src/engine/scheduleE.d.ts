import { RentalProperty, RoyaltyProperty, ScheduleEResult } from '../types/index.js';
/**
 * Calculate Schedule E — Rental and Royalty Income.
 *
 * For each rental property, compute net income (income - expenses).
 *
 * Personal use day rules (IRS Pub 527):
 *   1. If rented < 15 days/year: income is tax-free, no expenses deductible.
 *      (The "14-day exclusion" / "Augusta rule.")
 *   2. If personal use > greater of (14 days) or (10% of rental days):
 *      property is "personal use" — expenses prorated by rental ratio,
 *      and deductible expenses cannot exceed rental income (no loss allowed).
 *   3. Otherwise: normal Schedule E treatment.
 *
 * Returns raw net rental income (before passive loss limitation).
 * Form 8582 applies the IRC §469 passive activity loss limitation on top.
 *
 * Royalty income (1099-MISC Box 2 + K-1 Box 7) flows through Schedule E Line 4.
 * Royalties are NOT subject to passive activity loss rules (not passive income),
 * so they are tracked separately.
 *
 * @authority
 *   IRC: Section 469 — passive activity losses and credits limited
 *   IRC: Section 469(i) — $25,000 offset for rental real estate activities
 *   Form: Schedule E (Form 1040), Part I
 *   Pub: Publication 925 — Passive Activity and At-Risk Rules
 * @scope Rental income computation + per-property detail; passive loss via Form 8582
 * @limitations No at-risk rules (Section 465), no material participation tests
 */
export declare function calculateScheduleE(properties: RentalProperty[], k1RentalIncome?: number, misc1099Rents?: number, royaltyIncome?: number, royaltyProperties?: RoyaltyProperty[]): ScheduleEResult;
