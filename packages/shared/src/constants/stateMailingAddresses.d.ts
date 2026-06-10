/**
 * State Tax Return Mailing Addresses
 *
 * Keyed by two-letter state code. Each state has separate addresses for
 * refund returns vs. balance-due returns (many states use the same address
 * for both). Data sourced from official state DOR booklets and websites.
 *
 * Workers populate entries for their batch of states; the additive structure
 * auto-merges across parallel branches.
 */
export interface StateMailingAddress {
    /** Address lines when the return claims a refund */
    refund: string[];
    /** Address lines when the return has a balance due */
    balanceDue: string[];
    /** Optional notes (e.g., "Make check payable to...") */
    notes?: string;
    /** URL for online/electronic payment */
    onlinePaymentUrl?: string;
}
export declare const STATE_MAILING_ADDRESSES: Record<string, StateMailingAddress>;
