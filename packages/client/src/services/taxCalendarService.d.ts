/**
 * Tax Calendar Service
 *
 * Generates a personalized list of forward-looking tax deadlines based on
 * a taxpayer's return data. Pure function, no side effects.
 *
 * Context: Nimbus handles the 2025 tax year. Users file in early 2026.
 * All deadlines shown are forward-looking — filing deadlines, contribution
 * deadlines, and 2026 estimated payments derived from the 2025 return.
 */
import type { TaxReturn, CalculationResult } from '@nimbus/engine';
export type DeadlineType = 'filing' | 'payment' | 'contribution' | 'extension';
export type DeadlineStatus = 'upcoming' | 'due_soon' | 'overdue' | 'completed';
export interface TaxDeadline {
    id: string;
    label: string;
    date: string;
    type: DeadlineType;
    amount?: number;
    status: DeadlineStatus;
    notes: string;
    applicable: boolean;
}
export interface TaxCalendar {
    deadlines: TaxDeadline[];
    nextDeadline: TaxDeadline | null;
}
export declare function calculateTaxCalendar(taxReturn: TaxReturn, calculation: CalculationResult | undefined, currentDate?: Date): TaxCalendar;
/** Format ISO date string to readable format: "Apr 15, 2026" */
export declare function formatDeadlineDate(isoDate: string): string;
