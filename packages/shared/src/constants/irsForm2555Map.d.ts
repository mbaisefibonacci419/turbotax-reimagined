/**
 * IRS Form 2555 (2025) -- AcroForm Field Mapping
 *
 * Foreign Earned Income
 * PDF: client/public/irs-forms/f2555.pdf (Form 2555, 2025)
 * Attachment Sequence No. 34
 *
 * Field prefixes:
 *   Page 1: topmostSubform[0].Page1[0]  -- f1_1 through f1_21 (personal info, Parts I-III)
 *   Page 2: topmostSubform[0].Page2[0]  -- f2_1 through f2_33 (Parts IV-VI: foreign presence, housing)
 *   Page 3: topmostSubform[0].Page3[0]  -- f3_1 through f3_21 (Parts VII-IX: housing deduction, exclusion)
 *
 * Layout:
 *   Page 1:
 *     f1_1 = Name(s) shown on Form 1040
 *     f1_2 = Your social security number
 *     f1_3-f1_8 = Part I: General Information (employer name, address, etc.)
 *     f1_9-f1_15 = Part II: Qualifying Tests (tax home, bona fide residence dates)
 *     f1_16-f1_21 = Part III: Physical Presence Test (dates in/out of US)
 *
 *   Page 2:
 *     f2_1-f2_9 = Part IV: All Taxpayers (bona fide/physical presence detail)
 *     f2_10-f2_20 = Part V: Taxpayers Claiming Foreign Earned Income Credit
 *     f2_21-f2_33 = Part VI: Housing Costs (expenses, base, max, employer-provided)
 *
 *   Page 3:
 *     f3_1-f3_5 = Part VII: Housing Deduction (self-employed)
 *     f3_6-f3_14 = Part VIII: Foreign Earned Income Exclusion
 *       f3_6 = Line 45: Foreign earned income
 *       f3_7 = Line 46: Maximum exclusion ($130,000 for 2025)
 *       f3_8 = Line 47: Days qualifying / 365 prorated exclusion
 *       f3_9 = Line 48: Enter the smaller of line 45 or line 47
 *     f3_15-f3_21 = Part IX: Deductions/Exclusion Summary (flows to Schedule 1)
 *       f3_15 = Line 50: Housing deduction from Part VII
 *       f3_16 = Line 51: Housing exclusion from Part VI
 *       f3_17 = Line 52: Foreign earned income exclusion (from line 48)
 *       f3_18 = Line 53: Add lines 50, 51, and 52
 *
 * Engine data sources:
 *   tr.foreignEarnedIncome: ForeignEarnedIncomeInfo { foreignEarnedIncome, qualifyingDays?, housingExpenses? }
 *   calc.feie: { incomeExclusion: number; housingExclusion: number }
 */
import type { IRSFieldMapping, IRSFormTemplate } from '../types/irsFormMappings.js';
export declare const FORM_2555_FIELDS: IRSFieldMapping[];
export declare const FORM_2555_TEMPLATE: IRSFormTemplate;
