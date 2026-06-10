/**
 * IRS Form 1040-V (2025) — AcroForm Field Mapping
 *
 * Payment Voucher for Individuals
 * PDF: client/public/irs-forms/f1040v.pdf (Form 1040-V, 2025)
 *
 * Only included when the filer owes money (amountOwed > 0).
 * All data is already available from TaxReturn and CalculationResult —
 * no additional user input is required.
 *
 * Field prefix: topmostSubform[0].Page1[0]
 *
 *   f1_1  = Line 1: Your SSN
 *   f1_2  = Line 2: Spouse SSN (if joint)
 *   f1_3  = Line 3: Amount you are paying
 *   f1_5  = Line 4: Your first name and middle initial
 *   f1_6  = Line 4: Your last name
 *   f1_7  = If joint, spouse's first name and middle initial
 *   f1_8  = Spouse's last name
 *   f1_9  = Home address (number and street)
 *   f1_10 = Apt. no.
 *   f1_11 = City, town, or post office
 *   f1_12 = State
 *   f1_13 = ZIP code
 *   f1_14 = Foreign country name
 *   f1_15 = Foreign province/state/county
 *   f1_16 = Foreign postal code
 */
import type { IRSFormTemplate } from '../types/irsFormMappings.js';
export declare const FORM_1040V_TEMPLATE: IRSFormTemplate;
