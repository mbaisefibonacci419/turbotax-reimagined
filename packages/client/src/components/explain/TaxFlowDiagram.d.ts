/**
 * TaxFlowDiagram — visual flow from income through deductions to final result.
 *
 * Single horizontal Syncfusion waterfall chart showing the full flow:
 *   Total Income → Adjustments → AGI → Deductions → Taxable Income →
 *   Tax → Surtaxes → Credits → Payments → Refund/Owed
 *
 * Data is in natural display order (Total Income first). The X axis uses
 * isInversed to render categories top-to-bottom while keeping intermediate
 * sum calculations correct (Syncfusion accumulates from index 0 forward).
 */
import type { Form1040Result } from '@nimbus/engine';
interface TaxFlowDiagramProps {
    form1040: Form1040Result;
}
export default function TaxFlowDiagram({ form1040: f }: TaxFlowDiagramProps): import("react").JSX.Element;
export {};
