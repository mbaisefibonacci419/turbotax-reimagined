/**
 * Migration v5 → v6: Military status and moving expenses support.
 *
 * No-op data migration — just bumps schemaVersion to 6.
 * New optional fields (isActiveDutyMilitary, nontaxableCombatPay, movingExpenses)
 * default to undefined until the user sets them.
 */
import type { Migration } from './runner.js';
export declare const migrationV6: Migration;
