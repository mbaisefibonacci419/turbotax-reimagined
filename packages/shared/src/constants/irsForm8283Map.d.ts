/**
 * IRS Form 8283 (2025) -- AcroForm Field Mapping
 *
 * Noncash Charitable Contributions
 * PDF: client/public/irs-forms/f8283.pdf (Form 8283, 2025)
 * Attachment Sequence No. 155
 *
 * NOTE: This PDF uses `Form8283[0]` as its AcroForm prefix (NOT `topmostSubform[0]`)
 *
 * Layout:
 *   Page 1:
 *     Form8283[0].Page1[0]:
 *       f1_1 = Name(s) shown on your income tax return
 *       f1_2 = Identifying number
 *       c1_1  = Checkbox: Check if over 500 items
 *
 *     Section A -- Donated Property of $5,000 or Less and Publicly Traded Securities
 *       Two column groups of 4 rows each (A-D per group)
 *
 *       Group 1 (Lines 1a, columns a-f):
 *         Row A: f1_03..f1_08  (doneeOrg, description, dateOfContrib, dateAcquired, howAcquired, FMV, costBasis)
 *         Row B: f1_09..f1_14
 *         Row C: f1_15..f1_20
 *         Row D: f1_21..f1_26
 *
 *       Actually, the Section A table has these columns per row:
 *         (i)   Name and address of donee organization
 *         (ii)  Description of donated property
 *         (iii) Date of contribution
 *         (iv)  Date acquired by donor
 *         (v)   How acquired by donor
 *         (vi)  Donor's cost or adjusted basis
 *         (vii) Fair market value
 *         (viii) Method used to determine FMV
 *
 *       Section A rows: 4 items (A-D), each with fields in two groups
 *         Group 1 (cols a-c): 3 text fields per row
 *           Row A: f1_5, f1_6, f1_7
 *           Row B: f1_8, f1_9, f1_10
 *           Row C: f1_11, f1_12, f1_13
 *           Row D: f1_14, f1_15, f1_16
 *         Group 2 (cols d-i): 6 fields per row (we map 5)
 *           Row A: f1_17, f1_18, f1_19, f1_20, f1_21 (+f1_22)
 *           Row B: f1_23, f1_24, f1_25, f1_26, f1_27 (+f1_28)
 *           Row C: f1_29, f1_30, f1_31, f1_32, f1_33 (+f1_34)
 *           Row D: f1_35, f1_36, f1_37, f1_38, f1_39 (+f1_40)
 *
 *   Page 2:
 *     Form8283[0].Page2[0]:
 *       Section B -- Donated Property Over $5,000 (Except Publicly Traded Securities)
 *         Part I: Information on Donated Property
 *           f2_1 = Name of charitable organization (donee)
 *           f2_2 = Donee address/EIN
 *           f2_3 = Description of donated property (Line 5a)
 *           f2_4 = Physical condition of property (Line 5b)
 *           f2_5..f2_9 = Date acquired, how acquired, donor's cost, FMV, date of FMV
 *           f2_10 = Brief description of how FMV was determined
 *
 *         Part II: Taxpayer (Donor) Statement
 *           (Declaration text -- no mapped fields)
 *
 *         Part III: Declaration of Appraiser
 *           f2_11 = Appraiser name
 *           f2_12 = Appraiser address
 *           f2_13 = Appraiser TIN
 *           f2_14 = Date of appraisal
 *           f2_15 = Appraised FMV
 *
 *         Part IV: Donee Acknowledgment
 *           f2_16 = Date received
 *           f2_17 = Amount received for property (if any)
 *           c2_2  = Checkbox: intends to use property for exempt purpose
 *
 * Multi-instance: When Section A items exceed 5, or Section B items exceed 1,
 * additional form instances are generated.
 */
import type { IRSFieldMapping, IRSFormTemplate } from '../types/irsFormMappings.js';
/**
 * Form 8283 uses dynamic field generation via fieldsForInstance.
 * The static `fields` array is empty -- all mappings are generated per-instance.
 */
export declare const FORM_8283_FIELDS: IRSFieldMapping[];
export declare const FORM_8283_TEMPLATE: IRSFormTemplate;
