interface CreditsDonutProps {
    items: Array<{
        label: string;
        value: number;
        stepId: string;
        refundable: boolean;
    }>;
    onSliceClick?: (stepId: string) => void;
    height?: string;
}
declare const NR_COLORS: string[];
declare const R_COLORS: string[];
export default function CreditsDonut({ items: rawItems, onSliceClick, height }: CreditsDonutProps): import("react").JSX.Element | null;
export { NR_COLORS, R_COLORS };
