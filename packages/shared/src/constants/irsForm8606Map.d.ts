/**
 * IRS Form 8606 (2025) -- AcroForm Field Mapping
 *
 * Nondeductible IRAs
 * PDF: client/public/irs-forms/f8606.pdf (Form 8606, 2025)
 * Attachment Sequence No. 48
 *
 * Field prefix: topmostSubform[0]
 *
 * Layout:
 *   Page 1:
 *     f1_01 = Name (if different from Form 1040)
 *     f1_02 = Your social security number
 *
 *     Part I: Nondeductible Contributions to Traditional IRAs and
 *             Distributions From Traditional, SEP, and SIMPLE IRAs
 *       f1_03 = Line 1: Enter your nondeductible contributions to traditional IRAs for 2025
 *       f1_04 = Line 2: Enter your total basis in traditional IRAs (from prior year Form 8606, line 14)
 *       f1_05 = Line 3: Add lines 1 and 2
 *       f1_06 = Line 4: Contributions withdrawn between 1/1 and 4/15/2026
 *       f1_07 = Line 5: Subtract line 4 from line 3
 *       f1_08 = Line 6: Enter the value of ALL your traditional, SEP, and SIMPLE IRAs
 *                        as of 12/31/2025 plus outstanding rollovers
 *       f1_09 = Line 7: Enter your distributions from traditional, SEP, and SIMPLE IRAs in 2025
 *       f1_10 = Line 8: Enter the net amount you converted from traditional, SEP, and SIMPLE
 *                        IRAs to Roth IRAs in 2025
 *       f1_11 = Line 9: Add lines 6, 7, and 8
 *       f1_12 = Line 10: Divide line 5 by line 9. Enter result as decimal (not %)
 *       f1_13 = Line 11: Multiply line 8 by line 10. Non-taxable portion of conversion.
 *       f1_14 = Line 12: Multiply line 7 by line 10. Non-taxable portion of distributions.
 *       f1_15 = Line 13: Add lines 11 and 12. Total non-deductible portion.
 *       f1_16 = Line 14: Subtract line 13 from line 3. This is your total basis in
 *                         traditional IRAs for 2025 and earlier years.
 *       f1_17 = Line 15a: Taxable amount of conversion. Subtract line 11 from line 8.
 *       f1_18 = Line 15b: Taxable amount of distributions. Subtract line 12 from line 7.
 *       f1_19 = Line 15c: Add lines 15a and 15b. Total taxable amount.
 *
 *     Part II: 2025 Conversions From Traditional, SEP, or SIMPLE IRAs to Roth IRAs
 *       f1_20 = Line 16: If you completed Part I, enter the amount from line 8.
 *       f1_21 = Line 17: Contributions to Roth IRAs that were converted back (recharacterized)
 *       f1_22 = Line 18: Net conversion amount. Subtract line 17 from line 16.
 *       f1_23 = Supplemental field (if applicable)
 *
 *   Page 2:
 *     Part III: Distributions From Roth IRAs
 *       f2_01 = Line 19: Enter your total nonqualified distributions from Roth IRAs
 *       f2_02 = Line 20: Qualified first-time homebuyer expenses
 *       f2_03 = Line 21: Subtract line 20 from line 19
 *       f2_04 = Line 22: Enter your basis in Roth IRA contributions
 *       f2_05 = Line 23: Subtract line 22 from line 21 (if zero or less, enter 0)
 *       f2_06 = Line 24: Enter your basis in conversions from traditional, SEP, and SIMPLE IRAs
 *       f2_07 = Line 25a: Taxable amount. Subtract line 24 from line 23 (if zero or less, enter 0)
 *       f2_08 = Line 25b: Amount attributable to earnings -- early distribution penalty
 *       f2_09..f2_21 = Additional lines for Part III detail (less common)
 *       c2_1 = Checkbox: Did you take a distribution from a Roth IRA in 2025?
 */
import type { IRSFieldMapping, IRSFormTemplate } from '../types/irsFormMappings.js';
export declare const FORM_8606_FIELDS: IRSFieldMapping[];
export declare const FORM_8606_TEMPLATE: IRSFormTemplate;
