import { FilingStatus, SocialSecurityResult } from '../types/index.js';
import { SOCIAL_SECURITY } from '../constants/tax2025.js';
/**
 * Calculate taxable portion of Social Security benefits.
 *
 * Uses the IRS "provisional income" method:
 *   Provisional income = AGI (excluding SS) + tax-exempt interest + 50% of SS benefits
 *
 * Tax-exempt interest (municipal bond interest, 1099-INT Box 8) is NOT included in AGI
 * but IS included in provisional income for Social Security taxability purposes.
 *
 * Thresholds (Single/HoH/QSS):
 *   ≤ $25,000: 0% taxable
 *   $25,001 - $34,000: up to 50% taxable
 *   > $34,000: up to 85% taxable
 *
 * Thresholds (MFJ):
 *   ≤ $32,000: 0% taxable
 *   $32,001 - $44,000: up to 50% taxable
 *   > $44,000: up to 85% taxable
 *
 * MFS: Always 85% taxable (base amount = $0), UNLESS the taxpayer lived apart
 *   from their spouse for the entire taxable year — in which case, Single thresholds apply.
 *
 * @authority
 *   IRC: Section 86 — Social Security and tier 1 railroad retirement benefits
 *   IRC: Section 86(c)(1)(C)(ii) — MFS "lived apart" exception (uses Single thresholds)
 *   Pub: Publication 915 — Social Security and Equivalent Railroad Retirement Benefits
 *   Form: Social Security Benefits Worksheet (Form 1040 instructions)
 * @scope Taxable Social Security benefits (50%/85% tiers), including MFS "lived apart" exception
 */
export declare function calculateTaxableSocialSecurity(totalBenefits: number, otherIncome: number, filingStatus: FilingStatus, taxExemptInterest?: number, livedApartFromSpouse?: boolean, socialSecurityConstants?: typeof SOCIAL_SECURITY): SocialSecurityResult;
