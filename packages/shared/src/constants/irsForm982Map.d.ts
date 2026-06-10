/**
 * IRS Form 982 (Rev. March 2018) -- AcroForm Field Mapping
 *
 * Reduction of Tax Attributes Due to Discharge of Indebtedness
 * (and Section 1082 Basis Adjustment)
 * PDF: client/public/irs-forms/f982.pdf
 * Attachment Sequence No. 94
 *
 * Field prefix: topmostSubform[0].Page1[0]
 *
 * Layout (verified by PDF field dump with position analysis):
 *   Page 1:
 *     f1_1  = Name shown on return
 *     f1_2  = Identifying number (SSN)
 *
 *     Part I -- General Information (Lines 1a-1e, 2, 3):
 *       c1_1  = Line 1a: Discharge in a title 11 bankruptcy case
 *       c1_2  = Line 1b: Discharge to extent insolvent (not in title 11)
 *       c1_3  = Line 1c: Discharge of qualified farm indebtedness
 *       c1_4  = Line 1d: Discharge of qualified real property business indebtedness
 *       c1_5  = Line 1e: Discharge of qualified principal residence indebtedness
 *       f1_3  = Line 2: Total amount of discharged debt excluded from income
 *       c1_7[0]/[1] = Line 3: Yes/No — elect to treat real property as §1221(a)(1)
 *
 *     Part II -- Reduction of Tax Attributes (Lines 4-13):
 *       f1_4  = Line 4:  Qualified real property business basis reduction
 *       f1_5  = Line 5:  §108(b)(5) election — reduce basis of depreciable property first
 *       f1_6  = Line 6:  NOL reduction
 *       f1_7  = Line 7:  General business credit carryover reduction
 *       f1_8  = Line 8:  Minimum tax credit reduction
 *       f1_9  = Line 9:  Net capital loss / carryover reduction
 *       f1_10 = Line 10a: Basis of nondepreciable and depreciable property
 *       f1_11 = Line 10b: Basis of principal residence (only if Line 1e checked)
 *       f1_12 = Line 11a: Farm — depreciable property basis
 *       f1_13 = Line 11b: Farm — land basis
 *       f1_14 = Line 11c: Farm — other property basis
 *       f1_15 = Line 12:  Passive activity loss / credit carryover reduction
 *       f1_16 = Line 13:  Foreign tax credit carryover reduction
 *
 *     Part III -- Consent of Corporation (Section 1082(a)(2)):
 *       f1_17 = Amount excluded from gross income
 *       f1_18 = Tax year beginning date
 *       f1_19 = Tax year ending date
 *       f1_20 = State of incorporation
 */
import type { IRSFieldMapping, IRSFormTemplate } from '../types/irsFormMappings.js';
export declare const FORM_982_FIELDS: IRSFieldMapping[];
export declare const FORM_982_TEMPLATE: IRSFormTemplate;
