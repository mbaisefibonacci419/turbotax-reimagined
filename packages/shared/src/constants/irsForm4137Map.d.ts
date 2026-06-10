/**
 * IRS Form 4137 (2025) -- AcroForm Field Mapping
 *
 * Social Security and Medicare Tax on Unreported Tip Income
 * PDF: client/public/irs-forms/f4137.pdf (Form 4137, 2025)
 * Attachment Sequence No. 56
 * Total fields: ~34 (text fields + table)
 *
 * Field prefix: form1[0].Page1[0]
 *
 * Layout:
 *   f1_1  = Name(s) shown on return
 *   f1_2  = Your SSN
 *
 *   Table_Line1 -- Employer tip income table (5 rows x 4 columns):
 *     Row N (0-indexed):
 *       Column (a): Employer name
 *       Column (b): Tips reported to employer (from W-2 Box 7)
 *       Column (c): Total tips received (including unreported)
 *       Column (d): Unreported tips (col c - col b)
 *     Field names: Table_Line1[0].Row{N}[0].f1_{col}[0]
 *     f1_3..f1_6   = Row 1
 *     f1_7..f1_10  = Row 2
 *     f1_11..f1_14 = Row 3
 *     f1_15..f1_18 = Row 4
 *     f1_19..f1_22 = Row 5
 *
 *   Summary lines:
 *   f1_23 = Line 2: Total unreported tips (sum of column d)
 *   f1_24 = Line 3: Cash/charge tips not reported (enter 0 if all on line 2)
 *   f1_25 = Line 4: Total unreported tips (line 2 + line 3)
 *   f1_26 = Line 5: SS wages and tips from W-2s (used for wage base calc)
 *   f1_27 = Line 6: Total of lines 4 and 5
 *   f1_28 = Line 7: Maximum wages subject to SS tax ($176,100 for 2025)
 *   f1_29 = Line 8: Subtract line 7 from line 6 (excess, if any)
 *   f1_30 = Line 9: Subtract line 8 from line 4 (tips subject to SS)
 *   f1_31 = Line 10: Multiply line 9 by 6.2% (SS tax)
 *   f1_32 = Line 11: Multiply line 4 by 1.45% (Medicare tax)
 *   f1_33 = Line 12: Add lines 10 and 11 (total tax on unreported tips)
 *   f1_34 = Line 13: Total from prior pages (if multiple pages)
 */
import type { IRSFieldMapping, IRSFormTemplate } from '../types/irsFormMappings.js';
export declare const FORM_4137_FIELDS: IRSFieldMapping[];
export declare const FORM_4137_TEMPLATE: IRSFormTemplate;
