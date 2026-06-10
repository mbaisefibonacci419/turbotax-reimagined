/**
 * IRS Schedule R (Form 1040) 2025 -- AcroForm Field Mapping
 *
 * Credit for the Elderly or the Disabled
 * PDF: client/public/irs-forms/f1040sr.pdf (Schedule R, 2025)
 * Attachment Sequence No. 16
 * Total fields: ~20 (text + checkboxes)
 *
 * Field prefix: topmostSubform[0].Page1[0] / topmostSubform[0].Page2[0]
 *
 * Layout:
 *   Page 1 -- Part I: Check the Box for Your Filing Status and Age
 *   f1_1  = Name(s) shown on Form 1040
 *   f1_2  = Your SSN
 *   c1_1[0]                   = Check Box 1: Single, 65 or older
 *   c1_1[1]                   = Check Box 2: Single, under 65, retired on permanent disability
 *   Married[0].c1_1[0]       = Check Box 3: MFJ, both 65 or older
 *   Married[0].c1_1[1]       = Check Box 4: MFJ, both under 65, one or both disabled
 *   Married[0].c1_1[2]       = Check Box 5: MFJ, one 65+, other under 65 (not disabled)
 *   Married[0].c1_1[3]       = Check Box 6: MFJ, one 65+, other under 65 and disabled
 *   Married[0].c1_1[4]       = (unused 5th MFJ variant in 2025 PDF)
 *   MarriedSeparate[0].c1_1[0] = Check Box 7: MFS, 65 or older
 *   MarriedSeparate[0].c1_1[1] = Check Box 8: MFS, under 65, retired on permanent disability
 *   c1_2[0]                   = Check Box 9/10: HoH/QSS (single checkbox in 2025 PDF)
 *
 *   Page 2 -- Part II: Figure Your Credit
 *   f2_1  = Line 10: Initial amount (based on filing status/box checked)
 *   f2_2  = Line 11: Taxable disability income (if under 65)
 *   f2_3  = Line 12: Smaller of line 10 or line 11
 *   f2_4  = Line 13a: Nontaxable Social Security benefits
 *   f2_5  = Line 13b: Nontaxable pensions/annuities/disability income
 *   f2_6  = Line 13c: Nontaxable veterans' benefits (not modeled)
 *   f2_7  = Line 13d: Any other nontaxable income (not modeled)
 *   f2_8  = Line 13e: Add lines 13a through 13d
 *   f2_9  = Line 14: Subtract line 13e from line 12 (credit base before AGI reduction)
 *   f2_10 = Line 15: AGI from Form 1040, line 11
 *   f2_11 = Line 16: AGI threshold amount
 *   f2_12 = Line 17: Subtract line 16 from line 15 (excess AGI)
 *   f2_13 = Line 18: Multiply line 17 by 50% (AGI reduction)
 *   f2_14 = Line 19: Subtract line 18 from line 14 (credit base)
 *   f2_15 = Line 20: Multiply line 19 by 15% (credit)
 */
import type { IRSFieldMapping, IRSFormTemplate } from '../types/irsFormMappings.js';
export declare const SCHEDULE_R_FIELDS: IRSFieldMapping[];
export declare const SCHEDULE_R_TEMPLATE: IRSFormTemplate;
