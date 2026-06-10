import type { DonationCategoryMeta, DonationItemEntry, DepreciationSchedule, DonationCategory } from '../types/index.js';
/** Year the charity guide data was transcribed from. */
export declare const DONATION_DB_SOURCE_YEAR = 2024;
export declare const DONATION_CATEGORIES: DonationCategoryMeta[];
export declare const DONATION_ITEMS: DonationItemEntry[];
export declare const DEPRECIATION_SCHEDULES: DepreciationSchedule[];
/** Look up the depreciation schedule for a category, falling back to 'general'. */
export declare function getDepreciationSchedule(category: DonationCategory | 'general'): DepreciationSchedule;
