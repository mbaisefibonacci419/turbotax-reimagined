/**
 * YoYPairedBars — clustered horizontal bar chart comparing top metrics
 * between prior year and current year.
 *
 * Prior year bars are muted (30% opacity), current year bars are vivid.
 * Shows the 5 largest metrics by current-year value for a clear visual
 * comparison of where the biggest numbers are.
 */
import type { PriorYearSummary, Form1040Result } from '@nimbus/engine';
interface YoYPairedBarsProps {
    priorYear: PriorYearSummary;
    current: Form1040Result;
}
export default function YoYPairedBars({ priorYear, current }: YoYPairedBarsProps): import("react").JSX.Element | null;
export {};
