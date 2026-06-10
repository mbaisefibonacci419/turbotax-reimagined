/**
 * IRS Schedule F (2025) — AcroForm Field Mapping
 *
 * Profit or Loss From Farming
 * PDF: client/public/irs-forms/f1040sf.pdf (Schedule F, 2025)
 * Attachment Sequence No. 15
 * Total fields: ~78 (text: ~72, checkbox: ~6)
 *
 * Field prefix: topmostSubform[0].Page1[0] / topmostSubform[0].Page2[0]
 *
 * Layout:
 *   Page 1:
 *     f1_1  = Name of proprietor
 *     f1_2  = Social security number (SSN)
 *     f1_3  = Principal crop or activity
 *     f1_4  = Employer ID number (EIN)
 *     c1_1  = Accounting method: Cash checkbox
 *     c1_2  = Accounting method: Accrual checkbox
 *     c1_3  = Did you "materially participate"? Yes
 *     c1_4  = Did you "materially participate"? No
 *     c1_5  = Did you make any payments requiring Form 1099? Yes
 *     c1_6  = Did you make any payments requiring Form 1099? No
 *
 *     Part I — Farm Income — Cash Method (Lines 1–11):
 *       f1_5  = Line 1: Sales of livestock and other resale items
 *       f1_6  = Line 2: Cost or other basis of livestock/items sold
 *       f1_7  = Line 3: Subtract line 2 from line 1
 *       f1_8  = Line 4: Sales of livestock, produce, grains you raised
 *       f1_9  = Line 5a: Cooperative distributions (total)
 *       f1_10 = Line 5b: Cooperative distributions (taxable amount)
 *       f1_11 = Line 6a: Agricultural program payments (total)
 *       f1_12 = Line 6b: Agricultural program payments (taxable amount)
 *       f1_13 = Line 7a: CCC loans reported
 *       f1_14 = Line 7b: CCC loans forfeited (taxable)
 *       f1_15 = Line 8a: Crop insurance proceeds received
 *       f1_16 = Line 8b: Crop insurance proceeds (taxable)
 *       f1_17 = Line 9: Custom hire (machine work) income
 *       f1_18 = Line 10: Other farm income (specify)
 *       f1_19 = Line 10 description text
 *       f1_20 = Line 11: Gross income (add lines 3, 4, 5b, 6b, 7b, 8b, 9, 10)
 *
 *     Part II — Farm Expenses (Lines 12–33):
 *       f1_21 = Line 12: Car and truck expenses
 *       f1_22 = Line 13: Chemicals
 *       f1_23 = Line 14: Conservation expenses
 *       f1_24 = Line 15: Custom hire (machine work)
 *       f1_25 = Line 16: Depreciation and Section 179
 *       f1_26 = Line 17: Employee benefit programs
 *       f1_27 = Line 18: Feed
 *       f1_28 = Line 19: Fertilizers and lime
 *       f1_29 = Line 20: Freight and trucking
 *       f1_30 = Line 21: Gasoline, fuel, and oil
 *       f1_31 = Line 22: Insurance (other than health)
 *       f1_32 = Line 23: Interest (mortgage)
 *       f1_33 = Line 24: Interest (other)
 *       f1_34 = Line 25: Labor hired
 *       f1_35 = Line 26: Pension and profit-sharing plans
 *       f1_36 = Line 27: Rent or lease (vehicles/machinery/equipment)
 *       f1_37 = Line 28: Rent or lease (other — land, animals)
 *       f1_38 = Line 29: Repairs and maintenance
 *       f1_39 = Line 30: Seeds and plants
 *       f1_40 = Line 31: Storage and warehousing
 *       f1_41 = Line 32: Supplies
 *       f1_42 = Line 33: Taxes
 *       f1_43 = Line 34: Utilities
 *       f1_44 = Line 35: Veterinary, breeding, and medicine
 *       f1_45 = Line 36a: Other expenses (specify)
 *       f1_46 = Line 36a description text
 *       f1_47 = Line 36b: Other expenses (specify)
 *       f1_48 = Line 36b description text
 *       f1_49 = Line 36c: Other expenses (specify)
 *       f1_50 = Line 36c description text
 *       f1_51 = Line 36d: Other expenses (specify)
 *       f1_52 = Line 36d description text
 *       f1_53 = Line 36e: Other expenses (specify)
 *       f1_54 = Line 36e description text
 *       f1_55 = Line 36f: Other expenses (specify)
 *       f1_56 = Line 36f description text
 *       f1_57 = Line 37: Total other expenses
 *       f1_58 = Line 38: Total expenses (add lines 12–37)
 *       f1_59 = Line 39: Net farm profit (or loss) (line 11 minus line 38)
 *       f1_60 = Line 40: Reserved / at-risk
 *
 *   Page 2 — Part III: Farm Income Averaging (Form 1040):
 *       f2_1  through f2_18 (income averaging detail)
 */
import type { IRSFieldMapping, IRSFormTemplate } from '../types/irsFormMappings.js';
export declare const SCHEDULE_F_FIELDS: IRSFieldMapping[];
export declare const SCHEDULE_F_TEMPLATE: IRSFormTemplate;
