/**
 * IRS Mailing Addresses for Form 1040-ES Estimated Tax Payment Vouchers
 *
 * Source: IRS "Correction to the mailing addresses in the 2026 Form 1040-ES"
 * (irs.gov/forms-pubs/correction-to-the-mailing-addresses-in-the-2026-form-1040-es)
 * Published February 25, 2026.
 *
 * IMPORTANT: These addresses differ from Form 1040 filing addresses.
 * 1040-ES vouchers are mailed to different P.O. boxes at different cities.
 *
 * Two processing centers:
 *   - Charlotte, NC 28201-1300 (29 states)
 *   - Louisville, KY 40293-1100 (22 jurisdictions)
 */
import type { IRSMailingAddress } from './irsMailingAddresses.js';
/**
 * Look up the IRS mailing address for Form 1040-ES estimated tax payment
 * vouchers based on the filer's state.
 *
 * Falls back to Louisville for unknown states.
 */
export declare function get1040ESMailingAddress(state: string): IRSMailingAddress;
