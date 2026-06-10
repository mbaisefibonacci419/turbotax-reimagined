type EligibilityStatus = 'eligible' | 'ineligible' | 'need_info';
interface EligibilityBadgeProps {
    status: EligibilityStatus;
    label?: string;
    amount?: number;
    detail?: string;
}
export default function EligibilityBadge({ status, label, amount, detail }: EligibilityBadgeProps): import("react").JSX.Element;
export {};
