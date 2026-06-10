import type { DonationCategory, DonationItemCondition, DonationItemEntry } from '../types/index.js';
export interface SearchResult {
    item: DonationItemEntry;
    score: number;
}
/**
 * Token-based search over DONATION_ITEMS.
 * Scoring: all tokens match name → 1.0, name starts with query → 0.9,
 * partial token overlap in name → 0.7 * fraction, keyword-only match → 0.5.
 */
export declare function searchDonationItems(query: string, category?: DonationCategory, maxResults?: number): SearchResult[];
/**
 * Get all items in a category, sorted alphabetically.
 */
export declare function getItemsByCategory(category: DonationCategory): DonationItemEntry[];
/**
 * Calculate FMV for a database item given a condition.
 * Good = lowFMV (0%), Very Good = midpoint (50%), Like New = highFMV (100%).
 */
export declare function calculateDatabaseFMV(item: DonationItemEntry, condition: DonationItemCondition): number;
/**
 * Calculate FMV from an arbitrary 0.0-1.0 slider position.
 * Clamped to [0, 1].
 */
export declare function calculateSliderFMV(item: DonationItemEntry, position: number): number;
export interface DepreciationResult {
    estimatedFMV: number;
    depreciationRate: number;
    method: string;
}
/**
 * Estimate FMV from original purchase price using depreciation schedules.
 * Supports fractional years (e.g. 0.5 = 6 months) via linear interpolation.
 */
export declare function calculateDepreciatedFMV(params: {
    originalPrice: number;
    ageYears: number;
    category: DonationCategory | 'general';
}): DepreciationResult;
