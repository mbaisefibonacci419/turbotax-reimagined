import { DocumentInventory } from '../services/documentInventoryService';
/**
 * Hook that computes the document inventory for the current tax return.
 * Memoized — only recomputes when taxReturn changes.
 *
 * Unlike useAuditRisk, this does NOT require `calculation` — it only
 * needs the raw taxReturn data to assess completeness.
 */
export declare function useDocumentInventory(): DocumentInventory | null;
