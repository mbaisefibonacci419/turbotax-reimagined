/**
 * CompetitorImportPanel — "Switch from Another Provider" import flow.
 *
 * Accepts a completed 1040 PDF from TurboTax, H&R Block, TaxAct, etc.
 * and extracts personal info + financials for pre-filling or YoY comparison.
 *
 * State machine: upload → extracting → review → importing → done
 */
interface CompetitorImportPanelProps {
    onBack: () => void;
}
export default function CompetitorImportPanel({ onBack }: CompetitorImportPanelProps): import("react").JSX.Element;
export {};
