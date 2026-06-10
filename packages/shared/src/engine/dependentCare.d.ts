import { FilingStatus, DependentCareResult } from '../types/index.js';
/**
 * Calculate Child and Dependent Care Credit (Form 2441).
 *
 * The credit is a percentage (20-35%) of qualifying child/dependent care expenses,
 * subject to a dollar limit ($3,000 for one qualifying person, $6,000 for two+).
 *
 * The percentage starts at 35% for AGI ≤ $15,000 and decreases by 1% for each
 * $2,000 (or fraction thereof) of AGI over $15,000, down to a floor of 20%.
 *
 * MFS filers are generally ineligible unless they lived apart from their spouse
 * for the entire year (livedApartFromSpouseMFS = true).
 *
 * Part III: Employer-provided dependent care benefits (W-2 Box 10, IRC §129):
 *   - Up to $5,000 ($2,500 MFS) is excludable from income
 *   - Excess above the exclusion limit → taxable income (flows to Form 1040)
 *   - Employer benefits also reduce the expense limit for the credit
 *
 * Student/disabled spouse deemed earned income (IRC §21(d)(2)):
 *   - Full-time student or disabled spouse deemed to earn $250/month (one qualifying person)
 *     or $500/month (two+ qualifying persons) for each month they meet the criteria.
 *   - Simplified: 12 months × rate = $3,000 or $6,000 per year.
 *
 * This is a non-refundable credit (reduces tax to $0 floor).
 *
 * @authority
 *   IRC: Section 21 — expenses for household and dependent care services
 *   IRC: Section 21(d)(2) — deemed earned income for student/disabled spouse
 *   IRC: Section 129 — dependent care assistance programs (employer exclusion)
 *   Form: Form 2441
 * @scope Full Form 2441 with employer benefits reconciliation, student/disabled spouse, MFS lived-apart
 * @limitations Does not validate qualifying individual tests (age, dependency, incapacity)
 */
export declare function calculateDependentCareCredit(expenses: number, qualifyingPersons: number, agi: number, filingStatus: FilingStatus, earnedIncome: number, spouseEarnedIncome?: number, employerBenefits?: number, isStudentSpouse?: boolean, isDisabledSpouse?: boolean, livedApartFromSpouseMFS?: boolean): DependentCareResult;
