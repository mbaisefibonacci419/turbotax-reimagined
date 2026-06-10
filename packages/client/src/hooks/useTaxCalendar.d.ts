import { type TaxCalendar } from '../services/taxCalendarService';
/**
 * Hook that computes tax calendar deadlines for the current tax return.
 * Computes a fresh calculation if the store doesn't have one yet,
 * so quarterly payment amounts are always available.
 * Memoized — only recomputes when taxReturn or calculation changes.
 */
export declare function useTaxCalendar(): TaxCalendar | null;
