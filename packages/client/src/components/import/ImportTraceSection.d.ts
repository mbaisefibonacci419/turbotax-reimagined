/**
 * ImportTraceSection — collapsible panel showing extraction trace details.
 *
 * Explains how the PDF importer detected the form type and which fields
 * were successfully extracted, with confidence reasoning.
 */
import type { ImportTrace } from '../../services/pdfExtractHelpers';
interface ImportTraceSectionProps {
    trace: ImportTrace;
}
export default function ImportTraceSection({ trace }: ImportTraceSectionProps): import("react").JSX.Element;
export {};
