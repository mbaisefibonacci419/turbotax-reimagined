/**
 * TaxFlowSwitcher — toggle between Waterfall and Sankey tax flow views.
 *
 * The Sankey diagram is lazy-loaded to avoid bloating the initial bundle.
 */
import type { Form1040Result, CalculationResult } from '@nimbus/engine';
interface TaxFlowSwitcherProps {
    form1040: Form1040Result;
    calculation: CalculationResult;
}
export default function TaxFlowSwitcher({ form1040, calculation }: TaxFlowSwitcherProps): import("react").JSX.Element;
export {};
