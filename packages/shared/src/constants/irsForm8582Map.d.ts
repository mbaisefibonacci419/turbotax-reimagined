/**
 * IRS Form 8582 (2025) — AcroForm Field Mapping
 *
 * Passive Activity Loss Limitations
 * PDF: client/public/irs-forms/f8582.pdf (Form 8582, 2025)
 * Attachment Sequence No. 88
 * Total fields: ~205 text fields across 2 pages
 *
 * Field prefix: topmostSubform[0].Page1[0] / topmostSubform[0].Page2[0]
 *
 * Layout:
 *   Page 1:
 *     f1_01 = Name(s) shown on return
 *     f1_02 = Your SSN
 *
 *     Part I — 2025 Passive Activity Loss (Lines 1–4):
 *       f1_03 = Line 1a: Rental RE activities with active participation — income
 *       f1_04 = Line 1b: Rental RE activities with active participation — loss
 *       f1_05 = Line 1c: Net (combine 1a and 1b)
 *       f1_06 = Line 2a: Commercial revitalization deductions from rental RE — (skip)
 *       f1_07 = Line 2b: (skip)
 *       f1_08 = Line 2c: (skip)
 *       f1_09 = Line 3a: All other passive activities — income
 *       f1_10 = Line 3b: All other passive activities — loss
 *       f1_11 = Line 3c: Net (combine 3a and 3b)
 *       f1_12 = Line 4: Combine lines 1c, 2c, and 3c
 *
 *     Part II — Special Allowance for Rental RE With Active Participation (Lines 5–10):
 *       f1_13 = Line 5: Enter the loss from line 4
 *       f1_14 = Line 6: Enter line 10 of Worksheet 2 (modified AGI)
 *       f1_15 = Line 7: Enter $150,000 ($75,000 if MFS)
 *       f1_16 = Line 8: Subtract line 6 from line 7
 *       f1_17 = Line 9: Multiply line 8 by 50% (.50)
 *       f1_18 = Line 10: Smaller of line 5 or line 9
 *
 *     Part III summary:
 *       f1_19 = Line 16: Total allowed losses (combine Worksheets 5 and 6)
 *
 *   Page 2:
 *     Parts IV–IX: Per-activity worksheets (would need instance support — not mapped here)
 *
 * Engine result: calc.form8582 (Form8582Result)
 *
 * NOTE: Worksheets on pages 1–2 contain per-activity rows that would require
 * instance support. Only summary/total lines are mapped here.
 */
import type { IRSFieldMapping, IRSFormTemplate } from '../types/irsFormMappings.js';
export declare const FORM_8582_FIELDS: IRSFieldMapping[];
export declare const FORM_8582_TEMPLATE: IRSFormTemplate;
