/**
 * TraceTree — recursive, interactive trace explorer.
 *
 * Renders the engine's CalculationTrace tree as an expandable hierarchy.
 * Each node shows the computed value, formula, legal authority, inputs,
 * and nested children. Users can drill into any level.
 *
 * Entries that map to an IRS form are clickable — clicking navigates
 * to that form in Forms Mode.
 */
import type { CalculationTrace } from '@nimbus/engine';
interface TraceTreeProps {
    traces: CalculationTrace[];
    onNavigateToForm?: (lineId: string) => void;
}
export default function TraceTree({ traces, onNavigateToForm }: TraceTreeProps): import("react").JSX.Element;
export {};
