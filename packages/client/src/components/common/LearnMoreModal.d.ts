interface LearnMoreModalProps {
    open: boolean;
    onClose: () => void;
    title: string;
    explanation: string;
    irsUrl?: string;
}
export default function LearnMoreModal({ open, onClose, title, explanation, irsUrl, }: LearnMoreModalProps): import("react").JSX.Element | null;
export {};
