/**
 * IRS Form 4797 (2025) -- AcroForm Field Mapping
 *
 * Sales of Business Property
 * PDF: client/public/irs-forms/f4797.pdf (Form 4797, 2025)
 * Attachment Sequence No. 27
 *
 * Field prefix: topmostSubform[0]
 *
 * Layout:
 *   Page 1:
 *     f1_1 = Name(s) shown on return
 *     f1_2 = Identifying number (SSN/EIN)
 *
 *     Part I: Sales or Exchanges of Property Used in a Trade or Business and
 *             Involuntary Conversions From Other Than Casualty or Theft --
 *             Property Held More Than 1 Year (Section 1231)
 *       TableLine2: 4 rows x 7 columns
 *         Row 1: f1_03..f1_09  (description, dateAcquired, dateSold, grossSalesPrice, depreciation, costBasis, gainOrLoss)
 *         Row 2: f1_10..f1_16
 *         Row 3: f1_17..f1_23
 *         Row 4: f1_24..f1_30
 *       f1_31 = Line 6: Gain, if any, from Form 4684
 *       f1_32 = Line 7: Section 1231 gain from installment sales
 *       f1_33 = Line 8: Section 1231 gain or loss from like-kind exchanges
 *       f1_34 = Line 9: Gain from Form 6252 (installment)
 *       f1_35 = Line 10: Net gain or loss -- combine lines 2-9
 *       f1_36 = Line 11: Nonrecaptured net Section 1231 losses from prior years
 *
 *     Part II: Ordinary Gains and Losses
 *       TableLine10: 4 rows x 7 columns
 *         Row 1: f1_37..f1_43  (description, dateAcquired, dateSold, grossSalesPrice, depreciation, costBasis, gainOrLoss)
 *         Row 2: f1_44..f1_50
 *         Row 3: f1_51..f1_57
 *         Row 4: f1_58..f1_64
 *       f1_65 = Line 15: Net gain from Form 4797 Part III line 31 (ordinary income from recapture)
 *       f1_66 = Line 16: Ordinary gains from Part I of Form 4684
 *       f1_67 = Line 17: Combine lines 10 through 16
 *       f1_68 = Line 18a: For all except individual returns (skip)
 *       f1_69 = Line 18b: Combines with 18a
 *
 *   Page 2:
 *     Part III: Gain From Disposition of Property Under Sections 1245, 1250,
 *               1252, 1254, and 1255 (table for up to 4 properties)
 *       Column (a)-(d) for up to 4 properties:
 *       f2_01..f2_04 = Line 19: Description of section 1245/1250/etc. property
 *       f2_05..f2_08 = Line 20: Date acquired
 *       f2_09..f2_12 = Line 21: Date sold
 *       f2_13..f2_16 = Line 22: Cost or other basis
 *       f2_17..f2_20 = Line 23: Depreciation allowed
 *       f2_21..f2_24 = Line 24: Adjusted basis (line 22 minus line 23)
 *       f2_25..f2_28 = Line 25: Total gain (line 20a minus line 24)
 *       f2_29..f2_32 = Line 26: Section 1245 -- applicable percentage (usually 100%)
 *       f2_33..f2_36 = Line 25b: If section 1245 property: lesser of line 25 or depreciation
 *       f2_37..f2_40 = Line 26: Section 1250 -- excess depreciation
 *       f2_41..f2_44 = Line 26a: Additional depreciation after 1975
 *       f2_45..f2_48 = Line 26b: Applicable percentage (for certain property)
 *       f2_49..f2_52 = Line 26c: Multiply line 26a x line 26b
 *       --- (Lines 27-30 for sections 1252, 1254, 1255 -- less common, skipped)
 *       f2_61..f2_64 = Line 31: Total (summary of ordinary income per property)
 *
 *     Part IV: Recapture Amounts Under Sections 179 and 280F(b)(2)
 *       f2_65 = Line 32: Section 179 expense deduction or depreciation
 *       f2_66 = Line 33: Section 280F(b)(2) listed property
 *
 * Multi-instance: When properties exceed 4 per section, additional
 * form instances are generated.
 */
import type { IRSFieldMapping, IRSFormTemplate } from '../types/irsFormMappings.js';
/**
 * Form 4797 uses dynamic field generation via fieldsForInstance.
 * The static `fields` array is empty -- all mappings are generated per-instance.
 */
export declare const FORM_4797_FIELDS: IRSFieldMapping[];
export declare const FORM_4797_TEMPLATE: IRSFormTemplate;
