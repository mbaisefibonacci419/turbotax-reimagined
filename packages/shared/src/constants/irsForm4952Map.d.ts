/**
 * IRS Form 4952 (2025) -- AcroForm Field Mapping
 *
 * Investment Interest Expense Deduction
 * PDF: client/public/irs-forms/f4952.pdf (Form 4952, 2025)
 * Attachment Sequence No. 51
 *
 * Field prefix: topmostSubform[0].Page1[0]
 *
 * Layout (single page):
 *   f1_01 = Name(s) shown on return
 *   f1_02 = Your SSN
 *
 *   Part I -- Total Investment Interest Expense:
 *     f1_03 = Line 1: Investment interest expense paid or accrued in 2025
 *     f1_04 = Line 2: Disallowed investment interest expense from 2024 Form 4952, line 7
 *     f1_05 = Line 3: Total investment interest expense (add lines 1 and 2)
 *
 *   Part II -- Net Investment Income:
 *     f1_06 = Line 4a: Gross income from property held for investment
 *     f1_07 = Line 4b: Qualified dividends and/or net capital gain included on line 4a
 *                       that you elect to treat as investment income
 *     f1_08 = Line 4c: Subtract line 4b from line 4a
 *     f1_09 = Line 4d: Net gain from disposition of property held for investment
 *     f1_10 = Line 4e: Net capital gain from disposition of property held for investment
 *                       not elected on line 4b
 *     f1_11 = Line 4f: Subtract line 4e from line 4d
 *     f1_12 = Line 4g: Add lines 4c and 4f (net investment income before expenses)
 *     f1_13 = Line 5:  Investment expenses (from Schedule A if applicable)
 *     f1_14 = Line 6:  Net investment income (subtract line 5 from line 4g; if zero or less, enter 0)
 *
 *   Part III -- Investment Interest Expense Deduction:
 *     f1_15 = Line 7: Disallowed investment interest expense to carry forward
 *                      (subtract line 6 from line 3; if zero or less, enter 0)
 *     f1_16 = Line 8: Investment interest expense deduction (subtract line 7 from line 3)
 *
 *   Checkboxes:
 *     c1_1[0] = Election to include qualified dividends in investment income
 *     c1_1[1] = Election to include net capital gain in investment income
 */
import type { IRSFieldMapping, IRSFormTemplate } from '../types/irsFormMappings.js';
export declare const FORM_4952_FIELDS: IRSFieldMapping[];
export declare const FORM_4952_TEMPLATE: IRSFormTemplate;
