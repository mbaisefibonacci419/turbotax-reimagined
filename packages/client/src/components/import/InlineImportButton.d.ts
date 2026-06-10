/**
 * InlineImportButton — a contextual "Import from PDF/CSV" trigger
 * shown on individual tax form steps.
 *
 * Renders a subtle but visible button that, when clicked, expands
 * an inline import panel directly on the step page. This keeps users
 * in context rather than navigating to the separate Import Data step.
 */
interface InlineImportButtonProps {
    /** 'pdf' for W-2 / 1099 forms, 'csv' for 1099-B / 1099-DA */
    importType: 'pdf' | 'csv';
    /** Human-readable form name, e.g. "W-2" or "1099-B" */
    formLabel: string;
    onClick: () => void;
}
export default function InlineImportButton({ importType, formLabel, onClick }: InlineImportButtonProps): import("react").JSX.Element;
export {};
