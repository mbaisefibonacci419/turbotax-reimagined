/**
 * Forms Mode — PDF Viewer
 *
 * Renders either:
 * - The active form's interactive PdfFormViewer (when 0–1 forms selected)
 * - A read-only MergedPdfViewer (when 2+ forms selected in the sidebar)
 *
 * The sidebar is rendered separately by WizardLayout in the shared sidebar column.
 */
import '../../styles/pdfviewer.css';
export default function FormsMode(): import("react").JSX.Element;
