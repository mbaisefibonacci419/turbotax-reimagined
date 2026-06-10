/**
 * IRS Schedule B (2025) — AcroForm Field Mapping
 *
 * Interest and Ordinary Dividends
 * PDF: client/public/irs-forms/f1040sb.pdf (Schedule B, 2025)
 * Attachment Sequence No. 08
 * Total fields: 66 text + 6 checkboxes
 *
 * Field prefix: topmostSubform[0].Page1[0]
 *
 * Layout:
 *   f1_01 = Name(s) shown on return
 *   f1_02 = Your social security number
 *
 *   Part I — Interest (14 payer rows):
 *   f1_03/f1_04 through f1_29/f1_30 = payer name / amount pairs
 *   f1_31 = Line 2: Total of line 1
 *   f1_32 = Line 3: Excludable interest on EE/I bonds (Form 8815)
 *   f1_33 = Line 4: Line 2 minus Line 3 → Form 1040 Line 2b
 *
 *   Part II — Ordinary Dividends (15 payer rows):
 *   f1_34/f1_35 through f1_62/f1_63 = payer name / amount pairs
 *   f1_64 = Line 6: Total → Form 1040 Line 3b
 *
 *   Part III — Foreign Accounts and Trusts:
 *   c1_1[0]/c1_1[1] = Line 7a: Foreign account Yes/No
 *   c1_2[0]/c1_2[1] = Line 7a follow-up: Required to file FBAR Yes/No
 *   f1_65/f1_66     = Line 7b: Country name(s) (two lines)
 *   c1_3[0]/c1_3[1] = Line 8: Foreign trust Yes/No
 *
 * Note: f1_03 lives inside Line1_ReadOrder[0], f1_34 inside ReadOrderControl[0],
 *       c1_1 inside TagcorrectingSubform[0]. All others directly under Page1[0].
 */
import type { IRSFormTemplate } from '../types/irsFormMappings.js';
export declare const SCHEDULE_B_TEMPLATE: IRSFormTemplate;
