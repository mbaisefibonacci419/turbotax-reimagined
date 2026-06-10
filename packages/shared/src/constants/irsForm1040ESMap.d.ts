/**
 * IRS Form 1040-ES (Estimated Tax Payment Vouchers) — Field Mapping
 *
 * Maps taxpayer data to the 4 payment voucher pages in the official IRS f1040es.pdf.
 * The PDF has 16 pages total; voucher fields live on pages 14 and 15 (0-indexed: 13, 14).
 *
 * Each voucher has 14 fields: amount, name (first+MI, last), SSN, spouse name,
 * spouse SSN, address, city, state, ZIP, foreign country/province/postal.
 *
 * @authority Form 1040-ES (2026) — Estimated Tax for Individuals
 */
import type { IRSFormTemplate } from '../types/irsFormMappings.js';
export declare const FORM_1040_ES_TEMPLATE: IRSFormTemplate & {
    voucherPageIndices: number[];
};
