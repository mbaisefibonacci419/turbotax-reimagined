/**
 * Migration v11 → v12: Add expenseScanner field for Smart Expense Scanner.
 *
 * Initializes with empty defaults. Carries over existing deductionFinder
 * dismissed/addressed IDs if present.
 */
import type { Migration } from './runner.js';
export declare const migrationV12: Migration;
