import { AdoptionCreditInfo, AdoptionCreditResult } from '../types/index.js';
/**
 * Calculate Adoption Credit (Form 8839).
 *
 * For 2025: up to $17,280 per eligible child for qualified adoption expenses.
 * Special needs adoptions get the full credit regardless of actual expenses.
 *
 * AGI phase-out: begins at $259,190, eliminated over $40,000 range.
 *
 * The credit is non-refundable but can be carried forward for up to 5 years.
 *
 * @authority
 *   IRC: Section 23 — adoption expenses
 *   Rev. Proc: 2024-40, Section 3.35 — adoption credit amounts and phase-outs
 *   Form: Form 8839
 * @scope Adoption credit with AGI phase-out ($17,280 max)
 * @limitations No multi-year carryforward tracking
 */
export declare function calculateAdoptionCredit(info: AdoptionCreditInfo, agi: number): AdoptionCreditResult;
