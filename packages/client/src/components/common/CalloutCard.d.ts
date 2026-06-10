import { ReactNode } from 'react';
interface CalloutCardProps {
    variant: 'info' | 'warning' | 'tip';
    title: string;
    children: ReactNode;
    irsUrl?: string;
}
export default function CalloutCard({ variant, title, children, irsUrl }: CalloutCardProps): import("react").JSX.Element;
export {};
