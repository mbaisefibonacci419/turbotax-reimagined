/**
 * IRS Form 3903 (2025) — AcroForm Field Mapping
 *
 * Moving Expenses
 * For Members of the Armed Forces Only
 * Attachment Sequence No. 62
 * PDF: client/public/irs-forms/f3903.pdf
 *
 * Total fields: 7 (all text)
 *
 * Page1:
 *   f1_1 = Name(s) shown on return
 *   f1_2 = Your SSN
 *   f1_3 = Line 1: Transportation and storage of household goods and personal effects
 *   f1_4 = Line 2: Travel (including lodging) from old home to new home (not meals)
 *   f1_5 = Line 3: Add lines 1 and 2
 *   f1_6 = Line 4: Employer reimbursements NOT included in box 1 of Form W-2
 *   f1_7 = Line 5: Moving expense deduction (line 3 minus line 4; if zero or less, enter 0)
 *
 * Note: The engine tracks only the total deduction amount (tr.movingExpenses /
 * calc.form1040.movingExpenses), not the line-by-line breakdown. Lines 1-4 are
 * left blank; line 5 carries the final deduction.
 */
import type { IRSFieldMapping, IRSFormTemplate } from '../types/irsFormMappings.js';
export declare const FORM_3903_FIELDS: IRSFieldMapping[];
export declare const FORM_3903_TEMPLATE: IRSFormTemplate;
