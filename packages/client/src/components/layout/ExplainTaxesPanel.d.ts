interface ExplainTaxesPanelProps {
    /** Controlled open state (from WizardLayout). */
    open: boolean;
    /** Called when the user dismisses the panel (e.g. close button). */
    onClose?: () => void;
}
export default function ExplainTaxesPanel({ open, onClose }: ExplainTaxesPanelProps): import("react").JSX.Element | null;
export {};
