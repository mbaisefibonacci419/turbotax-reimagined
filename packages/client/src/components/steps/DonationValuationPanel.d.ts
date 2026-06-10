interface DonationValuationPanelProps {
    onSelect: (result: {
        fairMarketValue: number;
        method: string;
        itemName?: string;
    }) => void;
    onClose: () => void;
}
export default function DonationValuationPanel({ onSelect, onClose }: DonationValuationPanelProps): import("react").JSX.Element;
export {};
