/**
 * IRS Form 2210 (2025) -- AcroForm Field Mapping
 *
 * Underpayment of Estimated Tax by Individuals, Estates, and Trusts
 * PDF: client/public/irs-forms/f2210.pdf (Form 2210, 2025)
 * Attachment Sequence No. 06
 * Total fields: ~30 (text: ~24, checkbox: ~6)
 *
 * Field prefix: topmostSubform[0].Page1[0] / topmostSubform[0].Page2[0]
 *
 * Layout:
 *   Page 1:
 *     f1_1 = Name(s) shown on return
 *     f1_2 = Your SSN
 *
 *     Part I -- Required Annual Payment (Lines 1-9):
 *       f1_3 = Line 1: Required annual payment (current year tax)
 *       f1_4 = Line 2: Multiply line 1 by 90% (0.90)
 *       f1_5 = Line 3: Withholding taxes
 *       f1_6 = Line 4: Subtract line 3 from line 1 (if < $1,000, no penalty)
 *       f1_7 = Line 5: Other payments (estimated tax payments made)
 *       f1_8 = Line 6: Add lines 3 and 5
 *       f1_9 = Line 7: Required annual payment (lesser of line 2 or prior year's tax)
 *       f1_10 = Line 8: If line 6 >= line 7, stop; you don't owe penalty
 *       f1_11 = Line 9: Underpayment (line 7 - line 6)
 *       (Line 10+ moved to Page 2 in 2025; penalty total → f2_37)
 *
 *     Checkboxes:
 *       c1_1 = Box A: Waiver request
 *       c1_2 = Box B: Exception (annualized income installment method)
 *       c1_3 = Box C: Exception (prior year tax)
 *       c1_4 = Box D: Exception (withholding)
 *       c1_5 = Box E: Exception
 *       c1_6 = Box F: Exception
 *
 *   Page 2:
 *     Part II -- Regular Method (Lines 11-18, quarterly columns):
 *       Quarterly detail not tracked individually in engine --
 *       left blank for manual entry.
 *
 * Engine result: calc.estimatedTaxPenalty (EstimatedTaxPenaltyResult)
 */
import type { IRSFieldMapping, IRSFormTemplate } from '../types/irsFormMappings.js';
export declare const FORM_2210_FIELDS: IRSFieldMapping[];
export declare const FORM_2210_TEMPLATE: IRSFormTemplate;
