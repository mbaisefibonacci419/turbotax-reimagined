/**
 * IRS Form 8911 (2025) -- AcroForm Field Mapping
 *
 * Alternative Fuel Vehicle Refueling Property Credit
 * PDF: client/public/irs-forms/f8911.pdf (Form 8911, 2025)
 * Attachment Sequence No. 151
 * Total fields: 15 (text only)
 *
 * Field prefix: topmostSubform[0].Page1[0]
 *
 * Layout:
 *   f1_01 = Name(s) shown on return
 *   f1_02 = Identifying number (SSN/EIN)
 *
 *   Part I -- Total Cost of Qualified Property:
 *   f1_03 = Line 1: Total cost of qualified alternative fuel vehicle refueling property
 *                    placed in service during tax year (personal use portion)
 *
 *   Part II -- Credit for Personal Use Property (Lines 2-7):
 *   f1_04 = Line 2: Section 30C(e)(1) property costs (personal use)
 *   f1_05 = Line 3: Multiply line 2 by 30% (0.30)
 *   f1_06 = Line 4: Maximum credit per item ($1,000)
 *   f1_07 = Line 5: Enter the smaller of line 3 or line 4
 *   f1_08 = Line 6: Personal use credit (from all properties)
 *   f1_09 = Line 7: Tax liability limitation (for non-refundable credit)
 *
 *   Part III -- Credit for Business/Investment Use Property (Lines 8-12):
 *   f1_10 = Line 8: Business/investment use property costs
 *   f1_11 = Line 9: Multiply line 8 by 30%
 *   f1_12 = Line 10: Maximum credit per item ($100,000)
 *   f1_13 = Line 11: Business credit (smaller of line 9 or 10)
 *   f1_14 = Line 12: Total business credit (all properties)
 *
 *   f1_15 = Line 13: Total credit (personal + business, goes to Schedule 3 or Form 3800)
 */
import type { IRSFieldMapping, IRSFormTemplate } from '../types/irsFormMappings.js';
export declare const FORM_8911_FIELDS: IRSFieldMapping[];
export declare const FORM_8911_TEMPLATE: IRSFormTemplate;
