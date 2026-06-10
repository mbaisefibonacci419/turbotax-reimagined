/**
 * IRS Form 8615 (2025) — AcroForm Field Mapping
 *
 * Tax for Certain Children Who Have Unearned Income
 * PDF: client/public/irs-forms/f8615.pdf (Form 8615, 2025)
 * Attachment Sequence No. 33
 *
 * Field prefix: topmostSubform[0].Page1[0]
 *
 * Layout (single page):
 *   Header:
 *     f1_1 = Child's name
 *     f1_2 = Child's SSN
 *     f1_3 = Line A: Parent's name
 *     f1_4 = Line B: Parent's SSN
 *     c1_1[0..3] = Line C: Parent's filing status checkboxes
 *       [0] = Single, [1] = MFJ, [2] = MFS, [3] = HoH/QSS
 *
 *   Lines 1-5: Core computation
 *     f1_5 = Line 1: Child's unearned income
 *     f1_6 = Line 2: Minimum standard deduction ($2,500 for 2025)
 *     f1_7 = Line 3: Line 1 minus Line 2
 *     f1_8 = Line 4: Child's taxable income (Form 1040 line 15)
 *     f1_9 = Line 5: Smaller of Line 3 or Line 4
 *
 *   Lines 6-12: Tax computation at parent's rate
 *     f1_10 = Line 6: Tax on Line 5 at parent's rate
 *     f1_11 = Line 7: Tax on child's income at child's rate
 *     f1_12 = Line 8: Line 6 minus Line 7 (additional tax)
 *     f1_13 = Line 9: Tax on Line 8 at parent's rate
 *     f1_14 = Line 10: Tax on Line 4 at child's rate
 *     f1_15 = Line 11: Larger of Line 9 or Line 10
 *     f1_16 = Line 12: Total kiddie tax
 */
import type { IRSFieldMapping, IRSFormTemplate } from '../types/irsFormMappings.js';
export declare const FORM_8615_FIELDS: IRSFieldMapping[];
export declare const FORM_8615_TEMPLATE: IRSFormTemplate;
