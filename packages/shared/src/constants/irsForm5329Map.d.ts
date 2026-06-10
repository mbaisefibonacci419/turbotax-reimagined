/**
 * IRS Form 5329 (2025) -- AcroForm Field Mapping
 *
 * Additional Taxes on Qualified Plans (Including IRAs) and Other Tax-Favored Accounts
 * PDF: client/public/irs-forms/f5329.pdf (Form 5329, 2025)
 * Attachment Sequence No. 29
 * Total fields: 74 (text: 73, checkbox: 2)
 *
 * Field prefix: form1[0].Page1[0] / form1[0].Page2[0] / form1[0].Page3[0]
 *
 * Layout:
 *   Page 1:
 *   f1_1  = Name (if different from Form 1040)
 *   f1_2  = Your SSN
 *   f1_3  = Spouse's SSN (if filing jointly and Form 5329 is for spouse)
 *
 *   Part I: Additional Tax on Early Distributions (Lines 1-4):
 *   f1_4  = Line 1: Early distributions included in income (from 1099-R)
 *   f1_5  = Line 2: Early distributions excepted from additional tax
 *   f1_6  = Line 3: Amount subject to additional tax (line 1 - line 2)
 *   f1_7  = Line 4: Additional tax (line 3 x 10%)
 *   (f1_8..f1_34 = remaining Part I-IV fields)
 *
 *   Page 2:
 *   Part V: Additional Tax on Excess Contributions to Traditional IRAs (Lines 17-25):
 *   f2_1  = Line 17: Excess contributions for current year
 *   f2_2  = Line 18: Prior year excess contributions (if any)
 *   f2_3  = Line 19: Current year contribution
 *   f2_4  = Line 20: Current year distributions
 *   f2_5  = Line 21: 2024 tax year excess (if any)
 *   f2_6  = Line 22: Excess contributions subject to tax
 *   f2_7  = Line 23: Excess IRA excise tax (line 22 x 6%)
 *   (f2_8..f2_14 = Part VI: Excess Contributions to Roth IRAs)
 *
 *   Part VII: Additional Tax on Excess Contributions to HSAs (Lines 35-43):
 *   f2_15 = Line 35: Excess HSA contributions for current year
 *   f2_16 = Line 36: Prior year excess contributions (if any)
 *   f2_17 = Line 37: Contributions for current year
 *   f2_18 = Line 38: Distributions used to correct excess
 *   f2_19 = Line 39: Prior year excess (if any)
 *   f2_20 = Line 40: Adjusted excess contributions
 *   f2_21 = Line 41: HSA excise tax (line 40 x 6%)
 *   (f2_22..f2_26 = remaining Part VII-VIII fields)
 *
 *   Page 3:
 *   f3_1..f3_13 = Part IX and signature block
 *   c3_1 = checkbox
 *
 *   c1_1 = Page 1 checkbox (amended return / other)
 */
import type { IRSFieldMapping, IRSFormTemplate } from '../types/irsFormMappings.js';
export declare const FORM_5329_FIELDS: IRSFieldMapping[];
export declare const FORM_5329_TEMPLATE: IRSFormTemplate;
