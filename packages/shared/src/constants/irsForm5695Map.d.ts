/**
 * IRS Form 5695 (2025) — AcroForm Field Mapping
 *
 * Residential Energy Credits
 * PDF: client/public/irs-forms/f5695.pdf (Form 5695, 2025)
 * Attachment Sequence No. 158
 * Total fields: 167 (text: 149, checkbox: 18)
 *
 * Part I  (Pages 1-2): Residential Clean Energy Credit (solar, wind, geothermal, battery, fuel cell)
 * Part II (Pages 3-4): Energy Efficient Home Improvement Credit (insulation, windows, HVAC, etc.)
 *
 * This mapping covers:
 *   - Header fields (name, SSN)
 *   - Part I: Residential Clean Energy Credit (from CleanEnergyInfo/Result)
 *   - Part II: Energy Efficient Home Improvement Credit (from EnergyEfficiencyInfo/Result)
 *
 * Field prefix: topmostSubform[0].PageN[0]
 *
 * Page 1 (Part I — Residential Clean Energy Credit):
 *   f1_01 = Name(s)
 *   f1_02 = SSN
 *   f1_03 = Line 1: Qualified solar electric property costs
 *   f1_04 = Line 2: Qualified solar water heating property costs
 *   f1_05 = Line 3: Qualified small wind energy property costs
 *   f1_06 = Line 4: Qualified geothermal heat pump property costs
 *   f1_07 = Line 5: Qualified battery storage technology costs
 *   f1_08 = Line 6a: Qualified fuel cell property costs
 *   f1_09 = Line 6b: Fuel cell kilowatt capacity
 *   f1_10 = Line 6c: Fuel cell credit limit
 *   f1_11 = Line 7: Add lines 1-5 and 6a
 *   c1_1[0/1] = Line 8: Yes/No (did you share expenses?)
 *   f1_12 = Line 9: Applicable percentage (30%)
 *   f1_13 = Line 10: Multiply line 7 by line 9
 *   f1_14 = Line 11: Fuel cell credit
 *   c1_2[0/1] = Line 12a/12b
 *   f1_15 = Line 13: Credit carryforward from prior year
 *   f1_16 = Line 14: Add lines 10, 11, and 13
 *   f1_17..f1_30 = Lines 15-30: Tax limitation worksheet
 *
 * Page 3 (Part II — Energy Efficient Home Improvement Credit):
 *   f3_01..f3_20 = Line 21c table (qualified improvements table)
 *   f3_21 = Line 21d: Total from table
 *   f3_22..f3_52 = Lines 22-30: Credit calculation, limitations
 *
 * Page 4 (Part II continuation):
 *   f4_01..f4_21 = Lines 26-30+: Additional calculations, prior year credits
 */
import type { IRSFieldMapping, IRSFormTemplate } from '../types/irsFormMappings.js';
export declare const FORM_5695_FIELDS: IRSFieldMapping[];
export declare const FORM_5695_TEMPLATE: IRSFormTemplate;
