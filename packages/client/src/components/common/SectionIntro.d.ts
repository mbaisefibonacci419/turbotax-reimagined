import { ReactNode } from 'react';
interface SectionIntroProps {
    title: ReactNode;
    description: string;
    icon?: ReactNode;
    /** Optional transition message shown above the intro (e.g. "Great! Next we'll look at...") */
    transition?: string;
}
export default function SectionIntro({ title, description, icon, transition }: SectionIntroProps): import("react").JSX.Element;
export {};
