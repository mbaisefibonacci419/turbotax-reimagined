/**
 * IRS Schedule C (Form 1040) 2025 — AcroForm Field Mapping
 *
 * Profit or Loss From Business (Sole Proprietorship)
 * PDF: client/public/irs-forms/f1040sc.pdf (Schedule C, 2025, Created 4/3/25)
 * Attachment Sequence No. 09
 * Total fields: 105 (text: 78, checkbox: 27)
 *
 * Field prefix: topmostSubform[0].Page1[0] (page 1) / topmostSubform[0].Page2[0] (page 2)
 *
 * Page 1 field map (from enumerate + visual inspection):
 *   f1_1  = Name of proprietor
 *   f1_2  = SSN
 *   f1_3  = A. Principal business or profession
 *   BComb.f1_4 = B. Business code (6-digit NAICS)
 *   f1_5  = C. Business name
 *   DComb.f1_6 = D. EIN
 *   f1_7  = E. Business address (street)
 *   f1_8  = E. City, state, ZIP
 *   c1_1[0/1/2] = F. Accounting method (Cash/Accrual/Other)
 *   f1_9  = F. Other (specify)
 *   c1_2[0/1] = G. Material participation (Yes/No)
 *   c1_3  = H. Started/acquired this year
 *   c1_4[0/1] = I. Made payments requiring 1099? (Yes/No)
 *   c1_5[0/1] = J. Filed required 1099s? (Yes/No)
 *   c1_6  = Line 1 statutory employee checkbox
 *   f1_10 = Line 1: Gross receipts
 *   f1_11 = Line 2: Returns and allowances
 *   f1_12 = Line 3: Net receipts
 *   f1_13 = Line 4: COGS
 *   f1_14 = Line 5: Gross profit
 *   f1_15 = Line 6: Other income
 *   f1_16 = Line 7: Gross income
 *   Lines8-17: f1_17..f1_27 = Lines 8-17
 *   Lines18-27: f1_28..f1_40 = Lines 18-27b
 *   f1_41 = Line 28: Total expenses
 *   f1_42 = Line 29: Tentative profit
 *   f1_43 = Line 30: Home office (amount)
 *   f1_44 = Line 30: Home office (description/sqft)
 *   f1_45 = Line 31: Net profit
 *   f1_46 = Line 32a text
 *   c1_7[0/1] = Line 32a/32b checkboxes
 *
 * Page 2:
 *   c2_1..c2_3 = Part III Line 33 (a/b/c inventory method)
 *   c2_4[0/1] = Part III Line 34 (Yes/No)
 *   f2_1..f2_7 = Part III Lines 35-41
 *   f2_8  = Part III Line 42: COGS
 *   f2_9..f2_14 = Part IV Lines 43-47b (vehicle info)
 *   c2_5..c2_8 = Part IV Yes/No checkboxes
 *   PartVTable Items 1-9: f2_15..f2_32 = Part V other expenses (description + amount pairs)
 *   f2_33 = Line 48: Total other expenses
 */
import type { IRSFieldMapping, IRSFormTemplate } from '../types/irsFormMappings.js';
export declare const SCHEDULE_C_FIELDS: IRSFieldMapping[];
export declare const SCHEDULE_C_TEMPLATE: IRSFormTemplate;
