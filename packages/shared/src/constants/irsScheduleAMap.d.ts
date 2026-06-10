/**
 * IRS Schedule A (2025) — AcroForm Field Mapping
 *
 * Itemized Deductions
 * PDF: client/public/irs-forms/f1040sa.pdf (Schedule A, 2025)
 * Attachment Sequence No. 07
 * Total fields: 33 (text: 30, checkbox: 3)
 *
 * Field prefix: form1[0].Page1[0]
 *
 * Layout:
 *   f1_1  = Name(s) shown on return
 *   f1_2  = Your SSN
 *
 *   Medical and Dental Expenses (Lines 1-4):
 *   f1_3  = Line 1: Medical and dental expenses
 *   f1_4  = Line 2: Enter amount from Form 1040, line 11 (AGI) [Line2_ReadOrder]
 *   f1_5  = Line 3: Multiply line 2 by 0.075
 *   f1_6  = Line 4: Subtract line 3 from line 1 (if line 3 > line 1, enter 0)
 *
 *   Taxes You Paid (Lines 5-7):
 *   c1_1  = Line 5a checkbox: Check if general sales tax election
 *   f1_7  = Line 5a: State and local income taxes (or general sales taxes)
 *   f1_8  = Line 5b: State and local real estate taxes
 *   f1_9  = Line 5c: State and local personal property taxes
 *   f1_10 = Line 5d: Add lines 5a through 5c
 *   f1_11 = Line 5e: Enter the smaller of line 5d or SALT cap
 *   f1_12 = Line 6: Other taxes (list type and amount)
 *   f1_13 = Line 7: Add lines 5e and 6
 *
 *   Interest You Paid (Lines 8-10):
 *   f1_14 = Line 8a: Home mortgage interest and points (Form 1098)
 *   c1_2  = Line 8a checkbox: Check if paid to someone not on 1098 [Line8_ReadOrder]
 *   f1_15 = Line 8b: Home mortgage interest not reported on Form 1098
 *   f1_16 = Line 8c: Points not reported on Form 1098 [Line8b_ReadOrder]
 *   f1_17 = Line 8d: Mortgage insurance premiums
 *   f1_18 = Line 8e: Add lines 8a through 8d
 *   f1_19 = Line 9: Investment interest (Form 4952)
 *   f1_20 = Line 10: Add lines 8e and 9
 *
 *   Gifts to Charity (Lines 11-14):
 *   f1_21 = Line 11: Gifts by cash or check
 *   f1_22 = Line 12: Other than by cash or check
 *   f1_23 = Line 13: Carryover from prior year
 *   f1_24 = Line 14: Add lines 11 through 13
 *
 *   Casualty and Theft Losses (Line 15):
 *   f1_25 = Line 15: Casualty and theft loss(es) from Form 4684
 *
 *   Other Itemized Deductions (Line 16):
 *   f1_26 = Line 16: Other (list type and amount)
 *
 *   Total Itemized Deductions (Lines 17-18):
 *   f1_27 = Line 17: Add lines 4, 7, 10, 14, 15, and 16
 *   f1_28 = Line 18: Standard deduction amount (for comparison)
 *   c1_3  = Line 18 checkbox [Line18_ReadOrder]
 *   f1_29 = (additional line, possibly total or adjustment)
 *   f1_30 = (additional line, possibly total or adjustment)
 */
import type { IRSFieldMapping, IRSFormTemplate } from '../types/irsFormMappings.js';
export declare const SCHEDULE_A_FIELDS: IRSFieldMapping[];
export declare const SCHEDULE_A_TEMPLATE: IRSFormTemplate;
