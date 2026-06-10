/**
 * Deduction Finder — Pattern Catalog
 *
 * Each pattern defines a set of merchant substrings to match against bank
 * statement descriptions, plus context gates that suppress irrelevant signals.
 *
 * IMPORTANT: All merchant strings are matched as UPPERCASE substrings against
 * the uppercased transaction description. They should reflect how merchants
 * actually appear on bank/credit card statements, not just brand names.
 *
 * This is pure data — no side effects, no external deps beyond local types.
 */
import type { MerchantPattern } from './deductionFinderTypes';
export declare const DEDUCTION_PATTERNS: MerchantPattern[];
