import { FarmRentalInfo, FarmRentalResult } from '../types/index.js';
/**
 * Calculate Form 4835 — Farm Rental Income and Expenses.
 *
 * For landowners who receive farm rental income but do not materially
 * participate in farming operations. Income is passive by definition.
 * Net income/loss flows to Schedule E, Part I.
 *
 * @authority
 *   IRC: Section 469 — Passive activity rules
 *   Form: Form 4835
 * @scope Passive farm rental income/loss computation
 * @limitations No depreciation calculation (user enters amount); no Form 8582 integration (passive loss handled upstream)
 */
export declare function calculateForm4835(info: FarmRentalInfo): FarmRentalResult;
