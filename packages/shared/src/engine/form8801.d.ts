import { Form8801Info, Form8801Result } from '../types/index.js';
/**
 * Calculate the Prior Year Minimum Tax Credit (Form 8801).
 *
 * This credit allows taxpayers who paid AMT in prior years due to "deferral items"
 * (timing differences like ISO exercises, depreciation) to recover that AMT as a
 * credit against regular tax in subsequent years.
 *
 * The credit is non-refundable and limited to the excess of regular tax over
 * current-year AMT (tentative minimum tax minus regular tax).
 *
 * @authority
 *   IRC: Section 53 — Credit for prior year minimum tax liability
 *   Form: Form 8801, Schedule 3 Line 6b
 * @scope Form 8801 simplified — user enters net prior year minimum tax and carryforward
 * @limitations Full Form 8801 recalculation of exclusion/deferral split not implemented;
 *   user must provide the net deferral amount from their prior year return or tax software
 */
export declare function calculateForm8801Credit(info: Form8801Info, regularTaxBeforeCredits: number, currentYearAMT: number): Form8801Result;
