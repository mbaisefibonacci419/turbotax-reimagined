/**
 * Schedule K-1 — Partner/Shareholder Income Routing
 *
 * K-1 forms are issued by partnerships (Form 1065), S-Corporations (Form 1120-S),
 * and estates/trusts (Form 1041). This module routes K-1 line items to the
 * appropriate categories for Form 1040 calculation.
 *
 * Key routing rules:
 * - Ordinary business income: Partnership → SE income; S-Corp → NOT SE income
 * - Guaranteed payments: Always SE income
 * - Interest/dividends: Flows to Schedule B
 * - Capital gains: Flows to Schedule D
 * - Section 199A QBI: Flows to QBI deduction
 * - Rental income: Flows to Schedule E
 * - Box 13 deductions: Charitable → Schedule A; Investment interest → Form 4952
 * - Box 15 credits: Foreign tax → FTC; Other credits → nonrefundable credits
 *
 * @authority
 *   IRC: Sections 701-704 — partnership income and allocations
 *   IRC: Section 1366 — S corporation pass-through items
 *   IRC: Section 170 — charitable contributions (Box 13 Codes A-F)
 *   IRC: Section 163(d) — investment interest expense (Box 13 Code H)
 *   IRC: Section 901 — foreign tax credit (Box 15 Code L)
 */
import { IncomeK1 } from '../types/index.js';
export interface K1RoutingResult {
    ordinaryBusinessIncome: number;
    guaranteedPayments: number;
    interestIncome: number;
    ordinaryDividends: number;
    qualifiedDividends: number;
    shortTermCapitalGain: number;
    longTermCapitalGain: number;
    netSection1231Gain: number;
    otherIncome: number;
    section199AQBI: number;
    selfEmploymentIncome: number;
    section179Deduction: number;
    rentalIncome: number;
    royalties: number;
    federalTaxWithheld: number;
    charitableCash: number;
    charitableNonCash: number;
    investmentInterestExpense: number;
    otherDeductions: number;
    foreignTaxPaid: number;
    otherCredits: number;
    totalOrdinaryIncome: number;
    totalSEIncome: number;
    totalPreferentialIncome: number;
    totalIncome: number;
}
/**
 * Route a single K-1's items to the appropriate income categories.
 *
 * @authority
 *   IRC: Sections 701-704 — partnership income and allocations
 *   IRC: Section 1366 — S corporation pass-through items
 *   IRC: Section 179 — election to expense certain depreciable business assets
 *   IRC: Section 170 — charitable contributions (Box 13)
 *   IRC: Section 163(d) — investment interest expense (Box 13 Code H)
 *   IRC: Section 901 — foreign tax credit (Box 15 Code L)
 *   Form: Schedule K-1 (Form 1065 / Form 1120-S / Form 1041)
 * @scope K-1 income and deduction/credit routing to appropriate categories for Form 1040
 * @limitations Does not model full Form 4562 Section 179 computation
 */
export declare function routeK1Income(k1: IncomeK1): K1RoutingResult;
/**
 * Aggregate multiple K-1s into a single routing result for Form 1040.
 *
 * @authority
 *   IRC: Sections 701-704 — partnership income and allocations
 *   IRC: Section 1366 — S corporation pass-through items
 *   IRC: Section 179 — election to expense certain depreciable business assets
 *   Form: Schedule K-1 (Form 1065 / Form 1120-S / Form 1041)
 * @scope K-1 income routing to appropriate categories for Form 1040
 * @limitations Does not model full Form 4562 Section 179 computation
 */
export declare function aggregateK1Income(k1s: IncomeK1[]): K1RoutingResult;
