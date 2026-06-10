/**
 * IRS Form 4868 (2025) — AcroForm Field Mapping
 *
 * Application for Automatic Extension of Time to File
 * U.S. Individual Income Tax Return
 * PDF: client/public/irs-forms/f4868.pdf
 *
 * Total fields: 17 (text: 15, checkbox: 2)
 *
 * VoucherHeader (payment voucher at bottom of page):
 *   f1_1 = Name(s)
 *   f1_2 = Address (street + city)
 *   f1_3 = State abbreviation (maxLen 2)
 *
 * PartI_ReadOrder (main form identification):
 *   f1_4  = Name(s) shown on return
 *   f1_5  = Address (number, street, apartment)
 *   f1_6  = City, town, or post office
 *   f1_7  = State (maxLen 2)
 *   f1_8  = ZIP code (maxLen 10)
 *   f1_9  = Your SSN (maxLen 11, format XXX-XX-XXXX)
 *   f1_10 = Spouse's SSN (maxLen 11)
 *
 * Dollar lines (standalone on Page1):
 *   f1_11 = Line 4: Estimate of total tax liability
 *   f1_12 = Line 5: Total payments
 *   f1_13 = Line 6: Balance due (line 4 − line 5)
 *   f1_14 = Line 7: Amount you're paying
 *
 * Checkboxes:
 *   c1_1 = Line 8: Out of the country
 *   c1_2 = Line 9: Filing Form 1040-NR
 *
 * Page 3:
 *   f3_1 = Part II individual info (not used)
 *
 * Note: Filing status checkboxes do not exist as fillable AcroForm
 * fields in this PDF version. Only 2 checkboxes are present (Lines 8/9).
 */
import type { IRSFieldMapping, IRSFormTemplate } from '../types/irsFormMappings.js';
export declare const FORM_4868_FIELDS: IRSFieldMapping[];
export declare const FORM_4868_TEMPLATE: IRSFormTemplate;
