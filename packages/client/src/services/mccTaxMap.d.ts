/**
 * MCC Tax Map — Merchant Category Code → Tax Category Lookup
 *
 * Maps ~55 tax-relevant MCC codes to deduction categories and confidence boosts.
 * Source: greggles/mcc-codes (MIT license), filtered to IRS-relevant categories.
 *
 * Bundled as a TS module (not lazy-fetched JSON) to eliminate async loading,
 * race conditions, and the need for useDeductionFinder to await MCC data.
 *
 * All processing runs client-side. Data never leaves the browser.
 */
import type { InsightCategory } from './deductionFinderTypes';
export interface MCCTaxEntry {
    description: string;
    taxCategories: InsightCategory[];
    /** How much to boost confidence when MCC confirms a merchant-token match (0-1). */
    confidenceBoost: number;
}
export declare const MCC_TAX_MAP: Record<string, MCCTaxEntry>;
/** Look up an MCC code in the tax map. Returns undefined for unknown codes.
 *  Supports range-based MCC codes: airlines (3000-3299) and hotels (3501-3999). */
export declare function lookupMCC(code: string): MCCTaxEntry | undefined;
/**
 * Extract an MCC code embedded in a transaction description.
 * Some banks embed MCC in descriptions as "MCC:5912" or "MCC 5912".
 * Returns the code string or undefined if none found.
 */
export declare function extractMCCFromDescription(description: string): string | undefined;
