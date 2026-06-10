/**
 * sankeyDataTransform — converts Form1040Result + CalculationResult into
 * the { nodes, links } structure expected by d3-sankey.
 *
 * All values are positive (Sankey requirement). Deductions, credits, and
 * payments are modeled as diversions that siphon flow away from the main
 * income stream.
 */
import type { Form1040Result, CalculationResult } from '@nimbus/engine';
export interface SankeyNode {
    id: string;
    label: string;
    value: number;
    /** Original dollar amount for display — d3-sankey overwrites `value` with computed flow. */
    displayValue: number;
    column: number;
    colorKey: string;
    stepId?: string;
    category: 'income' | 'intermediate' | 'reduction' | 'tax' | 'payment' | 'result';
}
export interface SankeyLink {
    source: string;
    target: string;
    value: number;
}
export interface SankeyData {
    nodes: SankeyNode[];
    links: SankeyLink[];
}
/**
 * Build Sankey nodes and links from a computed tax return.
 *
 * Layout columns (left-to-right):
 *   0: Income sources
 *   1: Total Income
 *   2: AGI (shown only if adjustments exist)
 *   3: Taxable Income
 *   4: Tax items + credits/payments
 *   5: Final result (Refund or Owed)
 */
export declare function buildSankeyData(f: Form1040Result, _calc: CalculationResult): SankeyData;
