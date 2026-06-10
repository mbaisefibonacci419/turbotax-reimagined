import { InstallmentSaleInfo, InstallmentSaleResult } from '../types/index.js';
/**
 * Calculate Form 6252 — Installment Sale Income.
 *
 * The installment method defers gain recognition to the years payments
 * are received. Each year's reportable income = payments × gross profit ratio.
 *
 * Depreciation recapture (§1245/§1250) is recognized in full in the year
 * of sale, reducing the capital gain portion available for installment deferral.
 *
 * @authority
 *   IRC §453 — Installment method
 *   IRC §453(d) — Election out of installment method
 *   IRC §453(e) — Related party rules
 *   Form: Form 6252
 * @scope Single-year installment income computation
 * @limitations No multi-year tracking across returns; no §453A interest charge
 *   on deferred tax for large installment sales (>$5M); no related party
 *   disposition rules.
 */
export declare function calculateForm6252(info: InstallmentSaleInfo): InstallmentSaleResult;
