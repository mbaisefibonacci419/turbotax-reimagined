/**
 * PriorYearTemplatePanel — "Import as Template" UI
 *
 * Shows items extracted from a prior-year TaxReturn with checkboxes.
 * Users select which payer/employer templates to import into the current year.
 * All amounts are zeroed — only names and structural data are carried over.
 */
import type { TemplateImportManifest } from '../../services/priorYearTemplateBuilder';
interface PriorYearTemplatePanelProps {
    manifest: TemplateImportManifest;
    onBack: () => void;
    onDone: () => void;
}
export default function PriorYearTemplatePanel({ manifest, onBack, onDone, }: PriorYearTemplatePanelProps): import("react").JSX.Element;
export {};
