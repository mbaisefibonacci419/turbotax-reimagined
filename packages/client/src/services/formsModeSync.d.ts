/**
 * Forms Mode — Discovery Flag Synchronization
 *
 * When a user edits fields in Forms Mode, ensure the corresponding wizard
 * discovery flags are set so that wizard steps remain visible after switching
 * back to interview mode.
 */
import type { TaxReturn } from '@nimbus/engine';
/**
 * Ensure discovery flags are set for the given form.
 * Called after each field edit in Forms Mode.
 */
export declare function ensureDiscoveryFlags(formId: string, taxReturn: TaxReturn, updateField: (field: string, value: unknown) => void): void;
