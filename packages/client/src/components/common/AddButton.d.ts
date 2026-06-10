interface AddButtonProps {
    onClick: () => void;
    children: string;
}
/**
 * Prominent "add" button used on list-style steps (W-2s, 1099s, dependents, etc.).
 * Dashed border + centered layout makes it obvious this is the primary action.
 */
export default function AddButton({ onClick, children }: AddButtonProps): import("react").JSX.Element;
export {};
