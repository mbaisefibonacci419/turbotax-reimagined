/**
 * Migration v4 → v5: Full SSN collection support.
 *
 * No-op data migration — just bumps schemaVersion to 5.
 * Old returns keep `ssnLastFour` as-is; `ssn` will be `undefined`
 * until the user enters it at the review step.
 */
import type { Migration } from './runner.js';
export declare const migrationV5: Migration;
