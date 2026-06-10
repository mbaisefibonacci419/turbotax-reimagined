/**
 * Migration v7 → v8: Form 7206 self-employed health insurance detail fields.
 *
 * No-op data migration — just bumps schemaVersion to 8.
 * New optional field (form7206) on SelfEmploymentDeductions defaults to
 * undefined until the user provides detailed premium breakdown.
 * Legacy healthInsurancePremiums continues to work via the engine bridge.
 */
import type { Migration } from './runner.js';
export declare const migrationV8: Migration;
