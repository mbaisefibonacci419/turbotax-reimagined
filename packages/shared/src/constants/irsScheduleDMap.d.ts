/**
 * IRS Schedule D (Form 1040) 2025 — AcroForm Field Mapping
 *
 * Capital Gains and Losses
 * PDF: client/public/irs-forms/f1040sd.pdf (Schedule D, 2025, Created 10/6/25)
 * Attachment Sequence No. 12
 * Total fields: 55 (text: 49, checkbox: 6)
 *
 * Field prefix: topmostSubform[0].Page1[0] (page 1) / topmostSubform[0].Page2[0] (page 2)
 *
 * Page 1 field map:
 *   f1_1     = Name(s) shown on return
 *   f1_2     = SSN
 *   c1_1[0]  = Qualified opportunity fund — Yes
 *   c1_1[1]  = Qualified opportunity fund — No
 *
 *   Part I — Short-Term (Lines 1a–7):
 *   Table_PartI Row1a: f1_3(d), f1_4(e), f1_5(g), f1_6(h)   → Line 1a (basis reported, no adjustments)
 *   Table_PartI Row1b: f1_7(d), f1_8(e), f1_9(g), f1_10(h)  → Line 1b (Form 8949 Box A/G)
 *   Table_PartI Row2:  f1_11(d), f1_12(e), f1_13(g), f1_14(h) → Line 2 (Box B/H)
 *   Table_PartI Row3:  f1_15(d), f1_16(e), f1_17(g), f1_18(h) → Line 3 (Box C/I)
 *   f1_19 = Line 4 (Form 6252, 4684, 6781, 8824)
 *   f1_20 = Line 5 (K-1 short-term)
 *   f1_21 = Line 6 (ST capital loss carryover)
 *   f1_22 = Line 7 (net ST capital gain/loss)
 *
 *   Part II — Long-Term (Lines 8a–15):
 *   Table_PartII Row8a:  f1_23(d), f1_24(e), f1_25(g), f1_26(h) → Line 8a (basis reported, no adjustments)
 *   Table_PartII Row8b:  f1_27(d), f1_28(e), f1_29(g), f1_30(h) → Line 8b (Box D/J)
 *   Table_PartII Row9:   f1_31(d), f1_32(e), f1_33(g), f1_34(h) → Line 9 (Box E/K)
 *   Table_PartII Row10:  f1_35(d), f1_36(e), f1_37(g), f1_38(h) → Line 10 (Box F/L)
 *   f1_39 = Line 11 (Form 4797, 2439, 6252, 4684, 6781, 8824)
 *   f1_40 = Line 12 (K-1 long-term)
 *   f1_41 = Line 13 (capital gain distributions)
 *   f1_42 = Line 14 (LT capital loss carryover)
 *   f1_43 = Line 15 (net LT capital gain/loss)
 *
 * Page 2 — Part III Summary:
 *   f2_1     = Line 16 (combine lines 7 and 15)
 *   c2_1[0]  = Line 17 Yes (both lines 15 & 16 are gains)
 *   c2_1[1]  = Line 17 No
 *   f2_2     = Line 18 (28% rate gain)
 *   f2_3     = Line 19 (unrecaptured §1250 gain)
 *   c2_2[0]  = Line 20 Yes (lines 18 & 19 both zero/blank)
 *   c2_2[1]  = Line 20 No
 *   f2_4     = Line 21 (capital loss deduction)
 *   c2_3[0]  = Line 22 Yes (qualified dividends on line 3a)
 *   c2_3[1]  = Line 22 No
 */
import type { IRSFieldMapping, IRSFormTemplate } from '../types/irsFormMappings.js';
export declare const SCHEDULE_D_FIELDS: IRSFieldMapping[];
export declare const SCHEDULE_D_TEMPLATE: IRSFormTemplate;
