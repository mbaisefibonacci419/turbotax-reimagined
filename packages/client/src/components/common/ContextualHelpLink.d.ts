interface ContextualHelpLinkProps {
    /** The clickable link text, e.g. "What's my filing status?" */
    label: string;
    /** Title shown in the modal header. */
    modalTitle: string;
    /** Explanation text shown in the modal body. */
    modalExplanation: string;
    /** Optional IRS.gov URL for a "View on IRS.gov" link. */
    irsUrl?: string;
    /** Optional className override for the wrapper. */
    className?: string;
}
export default function ContextualHelpLink({ label, modalTitle, modalExplanation, irsUrl, className, }: ContextualHelpLinkProps): import("react").JSX.Element;
export {};
