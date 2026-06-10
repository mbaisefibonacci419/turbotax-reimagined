interface EINInputProps {
    value: string;
    onChange: (value: string) => void;
    placeholder?: string;
    className?: string;
    disabled?: boolean;
    id?: string;
}
/**
 * Auto-formats employer identification numbers as XX-XXXXXXX.
 * Stores raw 9-digit string, displays formatted value.
 */
export default function EINInput({ value, onChange, placeholder, className, disabled, id, }: EINInputProps): import("react").JSX.Element;
export {};
