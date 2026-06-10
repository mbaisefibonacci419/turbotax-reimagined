import { FilingStatus, ScheduleRInfo, ScheduleRResult } from '../types/index.js';
/**
 * Calculate Schedule R — Credit for the Elderly or the Disabled (Form 1040).
 *
 * IRC §22 provides a credit for taxpayers who are:
 *   1. Age 65 or older, OR
 *   2. Under 65, retired on permanent and total disability, and received taxable disability income.
 *
 * The credit is 15% of the "initial amount" (based on filing status), reduced by:
 *   A. Nontaxable Social Security, railroad retirement benefits, and other nontaxable pensions
 *   B. 50% of (AGI − AGI threshold)
 *
 * Initial amounts (IRC §22(c)(2)):
 *   - Single, HoH, QSS: $5,000
 *   - MFJ, both 65+:    $7,500
 *   - MFJ, one 65+:     $5,000
 *   - MFS:               $3,750
 *
 * AGI thresholds (IRC §22(d)):
 *   - Single, HoH, QSS: $7,500
 *   - MFJ:               $10,000
 *   - MFS:               $5,000
 *
 * Note: These amounts are statutory (IRC §22) and NOT indexed for inflation.
 *
 * The credit is non-refundable (reduces tax liability to $0 floor).
 *
 * @authority
 *   IRC: Section 22 — Credit for the elderly and the permanently and totally disabled
 *   IRC: Section 22(c)(2) — Initial amounts
 *   IRC: Section 22(d) — Adjusted gross income limitation
 *   Form: Schedule R (Form 1040)
 * @scope Full Schedule R computation with nontaxable income and AGI reductions
 * @limitations Does not validate disability status or permanent/total disability certification (Form 1040 Schedule R physician's statement)
 */
/**
 * Calculate the Credit for the Elderly or the Disabled (Schedule R).
 *
 * @param info - Taxpayer/spouse age and disability status, nontaxable income
 * @param agi - Adjusted Gross Income
 * @param filingStatus - Filing status
 * @returns ScheduleRResult with credit calculation detail
 */
export declare function calculateScheduleR(info: ScheduleRInfo, agi: number, filingStatus: FilingStatus): ScheduleRResult;
