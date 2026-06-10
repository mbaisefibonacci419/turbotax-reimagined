/**
 * Migration v9 → v10: Form 8582 Passive Activity Loss Limitations.
 *
 * Adds default values for new passive activity fields on existing
 * rental properties and K-1 entries:
 *   - RentalProperty.activeParticipation → true (common case)
 *   - IncomeK1.isPassiveActivity → false (Box 1 ordinary is non-passive by default)
 *
 * New optional fields (form8582Data, disposedDuringYear, dispositionGainLoss)
 * default to undefined until the user sets them.
 */
import type { Migration } from './runner.js';
export declare const migrationV10: Migration;
