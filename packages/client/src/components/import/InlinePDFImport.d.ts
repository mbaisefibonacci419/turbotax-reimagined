/**
 * InlinePDFImport — an inline import panel pre-filtered to a single form type.
 *
 * Embeds directly within a form step (e.g. W2IncomeStep). After a successful
 * import, the newly added item appears in the step's list immediately.
 *
 * Supports digital PDFs, scanned PDFs (via OCR), and photos (via camera capture).
 *
 * State machine: upload → extracting → (ocr-confirm → ocr-processing →) review → importing → done
 */
import { SupportedFormType } from '../../services/pdfImporter';
interface InlinePDFImportProps {
    /** The expected form type for this step */
    expectedFormType: SupportedFormType;
    /** Called when user closes the inline import */
    onClose: () => void;
    /** Called after a successful import so the parent step can refresh */
    onImported?: () => void;
}
export default function InlinePDFImport({ expectedFormType, onClose, onImported }: InlinePDFImportProps): import("react").JSX.Element;
export {};
