/**
 * Migration v1 → v2: Promote singular `business` to `businesses[]` array.
 *
 * Pre-routing data has `business` (singular) for single-business users and
 * an empty `businesses[]` array. This migration copies `business` into
 * `businesses[0]` so the engine and UI can use the array path consistently.
 * Also ensures every business has an `id` field.
 */
import type { Migration } from './runner.js';
export declare const migrationV2: Migration;
