/**
 * IRS Mailing Addresses for Paper Form 1040 Filing
 *
 * Source: IRS.gov "Where to File Addresses for Taxpayers and Tax Professionals
 * Filing Form 1040" — addresses valid for calendar year 2025 filings.
 *
 * Three processing centers handle Form 1040 without payment:
 *   - Austin, TX 73301-0002
 *   - Kansas City, MO 64999-0002
 *   - Ogden, UT 84201-0002
 *
 * Two processing centers handle Form 1040 with payment:
 *   - Charlotte, NC 28201-1214
 *   - Louisville, KY 40293-1000
 */
export interface IRSMailingAddress {
    lines: string[];
}
/**
 * Look up the IRS mailing address for a paper Form 1040 based on the
 * filer's state and whether they are enclosing a payment.
 *
 * Falls back to Austin (no payment) / Charlotte (payment) for unknown states.
 */
export declare function getIRSMailingAddress(state: string, enclosingPayment: boolean): IRSMailingAddress;
