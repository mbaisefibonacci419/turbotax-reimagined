interface RangeSliderProps {
    value: number;
    min: number;
    max: number;
    step: number;
    format?: 'currency' | 'percent' | 'number';
    onChange: (value: number) => void;
    label?: string;
}
export default function RangeSlider({ value, min, max, step, format, onChange, label }: RangeSliderProps): import("react").JSX.Element;
export {};
