interface CurrencyInputProps {
    value: number | undefined;
    onChange: (value: number) => void;
    placeholder?: string;
    className?: string;
    disabled?: boolean;
    id?: string;
    /** Allow negative values (e.g., for gain/loss fields). Default false. */
    allowNegative?: boolean;
    /**
     * When true, onChange emits `undefined` instead of `0` when the field is
     * cleared. Use for truly optional dollar fields where "blank" and "$0"
     * have different meanings. Default false (emits 0 for backward compat).
     */
    optional?: boolean;
}
export default function CurrencyInput({ value, onChange, placeholder, className, disabled, id, allowNegative, optional, }: CurrencyInputProps): import("react").JSX.Element;
export {};
