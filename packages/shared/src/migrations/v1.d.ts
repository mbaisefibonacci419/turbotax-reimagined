/**
 * Migration v0 → v1: Initial schema version.
 *
 * Existing returns created before the migration system have no schemaVersion.
 * This migration:
 *   1. Sets schemaVersion to 1
 *   2. Ensures all required array fields exist (prevents runtime crashes
 *      if new array fields were added after the return was first saved)
 *   3. Ensures incomeDiscovery exists (added mid-development)
 */
import type { Migration } from './runner.js';
export declare const migrationV1: Migration;
