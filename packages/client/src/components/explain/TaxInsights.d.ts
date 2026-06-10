/**
 * TaxInsights — auto-generated plain-English insights about the user's taxes.
 *
 * Analyzes the calculation result and produces a set of contextual,
 * non-obvious observations to help the user understand their situation.
 */
import type { Form1040Result, CalculationResult } from '@nimbus/engine';
interface TaxInsightsProps {
    form1040: Form1040Result;
    calculation: CalculationResult;
}
export default function TaxInsights({ form1040: f, calculation }: TaxInsightsProps): import("react").JSX.Element | null;
export {};
