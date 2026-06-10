/**
 * IRS Form 8839 (2025) -- AcroForm Field Mapping
 *
 * Qualified Adoption Expenses
 * PDF: client/public/irs-forms/f8839.pdf (Form 8839, 2025)
 * Attachment Sequence No. 38
 *
 * Structure:
 *   Page 1:
 *     Header: f1_1 (Name), f1_2 (SSN)
 *     Part I -- Information About Your Eligible Child or Children (Lines 1-2):
 *       Child 1: f1_3 (name), f1_4 (year of birth), f1_5/c1_1 (disabled checkbox)
 *       Child 2: f1_6 (name), f1_7 (year of birth), f1_8/c1_2 (disabled checkbox)
 *       Child 3: f1_9 (name), f1_10 (year of birth), f1_11/c1_3 (disabled checkbox)
 *       c1_1..c1_6: various checkboxes (special needs, foreign adoption, etc.)
 *
 *     Part II -- Adoption Credit (Lines 3-16):
 *       Child 1: f1_12 (L3 max credit), f1_13 (L4 qualified expenses), f1_14 (L5 subtract)
 *       Child 2: f1_15 (L6), f1_16 (L7), f1_17 (L8)
 *       Child 3: f1_18 (L9), f1_19 (L10), f1_20 (L11)
 *
 *     Part III -- AGI Limitation and Credit (Lines 12-18):
 *       Modified AGI, phase-out calculation, final credit
 *
 * Engine sources:
 *   tr.adoptionCredit: { qualifiedExpenses, numberOfChildren?, isSpecialNeeds? }
 *   calc.adoptionCredit: { expensesBasis, credit }
 *   calc.credits.adoptionCredit: number (final credit amount)
 *
 * This mapping covers header, Part I child info, Part II key amounts,
 * and Part III summary credit. Fields without engine data are left unmapped.
 */
import type { IRSFormTemplate } from '../types/irsFormMappings.js';
export declare const FORM_8839_TEMPLATE: IRSFormTemplate;
