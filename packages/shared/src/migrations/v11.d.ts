/**
 * Migration v10 → v11: Add dismissedNudges for proactive AI nudge system.
 *
 * Adds `dismissedNudges: []` default. No-op for existing data since the
 * field is optional and defaults to empty array when undefined.
 */
import type { Migration } from './runner.js';
export declare const migrationV11: Migration;
