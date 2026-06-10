/**
 * IRS Form 8962 (2025) — AcroForm Field Mapping
 *
 * Premium Tax Credit (PTC)
 * PDF: client/public/irs-forms/f8962.pdf (Form 8962, 2025)
 * Attachment Sequence No. 73
 * Total fields: 141 (text: 133, checkbox: 8)
 *
 * Field prefix: topmostSubform[0].Page1[0] / topmostSubform[0].Page2[0]
 *
 * Page 1:
 *   f1_1  = Name(s)
 *   f1_2  = SSN
 *   c1_1  = Checkbox (shared policy allocation?)
 *
 *   Part I — Annual and Monthly Contribution Amount:
 *   f1_3  = Line 1: Tax family size
 *   f1_4  = Line 2a: Modified AGI
 *   f1_5  = Line 2b: Dependents' MAGI
 *   f1_6  = Line 3: Household income (2a + 2b)
 *   c1_2[0/1/2] = Line 4: Filing status checkboxes
 *   f1_7  = Line 5: Federal poverty line amount
 *   f1_8  = Line 6: Household income as % of FPL
 *   f1_9  = Line 7: Applicable figure
 *   f1_10 = Line 8a: Annual contribution (household income × applicable figure)
 *   f1_11 = Line 8b: Monthly contribution (line 8a ÷ 12)
 *   c1_4/c1_5 = Checkboxes
 *
 *   Part II — Premium Tax Credit Claim:
 *   Part2Table1 BodyRow1: f1_13..f1_18 = Annual totals
 *     (col a: enrollment premium, col b: applicable SLCSP, col c: contribution,
 *      col d: max PTC, col e: advance PTC, col f: net PTC)
 *   Part2Table2 BodyRow1-12: Monthly details (Jan-Dec)
 *     Each row: 6 columns (f fields in groups of 6)
 *
 *   f1_91..f1_96: Part III summary (lines 24-29)
 *
 * Page 2:
 *   f2_1..f2_36: Part IV and Part V (shared policy allocation, alternative calculation)
 */
import type { IRSFieldMapping, IRSFormTemplate } from '../types/irsFormMappings.js';
export declare const FORM_8962_FIELDS: IRSFieldMapping[];
export declare const FORM_8962_TEMPLATE: IRSFormTemplate;
