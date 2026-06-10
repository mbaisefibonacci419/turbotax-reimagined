import { HSAContributionInfo } from '../types/index.js';
/**
 * Calculate HSA deduction using full Form 8889 logic.
 *
 * Form 8889 computes the allowable HSA deduction:
 *   Deduction = min(totalContributions, contributionLimit) - employerContributions
 *
 * Contribution limits (2025):
 *   Self-only:  $4,300
 *   Family:     $8,550
 *   Catch-up:   +$1,000 if age 55+
 *
 * Partial-year proration (Form 8889 Line 6 Limitation Worksheet):
 *   If HDHP coverage was not for the full year, the base annual limit is prorated:
 *     Prorated limit = (months of coverage / 12) × annual limit
 *   Per IRS Form 8889 instructions, the catch-up amount ($1,000 for age 55+)
 *   is NOT prorated — it is a flat addition to Line 7 if eligible for any month.
 *
 * Employer contributions (W-2 Box 12, Code W) reduce the deductible amount
 * since they're already excluded from income.
 *
 * @authority
 *   IRC: Section 223 — health savings accounts
 *   IRC: Section 223(b)(2) — monthly limitation / proration
 *   Rev. Proc: 2024-25 — HSA contribution limits
 *   Form: Form 8889 Line 6 Limitation Chart and Worksheet
 * @scope HSA contribution deduction with limits, proration, and employer offset
 * @limitations Does not implement the "last month rule" (IRC §223(b)(8)) which
 *   allows full-year contribution if eligible on Dec 1 (with testing period requirement).
 */
export declare function calculateHSADeduction(info: HSAContributionInfo): number;
