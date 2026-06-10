/**
 * Migration v8 → v9: Schedule B Part III (Foreign Accounts and Trusts) support.
 *
 * No-op data migration — just bumps schemaVersion to 9.
 * New optional field (scheduleBPartIII) defaults to undefined until the user sets it.
 */
import type { Migration } from './runner.js';
export declare const migrationV9: Migration;
