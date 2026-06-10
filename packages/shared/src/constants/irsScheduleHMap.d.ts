/**
 * IRS Schedule H (2025) — AcroForm Field Mapping
 *
 * Household Employment Taxes
 * PDF: client/public/irs-forms/f1040sh.pdf (Schedule H, 2025)
 * Attachment Sequence No. 44
 * Total fields: ~30+ (text + checkbox)
 *
 * Field prefix: topmostSubform[0].Page1[0] / topmostSubform[0].Page2[0]
 *
 * Layout:
 *   Page 1:
 *     f1_1  = Name of employer
 *     f1_2  = Social security number (SSN)
 *     f1_3  = Employer identification number (EIN), if any
 *
 *     Part I — Social Security, Medicare, and FUTA Taxes:
 *       f1_4  = Line A: Did you pay any one household employee cash wages of $2,800 or more? (Yes/No)
 *       f1_5  = Line 1: Total cash wages subject to social security tax
 *       f1_6  = Line 2: Social security tax (line 1 x 12.4%)
 *       f1_7  = Line 3: Total cash wages subject to Medicare tax
 *       f1_8  = Line 4: Medicare tax (line 3 x 2.9%)
 *       f1_9  = Line 5: Federal income tax withheld (if agreed upon)
 *       f1_10 = Line 6: Total social security, Medicare, and withheld taxes (add lines 2, 4, 5)
 *       f1_11 = Line 7: FUTA question / Did you pay $1,000+ in any quarter?
 *
 *   Page 2 — Part II: FUTA Detailed Computation:
 *     (Lines 8–26 for detailed FUTA, state unemployment credit, and totals)
 *       f2_1  = Line 10: FUTA taxable wages (up to $7,000 per employee)
 *       f2_2  = Line 11: FUTA tax before adjustments
 *       f2_3  = Line 12–15: State unemployment credit adjustments
 *       f2_4  = Line 16: Total household employment taxes
 *     (Additional fields for schedule filing details)
 */
import type { IRSFieldMapping, IRSFormTemplate } from '../types/irsFormMappings.js';
export declare const SCHEDULE_H_FIELDS: IRSFieldMapping[];
export declare const SCHEDULE_H_TEMPLATE: IRSFormTemplate;
