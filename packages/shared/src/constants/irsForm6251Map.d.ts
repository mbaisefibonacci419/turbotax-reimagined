/**
 * IRS Form 6251 (2025) — AcroForm Field Mapping
 *
 * Alternative Minimum Tax — Individuals
 * PDF: client/public/irs-forms/f6251.pdf (Form 6251, 2025)
 * Attachment Sequence No. 32
 * Total fields: ~62 text fields across 2 pages
 *
 * Field prefix: form1[0].Page1[0] / form1[0].Page2[0]
 *
 * Layout:
 *   Page 1:
 *     f1_1  = Name(s) shown on return
 *     f1_2  = Your SSN
 *
 *     Part I — Alternative Minimum Taxable Income (Lines 1–4):
 *       f1_3  = Line 1: Taxable income (Form 1040, line 15)
 *       f1_4  = Line 2a: Standard deduction add-back
 *       f1_5  = Line 2b: Tax refund adjustment
 *       f1_6  = Line 2c: Investment interest expense difference
 *       f1_7  = Line 2d: Depletion difference
 *       f1_8  = Line 2e: SALT deduction added back
 *       f1_9  = Line 2f: Alternative tax net operating loss deduction
 *       f1_10 = Line 2g: Private activity bond interest
 *       f1_11 = Line 2h: Qualified small business stock exclusion
 *       f1_12 = Line 2i: ISO exercise spread
 *       f1_13 = Line 2j: Estates and trusts (from Schedule K-1)
 *       f1_14 = Line 2k: Disposition of property difference
 *       f1_15 = Line 2l: Depreciation adjustment
 *       f1_16 = Line 2m: Passive activity loss difference
 *       f1_17 = Line 2n: Loss limitation difference
 *       f1_18 = Line 2o: Circulation costs
 *       f1_19 = Line 2p: Long-term contracts difference
 *       f1_20 = Line 2q: Mining costs
 *       f1_21 = Line 2r: Research and experimental costs
 *       f1_22 = Line 2s: Reserved for future use
 *       f1_23 = Line 2t: Intangible drilling costs
 *       f1_24 = Line 3: Other adjustments
 *       f1_25 = Line 4: Alternative Minimum Taxable Income (AMTI)
 *
 *     Part II — AMT Computation (Lines 5–11):
 *       f1_26 = Line 5: AMT exemption amount
 *       f1_27 = Line 6: AMT base (Line 4 - Line 5)
 *       f1_28 = Line 7: Tentative minimum tax
 *       f1_29 = Line 8: AMT foreign tax credit
 *       f1_30 = Line 9: TMT after FTC (Line 7 - Line 8)
 *       f1_31 = Line 10: Regular income tax (for comparison)
 *       f1_32 = Line 11: AMT amount (max(0, Line 9 - Line 10))
 *       f1_33 = (overflow / additional info)
 *
 *   Page 2 — Part III: Tax Computation Using Maximum Capital Gains Rates:
 *       f2_1  = Line 12: AMT base (from Part II, Line 6)
 *       f2_2  = Line 13: Adjusted net capital gain
 *       ...
 *       f2_29 = Line 40: Result used as TMT when Part III applies
 */
import type { IRSFieldMapping, IRSFormTemplate } from '../types/irsFormMappings.js';
export declare const FORM_6251_FIELDS: IRSFieldMapping[];
export declare const FORM_6251_TEMPLATE: IRSFormTemplate;
