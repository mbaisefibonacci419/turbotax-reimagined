interface SSNInputProps {
    value: string;
    onChange: (value: string) => void;
    label?: string;
    optional?: boolean;
}
export default function SSNInput({ value, onChange, label, optional }: SSNInputProps): import("react").JSX.Element;
export {};
