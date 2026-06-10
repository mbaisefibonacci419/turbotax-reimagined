/**
 * Form 7206 — Self-Employed Health Insurance Deduction
 *
 * Introduced TY2023. Computes the deductible amount of health insurance
 * premiums for self-employed individuals (Schedule C/F filers).
 *
 * Three-part calculation:
 *   Part I  — Premium aggregation (medical/dental/vision + LTC + Medicare)
 *   Part II — Monthly proration (only months without employer coverage count)
 *   Part III — Net profit limitation (IRC §162(l)(2)(A))
 *
 * S-Corp exclusion: >2% S-Corp shareholders report health insurance on W-2
 * Box 1 and deduct via Schedule 1 Line 17 directly — they do NOT use Form 7206.
 *
 * @authority
 *   IRC §162(l) — Self-employed health insurance deduction
 *   IRC §213(d)(10) — LTC premium limits by age
 *   Rev. Proc. 2024-40 — 2025 inflation-adjusted LTC limits
 *   Form 7206 (2025) — Self-Employed Health Insurance Deduction
 */
import type { Form7206Input, Form7206Result, FilingStatus } from '../types/index.js';
/**
 * Look up the per-person LTC premium limit by age at end of tax year.
 * IRC §213(d)(10) — age brackets from Rev. Proc. 2024-40.
 */
export declare function getLTCPremiumLimit(age: number | undefined): number;
/**
 * Calculate the self-employed health insurance deduction per Form 7206.
 *
 * @param input              Form 7206 input (undefined → $0 deduction)
 * @param scheduleCNetProfit Net profit from Schedule C (may be negative)
 * @param scheduleFNetProfit Net profit from Schedule F (may be negative)
 * @param deductibleHalfSETax Deductible half of SE tax (Schedule SE Line 13)
 * @param seRetirementContributions Total SE retirement contributions (SEP + Solo 401k + other)
 * @param ptcAdjustmentAmount Actual PTC from Pub 974 iteration (0 when PTC entitlement = $0).
 *   Per IRS Pub 974, the SE health insurance deduction is reduced by the *actual* PTC
 *   (not the advance PTC from 1095-A). The caller resolves the SE health ↔ PTC circularity
 *   via iteration and passes the converged PTC here.
 * @param filingStatus       Filing status (for MFJ spouse LTC handling)
 */
export declare function calculateForm7206(input: Form7206Input | undefined, scheduleCNetProfit: number, scheduleFNetProfit: number, deductibleHalfSETax: number, seRetirementContributions: number, ptcAdjustmentAmount: number, filingStatus: FilingStatus): Form7206Result;
/**
 * Bridge function: converts the legacy single-field healthInsurancePremiums
 * into a Form7206Input for backward compatibility.
 */
export declare function legacyToForm7206Input(healthInsurancePremiums: number): Form7206Input;
