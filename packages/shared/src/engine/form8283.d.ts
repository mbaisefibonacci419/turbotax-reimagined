import { NonCashDonation, CharitableCarryforward, Form8283Result } from '../types/index.js';
/**
 * Calculate Form 8283 — Noncash Charitable Contributions.
 *
 * Classifies per-item donations into Section A (FMV ≤ $5,000) and Section B
 * (FMV > $5,000), applies AGI-based percentage limitations by donation category,
 * processes prior-year carryforwards using FIFO ordering, and computes excess
 * carryforward amounts for future years.
 *
 * AGI Limitation Categories (IRC §170(b)(1)):
 *   - Cash to public charities: 60% AGI
 *   - Non-cash ordinary income property to public: 50% AGI
 *   - Non-cash capital gain property to public: 30% AGI
 *   - Overall limit: 60% AGI
 *
 * @authority
 *   IRC: Section 170(b)(1) — Percentage limitations on charitable deductions
 *   IRC: Section 170(d)(1) — 5-year carryforward for excess contributions
 *   IRC: Section 170(f)(11) — Substantiation requirements for noncash donations
 *   Reg: §1.170A-13 — Recordkeeping and return requirements
 *   Form: Form 8283 (Sections A and B)
 *   Pub: Publication 526 — Charitable Contributions
 * @scope Per-item classification, AGI limits, carryforward FIFO
 * @limitations Does not handle private foundation reduced limits (20% AGI)
 */
export declare function calculateForm8283(cashDonations: number, nonCashDonations: NonCashDonation[], agi: number, carryforwards?: CharitableCarryforward[], taxYear?: number): Form8283Result;
