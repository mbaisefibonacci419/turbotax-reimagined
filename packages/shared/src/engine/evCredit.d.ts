import { FilingStatus, EVCreditInfo, EVCreditResult } from '../types/index.js';
/**
 * Calculate Clean Vehicle Credit (Form 8936).
 *
 * New Clean Vehicle Credit (IRC §30D):
 *   - Up to $7,500 for new qualifying EVs/PHEVs
 *   - $3,750 for meeting critical mineral requirement
 *   - $3,750 for meeting battery component requirement
 *   - Vehicle must be assembled in North America
 *   - MSRP cap: $80,000 for vans/SUVs/pickups, $55,000 for others
 *   - Income limit: $300,000 MFJ, $225,000 HoH, $150,000 Single/MFS
 *
 * Previously Owned Clean Vehicle Credit (IRC §25E):
 *   - Up to $4,000 (or 30% of purchase price, whichever is less)
 *   - Vehicle price must be ≤ $25,000
 *   - Income limit: $150,000 MFJ, $112,500 HoH, $75,000 Single/MFS
 *
 * This is a non-refundable credit.
 *
 * @authority
 *   IRC: Section 30D — clean vehicle credit (new)
 *   IRC: Section 30D(f)(10) — income limitation uses lesser of current or prior year MAGI
 *   IRC: Section 25E — previously owned clean vehicle credit
 *   IRA: Sections 13401-13402 — clean vehicle credit modifications
 *   Form: Form 8936
 * @scope New and previously owned clean vehicle credits
 * @limitations None
 */
export declare function calculateEVCredit(info: EVCreditInfo, agi: number, filingStatus: FilingStatus, priorYearAgi?: number): EVCreditResult;
