import { ArcherMSAInfo, ArcherMSAResult, W2Income } from '../types/index.js';
/**
 * Calculate the Archer MSA deduction (Form 8853, Part I).
 *
 * Archer MSAs are legacy medical savings accounts for self-employed individuals
 * and small business employees. No new accounts can be opened after 2007, but
 * existing accounts can still receive contributions.
 *
 * The deduction is limited to a percentage (65% self-only / 75% family) of the
 * HDHP annual deductible, prorated for partial-year coverage.
 *
 * @authority
 *   IRC: Section 220 — Archer MSAs
 *   Form: Form 8853, Schedule 1 Line 8
 * @scope Archer MSA contribution deduction with HDHP-based limits and proration
 * @limitations Distribution taxation (Form 8853 Part II) reuses HSA distribution logic;
 *   does not track whether account was established before 2008 cutoff
 */
export declare function calculateArcherMSADeduction(info: ArcherMSAInfo, w2Income: W2Income[]): ArcherMSAResult;
