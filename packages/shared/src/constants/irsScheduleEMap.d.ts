/**
 * IRS Schedule E (Form 1040) 2025 — AcroForm Field Mapping
 *
 * Supplemental Income and Loss
 * (From rental real estate, royalties, partnerships, S corporations, estates, trusts, REMICs, etc.)
 * PDF: client/public/irs-forms/f1040se.pdf (Schedule E, 2025)
 * Attachment Sequence No. 13
 * Total fields: 185 (text: 167, checkbox: 18)
 *
 * Field prefix: topmostSubform[0].Page1[0] (page 1) / topmostSubform[0].Page2[0] (page 2)
 *
 * Page 1 field map (Part I — Income or Loss From Rental Real Estate and Royalties):
 *   f1_1  = Name(s) shown on return
 *   f1_2  = Your social security number
 *   c1_1[0/1] = A: Did you make payments requiring Form(s) 1099? (Yes/No)
 *   c1_2[0/1] = B: If "Yes," did you file required Form(s) 1099? (Yes/No)
 *
 *   Properties A/B/C (3-column grid):
 *   Table_Line1a RowA/B/C: f1_3..f1_5 = Physical address of each property
 *   Table_Line1b RowA/B/C: f1_6..f1_8 = Type of property (code 1-8)
 *   Table_Line2  RowA/B/C: f1_9..f1_14 = Fair rental days + Personal use days
 *                           c1_3..c1_5 = QJV checkbox
 *   f1_15 = (reserved/spacer)
 *
 *   Income:
 *   Table_Income Line3: f1_16..f1_18 = Rents received (A/B/C)
 *   Table_Income Line4: f1_19..f1_21 = Royalties received (A/B/C)
 *
 *   Expenses (Lines 5-19, 3 columns per line):
 *   Table_Expenses Line5:  f1_22..f1_24 = Advertising
 *   Table_Expenses Line6:  f1_25..f1_27 = Auto and travel
 *   Table_Expenses Line7:  f1_28..f1_30 = Cleaning and maintenance
 *   Table_Expenses Line8:  f1_31..f1_33 = Commissions
 *   Table_Expenses Line9:  f1_34..f1_36 = Insurance
 *   Table_Expenses Line10: f1_37..f1_39 = Legal and other professional fees
 *   Table_Expenses Line11: f1_40..f1_42 = Management fees
 *   Table_Expenses Line12: f1_43..f1_45 = Mortgage interest paid
 *   Table_Expenses Line13: f1_46..f1_48 = Other interest
 *   Table_Expenses Line14: f1_49..f1_51 = Repairs
 *   Table_Expenses Line15: f1_52..f1_54 = Supplies
 *   Table_Expenses Line16: f1_55..f1_57 = Taxes
 *   Table_Expenses Line17: f1_58..f1_60 = Utilities
 *   Table_Expenses Line18: f1_61..f1_63 = Depreciation expense or depletion
 *   Table_Expenses Line19: f1_64 = Other description, f1_65..f1_67 = Other (A/B/C)
 *
 *   Totals:
 *   Table_Expenses Line20: f1_68..f1_70 = Total expenses (A/B/C)
 *   Table_Expenses Line21: f1_71..f1_73 = Net income/loss per property (A/B/C)
 *   Table_Expenses Line22: f1_74..f1_76 = Deductible rental real estate loss (A/B/C)
 *
 *   Summary (Lines 23-26):
 *   f1_77 = Line 23a: Total rents received (sum across all properties)
 *   f1_78 = Line 23b: Total royalties received
 *   f1_79 = Line 23c: Total expenses (sum across all properties)
 *   f1_80 = Line 23d: Net income/loss (sum of Line 21 across properties)
 *   f1_81 = Line 23e: Deductible loss total (sum of Line 22)
 *   f1_82 = Line 24: Income (positive amounts only)
 *   f1_83 = Line 25: Losses (as positive amount)
 *   f1_84 = Line 26: Total rental real estate and royalty income or (loss)
 *
 * Page 2:
 *   f2_1  = Name(s) continuation
 *   f2_2  = SSN continuation
 *   c2_1[0/1] = Line 27: Active participation checkbox
 *
 *   Part II — Income or Loss From Partnerships and S Corporations:
 *   Table_Line28a-f RowA-D: Entity info (name, type, foreign, EIN, at-risk, basis)
 *   Table_Line28g-k RowA-D: Income/loss columns (passive deduction, passive income,
 *                            nonpassive deduction, nonpassive income, sec 179)
 *   f2_35..f2_41: Lines 29-32 totals
 *
 *   Part III — Income or Loss From Estates and Trusts (skipped in this mapping)
 *   Part IV — Income or Loss From Real Estate Mortgage Investment Conduits (skipped)
 *
 *   Summary:
 *   f2_76..f2_80: Lines 39-42 grand totals
 */
import type { IRSFieldMapping, IRSFormTemplate } from '../types/irsFormMappings.js';
export declare const SCHEDULE_E_FIELDS: IRSFieldMapping[];
export declare const SCHEDULE_E_TEMPLATE: IRSFormTemplate;
