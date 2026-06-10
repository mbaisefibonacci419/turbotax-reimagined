interface DeleteItemOptions {
    returnId: string;
    /** Top-level TaxReturn field name (e.g., 'w2Income', 'itemizedDeductions') */
    fieldName: string;
    /** For nested arrays: key within the parent object (e.g., 'nonCashDonations') */
    nestedArrayKey?: string;
    /** The item being deleted (must have .id) */
    item: Record<string, unknown> & {
        id: string;
    };
    /** Human-readable label for the toast (e.g., "W-2 from Acme Corp") */
    label: string;
    /** Cleanup callback — runs after delete (e.g., cancelForm if editing this item) */
    onCleanup?: () => void;
}
export declare function deleteItemWithUndo(opts: DeleteItemOptions): void;
export {};
