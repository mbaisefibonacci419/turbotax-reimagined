/**
 * Migration v2 → v3: Distribute estimatedPaymentsMade into per-quarter array.
 *
 * Pre-v3 data has `estimatedPaymentsMade` as a single aggregate number.
 * This migration creates `estimatedQuarterlyPayments` by distributing
 * the total evenly across four quarters. Rounding remainder goes to Q1.
 */
import type { Migration } from './runner.js';
export declare const migrationV3: Migration;
