/**
 * InlineCSVImport — an inline CSV import panel pre-set to a single target type.
 *
 * Embeds directly within 1099-B or 1099-DA step pages. Handles the full
 * CSV import workflow: select broker → upload → map columns → preview → import.
 *
 * Uses the same CSVImportPanel logic but streamlined for inline use —
 * the target type is pre-selected so users skip that step.
 */
interface InlineCSVImportProps {
    /** Pre-selected target type */
    targetType: '1099b' | '1099da';
    /** Human-readable label */
    formLabel: string;
    /** Called when user closes the inline import */
    onClose: () => void;
    /** Called after successful import so the parent step can refresh */
    onImported?: () => void;
}
export default function InlineCSVImport({ targetType, formLabel, onClose, onImported }: InlineCSVImportProps): import("react").JSX.Element;
export {};
