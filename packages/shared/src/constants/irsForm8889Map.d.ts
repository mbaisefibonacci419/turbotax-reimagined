/**
 * IRS Form 8889 (2025) -- AcroForm Field Mapping
 *
 * Health Savings Accounts (HSAs)
 * PDF: client/public/irs-forms/f8889.pdf (Form 8889, 2025)
 * Attachment Sequence No. 52
 * Total fields: 27 (text: 24, checkbox: 3)
 *
 * Field prefix: topmostSubform[0].Page1[0]
 *
 * Layout:
 *   f1_1  = Name shown on Form 1040 or 1040-SR
 *   f1_2  = Social security number
 *
 *   Coverage type checkboxes:
 *   c1_1[0] = Self-only coverage
 *   c1_1[1] = Family coverage
 *
 *   Part I -- HSA Contributions and Deduction (Lines 2-13):
 *   f1_3  = Line 2:  HSA contributions you made for 2025 (not employer)
 *   f1_4  = Line 3:  Employer contributions (from W-2 Box 12, Code W)
 *   f1_5  = Line 4:  Qualified HSA funding distributions from IRA
 *   f1_6  = Line 5:  Subtract line 4 from line 3
 *   f1_7  = Line 6:  HSA contribution limit ($4,300 self-only / $8,550 family)
 *   f1_8  = Line 7:  Additional catch-up contribution if 55+ ($1,000)
 *   f1_9  = Line 8:  Add lines 6 and 7
 *   f1_10 = Line 9:  Subtract line 5 from line 8
 *   f1_11 = Line 10: Compensation from employer maintaining HDHP
 *   f1_12 = Line 11: Lesser of line 9 or line 10
 *   f1_13 = Line 12: Contributions from line 2 not in excess of limitation
 *   f1_14 = Line 13: HSA deduction (smaller of line 2 or line 12)
 *
 *   Part II -- HSA Distributions (Lines 14a-17b):
 *   f1_15 = Line 14a: Total distributions received in 2025
 *   f1_16 = Line 14b: Distributions rolled over (included in 14a)
 *   f1_17 = Line 14c: Subtract line 14b from line 14a
 *   f1_18 = Line 15:  Qualified medical expenses paid (not reimbursed)
 *   f1_19 = Line 16:  Taxable HSA distributions (14c minus 15, if more than zero)
 *   c1_2  = Line 17b: Exception to additional 20% tax checkbox
 *   f1_20 = Line 17a: If taxable distributions and under age 65/not disabled
 *   f1_21 = Line 17b: Additional 20% tax (line 17a x 20%)
 *
 *   Part III -- Income and Additional Tax for Failure to Maintain HDHP (Lines 18-20):
 *   f1_22 = Line 18: Last-month rule contributions included in line 2
 *   f1_23 = Line 19: Qualified HSA funding distributions included in line 4
 *   f1_24 = Line 20: Total income from failure to maintain HDHP coverage
 */
import type { IRSFieldMapping, IRSFormTemplate } from '../types/irsFormMappings.js';
export declare const FORM_8889_FIELDS: IRSFieldMapping[];
export declare const FORM_8889_TEMPLATE: IRSFormTemplate;
