/**
 * TaxSankeyDiagram — SVG Sankey flow diagram showing where income comes
 * from, how it's reduced, what taxes are assessed, and the final result.
 *
 * Uses d3-sankey for layout computation and renders with React SVG.
 * Lazy-loaded via TaxFlowSwitcher to avoid impacting initial bundle.
 */
import type { Form1040Result, CalculationResult } from '@nimbus/engine';
interface TaxSankeyDiagramProps {
    form1040: Form1040Result;
    calculation: CalculationResult;
}
export default function TaxSankeyDiagram({ form1040, calculation }: TaxSankeyDiagramProps): import("react").JSX.Element;
export {};
