import { FilingStatus, HomeSaleInfo, HomeSaleResult } from '../types/index.js';
/**
 * Calculate Sale of Home Exclusion (Section 121).
 *
 * Taxpayers who sell their primary residence may exclude up to $250,000
 * ($500,000 MFJ) of gain if they meet the ownership and use tests:
 *   - Owned the home for at least 24 months in the last 5 years
 *   - Used as primary residence for at least 24 months in the last 5 years
 *   - Haven't used the Section 121 exclusion within the past 2 years
 *
 * Any taxable gain after exclusion flows to Schedule D as a long-term capital gain.
 * Losses on personal residence sales are not deductible.
 *
 * @authority
 *   IRC: Section 121 — exclusion of gain from sale of principal residence
 *   Pub: Publication 523 — Selling Your Home
 * @scope Sale of home exclusion ($250k/$500k) with ownership/residence tests
 * @limitations No partial exclusion for reduced maximum
 */
export declare function calculateHomeSaleExclusion(info: HomeSaleInfo, filingStatus: FilingStatus): HomeSaleResult;
