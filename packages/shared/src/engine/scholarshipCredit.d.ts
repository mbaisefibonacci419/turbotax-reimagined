import { ScholarshipCreditInfo, ScholarshipCreditResult } from '../types/index.js';
/**
 * Calculate the Scholarship Granting Organization Credit (IRC §25F).
 *
 * A nonrefundable credit of up to $1,700 for contributions to qualified
 * Scholarship Granting Organizations (SGOs) that fund K-12 scholarships.
 *
 * The credit is reduced dollar-for-dollar by any state tax credit received
 * for the same contribution.
 *
 * @authority
 *   IRC: Section 25F — Credit for qualified SGO contributions
 *   OBBBA: Section 70202 — Scholarship Granting Organization Credit
 *   Notice: 2025-70 — Interim guidance on §25F
 * @scope Nonrefundable credit, Schedule 3
 * @limitations No AGI phase-out; credit simply capped at $1,700
 */
export declare function calculateScholarshipCredit(info: ScholarshipCreditInfo): ScholarshipCreditResult;
