/**
 * Form 8582 — Passive Activity Loss Limitations
 *
 * Limits passive activity losses per IRC §469. Only passive losses in excess
 * of passive income are subject to the limitation. The $25,000 special
 * allowance (IRC §469(i)) lets active-participation rental RE losses offset
 * non-passive income, subject to AGI phase-out.
 *
 * Key rules implemented:
 *   - Part I: Categorize passive activities (rental w/ active participation vs other)
 *   - Part II: $25k special allowance with AGI phase-out ($100k–$150k)
 *   - MFS: $12.5k allowance ($50k–$75k phase-out), or $0 if lived together
 *   - Real estate professional: IRC §469(c)(7) — bypass PAL entirely
 *   - Disposition: IRC §469(g)(1) — full disposition releases all suspended losses
 *   - Limited partners: IRC §469(i)(6)(C) — excluded from $25k rental allowance
 *   - Prior-year unallowed losses carry forward indefinitely (per-property and per-K-1)
 *
 * @authority
 *   IRC: Section 469 — Passive activity losses and credits limited
 *   IRC: Section 469(i) — $25,000 offset for rental real estate activities
 *   IRC: Section 469(i)(4) — MFS special rules
 *   IRC: Section 469(c)(7) — Real estate professional exception
 *   IRC: Section 469(g)(1) — Dispositions of entire interest
 *   IRC: Section 469(i)(6)(C) — Limited partners excluded from active participation
 *   Form: 8582 (Form 1040) — Passive Activity Loss Limitations
 *   Pub: Publication 925 — Passive Activity and At-Risk Rules
 * @scope Passive activity loss limitation with per-activity tracking
 * @limitations No at-risk rules (Section 465), no material participation tests beyond REP
 */
import { FilingStatus, RentalProperty, IncomeK1, ScheduleEResult, Form8582Result, TaxReturn } from '../types/index.js';
/**
 * Calculate Form 8582 — Passive Activity Loss Limitations.
 *
 * Takes raw Schedule E results (before passive loss limitation) and applies
 * the IRC §469 limitation rules. Returns per-activity allowed/suspended
 * amounts plus the total allowed loss that flows back to Schedule E.
 */
export declare function calculateForm8582(scheduleEResult: ScheduleEResult, properties: RentalProperty[], k1s: IncomeK1[], magi: number, filingStatus: FilingStatus, livedApartFromSpouse: boolean, form8582Data?: TaxReturn['form8582Data'], misc1099Rents?: number): Form8582Result;
/**
 * Calculate the $25,000 special allowance for rental RE with active participation.
 * Handles MFS special rules per IRC §469(i)(4).
 */
export declare function calculateSpecialAllowance(magi: number, filingStatus: FilingStatus, livedApartFromSpouse: boolean): number;
