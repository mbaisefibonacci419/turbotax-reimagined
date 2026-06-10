/**
 * Migration v3 → v4: Add depreciationAssets array for Form 4562 asset registry.
 *
 * Pre-v4 data has no `depreciationAssets` field. This migration initializes
 * it as an empty array so the Form 4562 engine can safely iterate.
 */
import type { Migration } from './runner.js';
export declare const migrationV4: Migration;
