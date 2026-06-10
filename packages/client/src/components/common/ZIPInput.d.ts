interface ZIPInputProps {
    value: string;
    onChange: (value: string) => void;
    placeholder?: string;
    className?: string;
    disabled?: boolean;
    id?: string;
}
/**
 * Restricts input to digits and auto-formats as XXXXX or XXXXX-XXXX.
 */
export default function ZIPInput({ value, onChange, placeholder, className, disabled, id, }: ZIPInputProps): import("react").JSX.Element;
export {};
