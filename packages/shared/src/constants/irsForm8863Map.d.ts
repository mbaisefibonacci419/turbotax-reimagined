/**
 * IRS Form 8863 (2025) — AcroForm Field Mapping
 *
 * Education Credits (American Opportunity and Lifetime Learning Credits)
 * PDF: client/public/irs-forms/f8863.pdf (Form 8863, 2025)
 * Attachment Sequence No. 50
 * Total fields: 77 (text: 61, checkbox: 16)
 *
 * Structure:
 *   Page 1 — Parts I & II
 *     Header: f1_1 (name), SocialSecurity f1_2/f1_3/f1_4 (SSN 3-part)
 *     Part I — Refundable AOTC (Lines 1-8):
 *       f1_5 (L1), f1_6 (L2), f1_7 (L3), f1_8 (L4), f1_9 (L5),
 *       f1_10/f1_11 (L6 integer/decimal), c1_1 (L7 under-24 checkbox),
 *       f1_12 (L7), f1_13 (L8)
 *     Part II — Nonrefundable (Lines 9-19):
 *       f1_14 (L9), f1_15 (L10), f1_16 (L11), f1_17 (L12),
 *       f1_18 (L13), f1_19 (L14), f1_20 (L15), f1_21 (L16),
 *       f1_22/f1_23 (L17 integer/decimal), f1_24 (L18), f1_25 (L19)
 *
 *   Page 2 — Part III (one student per page; use additional copies for more)
 *     Header: f2_1 (name), SSN f2_2/f2_3/f2_4
 *     Line 20: f2-5 (student name — note dash, not underscore)
 *     Line 21: StudentSSN f2_6/f2_7/f2_8
 *     Line 22a (first institution): f2_9 (name), f2_10 (address),
 *       c2_1[0]/[1] (1098-T 2025 Y/N), c2_2[0]/[1] (1098-T 2024 box 7 Y/N),
 *       f2_11..f2_19 (EIN digits)
 *     Line 22b (second institution): f2_20 (name), f2_21 (address),
 *       c2_3[0]/[1], c2_4[0]/[1], f2_22..f2_30 (EIN digits)
 *     Lines 23-26: c2_5..c2_8 (Yes/No checkbox pairs)
 *     Lines 27-31: f2_31..f2_35
 *
 * Multi-instance: Page 2 holds one student. Instance 0 fills both pages;
 * instances 1+ fill only page 2 for subsequent students.
 */
import type { IRSFieldMapping, IRSFormTemplate } from '../types/irsFormMappings.js';
export declare const FORM_8863_FIELDS: IRSFieldMapping[];
export declare const FORM_8863_TEMPLATE: IRSFormTemplate;
