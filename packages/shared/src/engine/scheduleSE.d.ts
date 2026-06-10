import { FilingStatus, ScheduleSEResult } from '../types/index.js';
import { SE_TAX } from '../constants/tax2025.js';
/**
 * Calculate Schedule SE (Self-Employment Tax).
 * SE tax = 15.3% of 92.35% of net SE earnings (up to SS wage base for SS portion).
 * Additional 0.9% Medicare tax on SE earnings above threshold.
 *
 * @authority
 *   IRC: Section 1401(a)-(b) — rates of self-employment tax
 *   IRC: Section 1402(a) — definition of net earnings from self-employment
 *   Rev. Proc: 2024-40, Section 3 — Social Security wage base
 *   Form: Schedule SE (Form 1040), Lines 4a-12
 *   Pub: Publication 334, Chapter 4
 * @scope Full SE tax computation including Additional Medicare
 * @limitations None
 */
export declare function calculateScheduleSE(scheduleCNetProfit: number, filingStatus: FilingStatus, w2SocialSecurityWages?: number, optionalMethodEarnings?: number, seTaxConstants?: typeof SE_TAX): ScheduleSEResult;
