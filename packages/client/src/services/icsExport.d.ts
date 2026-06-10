/**
 * Generate an .ics (iCalendar) file from tax deadlines and trigger download.
 *
 * The file is compatible with Apple Calendar, Google Calendar, Outlook, etc.
 */
import type { TaxDeadline } from './taxCalendarService';
export declare function generateICS(deadlines: TaxDeadline[]): string;
export declare function downloadICS(deadlines: TaxDeadline[]): void;
