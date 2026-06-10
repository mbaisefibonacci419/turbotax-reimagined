export interface PillOption<T extends string = string> {
    value: T;
    label: string;
    icon?: React.ReactNode;
}
interface PillToggleProps<T extends string = string> {
    /** Current selected value. */
    value: T | undefined;
    /** Called when a pill is clicked. Receives undefined when deselecting. */
    onChange: (value: T | undefined) => void;
    /** Custom options. Defaults to Yes/No/Later. */
    options?: PillOption<T>[];
    /** Use the two-option Yes/No variant (no "Not sure"). */
    twoOption?: boolean;
    /** Optional size variant. */
    size?: 'sm' | 'md';
    /** Disable all pills. */
    disabled?: boolean;
}
export default function PillToggle<T extends string = string>({ value, onChange, options, twoOption, size, disabled, }: PillToggleProps<T>): import("react").JSX.Element;
export {};
