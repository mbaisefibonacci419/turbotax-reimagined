/**
 * YoY Comparison Card — "LookBack" feature
 *
 * Shows year-over-year comparison between current and prior-year tax returns.
 * Two states:
 * 1. No prior-year data: compact upload area accepting .json or .pdf
 * 2. Has prior-year data: comparison grid with delta indicators
 */
import type { PriorYearSummary } from '@nimbus/engine';
import type { Form1040Result } from '@nimbus/engine';
interface YoYComparisonCardProps {
    priorYear?: PriorYearSummary;
    current: Form1040Result;
}
export default function YoYComparisonCard({ priorYear, current }: YoYComparisonCardProps): import("react").JSX.Element;
export {};
