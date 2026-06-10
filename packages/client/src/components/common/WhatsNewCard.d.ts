export interface WhatsNewItem {
    title: string;
    description: string;
    /** Bullet marker character. Defaults to '+'. Use '⚠' for warnings. */
    marker?: string;
}
interface WhatsNewCardProps {
    items: WhatsNewItem[];
}
export default function WhatsNewCard({ items }: WhatsNewCardProps): import("react").JSX.Element | null;
export {};
