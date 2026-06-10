/**
 * IRS Form 8949 (2025) — AcroForm Field Mapping
 *
 * Sales and Other Dispositions of Capital Assets
 * PDF: client/public/irs-forms/f8949.pdf (Form 8949, 2025)
 * Attachment Sequence No. 12a
 * Total fields: 202 (text: 196, checkbox: 6 per page)
 *
 * Structure:
 *   Page 1 — Part I: Short-Term (Assets Held One Year or Less)
 *     Header: f1_01 (name), f1_02 (SSN)
 *     Checkboxes: c1_1[0..5] → Box A, B, C, G, H, I
 *     Table: 11 rows × 8 columns (description, dateAcquired, dateSold, proceeds, costBasis, code, adjustment, gainLoss)
 *       Row1:  f1_03..f1_10
 *       Row2:  f1_11..f1_18
 *       Row3:  f1_19..f1_26
 *       Row4:  f1_27..f1_34
 *       Row5:  f1_35..f1_42
 *       Row6:  f1_43..f1_50
 *       Row7:  f1_51..f1_58
 *       Row8:  f1_59..f1_66
 *       Row9:  f1_67..f1_74
 *       Row10: f1_75..f1_82
 *       Row11: f1_83..f1_90
 *     Totals: f1_91 (proceeds), f1_92 (cost), f1_93 (code), f1_94 (adjustment), f1_95 (gain/loss)
 *
 *   Page 2 — Part II: Long-Term (Assets Held More Than One Year)
 *     Same structure with f2_ prefix and c2_1 checkboxes
 *     Checkboxes: c2_1[0..5] → Box D, E, F, J, K, L
 *
 * Multi-instance: When transactions exceed 11 per category per term, additional
 * form instances are generated. Each instance fills the appropriate page(s).
 *
 * Form 8949 is only needed for transactions that CANNOT go directly on Schedule D
 * line 1a/8a — specifically, transactions with adjustments (wash sales) or where
 * basis was NOT reported to the IRS. Transactions with basis reported and no
 * adjustments go directly to Schedule D line 1a/8a without Form 8949.
 */
import type { IRSFieldMapping, IRSFormTemplate } from '../types/irsFormMappings.js';
/**
 * Form 8949 uses dynamic field generation via fieldsForInstance.
 * The static `fields` array is empty — all mappings are generated per-instance.
 */
export declare const FORM_8949_FIELDS: IRSFieldMapping[];
export declare const FORM_8949_TEMPLATE: IRSFormTemplate;
