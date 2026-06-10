import { ReactNode } from 'react';
interface CardOption<T> {
    value: T;
    label: string;
    description?: string;
    icon?: ReactNode;
}
interface CardSelectorProps<T> {
    options: CardOption<T>[];
    value: T | undefined;
    onChange: (value: T) => void;
    columns?: 1 | 2 | 3;
}
export default function CardSelector<T extends string | number>({ options, value, onChange, columns, }: CardSelectorProps<T>): import("react").JSX.Element;
export {};
