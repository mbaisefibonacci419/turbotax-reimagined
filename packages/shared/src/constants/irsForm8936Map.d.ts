/**
 * IRS Form 8936 (2025) — AcroForm Field Mapping
 *
 * Clean Vehicle Credits
 * PDF: client/public/irs-forms/f8936.pdf (Form 8936, 2025)
 * Attachment Sequence No. 13a
 * Total fields: 31 (all text)
 *
 * Field prefix: topmostSubform[0].Page1[0]
 *
 * Page 1 field map:
 *   f1_1  = Name(s) shown on return
 *   f1_2  = Your identifying number (SSN)
 *   f1_3  = Line 1a: Year, make, model of vehicle (via Line1a_ReadOrder)
 *   f1_4  = Line 1b: Vehicle identification number (VIN)
 *   f1_5  = Line 1c: Date vehicle was placed in service
 *   f1_6  = Line 2a: Is this a new vehicle? (Yes/No text)
 *   f1_7  = Line 2b: Cost or other basis
 *   f1_8  = Line 2c: MSRP (if new)
 *   f1_9  = Line 3a: Is this a previously owned vehicle? (via Line3a_ReadOrder)
 *   f1_10 = Line 3b: Purchase price (if used)
 *   f1_11 = Line 4: Tentative credit amount
 *   f1_12 = Line 5: Business/investment use percentage
 *   f1_13 = Line 6: Business/investment use credit
 *   f1_14 = Line 7: Section 179 deduction
 *   f1_15 = Line 8: Personal use credit
 *   f1_16-f1_17 = Lines 9-10: Multiple vehicle adjustments
 *   f1_18 = Line 11: Total new clean vehicle credit
 *   f1_19-f1_22 = Lines 12-15: Previously owned vehicle credit
 *   f1_23 = Line 16: Total previously owned vehicle credit
 *   f1_24-f1_28 = Lines 17-21: Summary / carryforward
 *   f1_29 = Line 22: Credit to Schedule 3
 *   f1_30-f1_31 = Lines 23-24: Additional fields
 */
import type { IRSFieldMapping, IRSFormTemplate } from '../types/irsFormMappings.js';
export declare const FORM_8936_FIELDS: IRSFieldMapping[];
export declare const FORM_8936_TEMPLATE: IRSFormTemplate;
