import { FilingStatus, Schedule1AInfo, Schedule1AResult } from '../types/index.js';
/**
 * Calculate Schedule 1-A — Additional Deductions (One Big Beautiful Bill Act).
 *
 * Four below-the-line deductions that reduce taxable income (not AGI):
 *   1. No Tax on Tips (qualified tips, $25k cap, MAGI phase-out)
 *   2. No Tax on Overtime (FLSA premium portion, $12.5k/$25k cap, MAGI phase-out)
 *   3. No Tax on Car Loan Interest (US-assembled new vehicle, $10k cap, MAGI phase-out)
 *   4. Enhanced Senior Deduction ($6k per person 65+, MAGI phase-out)
 *
 * MFS filers are ineligible for tips, overtime, and senior deductions.
 * Car loan interest is available to all filing statuses.
 *
 * MAGI for Schedule 1-A = AGI (Form 1040 line 11b) + FEIE exclusions.
 *
 * Flows to Form 1040 line 13b.
 *
 * @authority
 *   OBBBA: Sections 101-104 — No Tax on Tips, Overtime, Car Loan Interest, Senior Deduction
 *   Form: Schedule 1-A
 * @scope OBBBA deductions (tips, overtime, car loan interest, senior)
 * @limitations None
 */
export declare function calculateSchedule1A(info: Schedule1AInfo, magi: number, filingStatus: FilingStatus, taxpayerAge65OrOlder: boolean, spouseAge65OrOlder?: boolean, taxYear?: number): Schedule1AResult;
