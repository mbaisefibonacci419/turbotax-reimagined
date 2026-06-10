/**
 * Schema Migration Runner
 *
 * Applies sequential migrations to bring a TaxReturn from any schema version
 * to the current version. Migrations are lazy — they run when data is read,
 * not on app startup. This avoids rewriting all of localStorage on upgrade.
 *
 * Usage (in the data layer):
 *   const raw = JSON.parse(localStorage.getItem(key));
 *   const migrated = migrateReturn(raw);   // applies pending migrations
 *   // migrated is now at CURRENT_SCHEMA_VERSION
 *
 * Adding a new migration:
 *   1. Create shared/src/migrations/v{N}.ts with a Migration export
 *   2. Register it in the MIGRATIONS array below
 *   3. Bump CURRENT_SCHEMA_VERSION to N
 *   4. Add/modify TaxReturn fields as needed in types/index.ts
 */
export interface Migration {
    /** The schema version this migration produces. */
    version: number;
    /** Human-readable description for debugging. */
    description: string;
    /** Transform the raw data object in place and return it. */
    up(data: Record<string, unknown>): Record<string, unknown>;
}
/** The latest schema version. Returns at this version need no migration. */
export declare const CURRENT_SCHEMA_VERSION = 12;
/**
 * Migrate a raw TaxReturn object to the current schema version.
 *
 * @param data - The raw parsed JSON (may have any/no schemaVersion)
 * @returns The same object reference, mutated to current schema version.
 *          Returns null if data is falsy or not an object.
 */
export declare function migrateReturn(data: unknown): Record<string, unknown> | null;
/**
 * Check whether a raw TaxReturn needs migration.
 * Useful for deciding whether to re-persist after read.
 */
export declare function needsMigration(data: unknown): boolean;
