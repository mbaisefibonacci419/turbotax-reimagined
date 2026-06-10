/**
 * IRS Form 4562 (2025) — AcroForm Field Mapping
 *
 * Depreciation and Amortization (Including Information on Listed Property)
 * PDF: client/public/irs-forms/f4562.pdf (Form 4562, 2025)
 * Attachment Sequence No. 179
 *
 * Field prefix: topmostSubform[0].Page1[0] (page 1)
 *
 * Page 1 field map (from AcroForm enumeration):
 *   f1_1  = Name shown on return
 *   f1_2  = Business or activity to which this form relates
 *   f1_3  = Identifying number
 *
 *   Part I — Section 179 (Lines 1-13):
 *   f1_4  = Line 1: Maximum amount
 *   f1_5  = Line 2: Total cost of section 179 property
 *   f1_6  = Line 3: Threshold cost
 *   f1_7  = Line 4: Reduction in limitation
 *   f1_8  = Line 5: Dollar limitation for tax year
 *   Table_Ln6.BodyRow1: f1_9 (desc), f1_10 (cost), f1_11 (elected)
 *   Table_Ln6.BodyRow2: f1_12 (desc), f1_13 (cost), f1_14 (elected)
 *   f1_15 = Line 7: Listed property (from Part V)
 *   f1_16 = Line 8: Total elected cost of section 179 property
 *   f1_17 = Line 9: Tentative deduction
 *   f1_18 = Line 10: Carryover of disallowed deduction from prior year
 *   f1_19 = Line 11: Business income limitation
 *   f1_20 = Line 12: Section 179 expense deduction
 *   f1_21 = Line 13: Carryover of disallowed deduction to next year
 *
 *   Part II — Special Depreciation Allowance (Line 14):
 *   f1_22 = Line 14: Special depreciation allowance
 *   f1_23 = Line 15-17 (other Part II fields)
 *   f1_24 = Line 21: Listed property (enter amount from line 28)
 *   f1_25 = Line 22: Total (add amounts from lines 12, 14, 17, 19g, 20g, and 21)
 *
 *   Part III — MACRS Depreciation, Section B (Line 19):
 *   SectionBTable.Line19a: f1_26..f1_31 (cols a-f for 3-year property)
 *   SectionBTable.Line19b: f1_32..f1_37 (5-year)
 *   SectionBTable.Line19c: f1_38..f1_43 (7-year)
 *   SectionBTable.Line19d: f1_44..f1_49 (10-year)
 *   SectionBTable.Line19e: f1_50..f1_55 (15-year)
 *   SectionBTable.Line19f: f1_56..f1_61 (20-year)
 *   SectionBTable.Line19g: f1_62..f1_67 (25-year)
 *   SectionBTable.Line19h: f1_68..f1_73 (residential rental 27.5-year)
 *   SectionBTable.Line19i: f1_74..f1_85 (nonresidential real 39-year — 2 rows)
 *   SectionBTable.Line19j: f1_86..f1_97 (other — 2 rows)
 *
 *   Part III — Section C (Line 20, ADS):
 *   SectionCTable.Line20a-e: f1_98..f1_127
 *
 *   Each Line 19 row has 6 columns:
 *     col 0 = (b) Month and year placed in service
 *     col 1 = (c) Basis for depreciation
 *     col 2 = (d) Recovery period
 *     col 3 = (e) Convention
 *     col 4 = (f) Method
 *     col 5 = (g) Depreciation deduction
 */
import type { IRSFieldMapping, IRSFormTemplate } from '../types/irsFormMappings.js';
export declare const FORM_4562_FIELDS: IRSFieldMapping[];
export declare const FORM_4562_TEMPLATE: IRSFormTemplate;
