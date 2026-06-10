/**
 * IRS Schedule SE (Form 1040) 2025 — AcroForm Field Mapping
 *
 * Self-Employment Tax
 * PDF: client/public/irs-forms/f1040sse.pdf (Schedule SE, 2025, Created 5/7/25)
 * Attachment Sequence No. 17
 * Total fields: 27 (text: 26, checkbox: 1)
 *
 * Field prefix: topmostSubform[0].Page1[0] (page 1) / topmostSubform[0].Page2[0] (page 2)
 *
 * This mapping covers Part I (Short Schedule SE) which handles the common case.
 * Part II (Long Schedule SE) is for church employees, optional methods, etc. — rare.
 *
 * Page 1 field map:
 *   f1_1  = Name of person with self-employment income
 *   f1_2  = SSN
 *   c1_1  = Line A checkbox (minister/religious order)
 *   f1_3  = Line 1a: Net farm profit (Schedule F line 34, K-1 box 14 code A)
 *   f1_4  = Line 1b: Conservation Reserve Program payments
 *   f1_5  = Line 2: Net profit from Schedule C line 31, K-1 box 14 code A
 *   f1_6  = Line 3: Combine lines 1a, 1b, and 2
 *   f1_7  = Line 4a: If line 3 > 0, multiply by 92.35% (0.9235)
 *   f1_8  = Line 4b: Optional method amount
 *   f1_9  = Line 4c: Combine 4a and 4b
 *   f1_10 = Line 5a: Church employee income
 *   f1_11 = Line 5b: Multiply 5a by 92.35%
 *   f1_12 = Line 6: Add lines 4c and 5b
 *   f1_13 = Line 7: Maximum amount subject to SS tax ($176,100 for 2025)
 *   f1_14 = Line 8a: Total SS wages and tips (from W-2)
 *   f1_15 = Line 8b: Unreported tips (Form 4137 line 10)
 *   f1_16 = Line 8c: Wages from Form 8919 line 10
 *   f1_17 = Line 8d: Add 8a, 8b, 8c
 *   f1_18 = Line 9: Subtract 8d from 7 (if zero or less, enter -0-)
 *   f1_19 = Line 10: Multiply smaller of line 6 or 9 by 12.4% (0.124)
 *   f1_20 = Line 11: Multiply line 6 by 2.9% (0.029)
 *   f1_21 = Line 12: Self-employment tax (add lines 10 and 11)
 *   f1_22 = Line 13: Deduction for one-half of SE tax (line 12 × 50%)
 *
 * Page 2 (Part II — Optional Methods, rarely used):
 *   f2_1  = Line 14: Maximum income for optional methods
 *   f2_2  = Line 15: Farm optional method
 *   f2_3  = Line 16: Subtract 15 from 14
 *   f2_4  = Line 17: Nonfarm optional method
 */
import type { IRSFieldMapping, IRSFormTemplate } from '../types/irsFormMappings.js';
export declare const SCHEDULE_SE_FIELDS: IRSFieldMapping[];
export declare const SCHEDULE_SE_TEMPLATE: IRSFormTemplate;
