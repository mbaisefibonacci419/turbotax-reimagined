interface DashboardProps {
    lockMode?: 'setup' | 'unlock';
    onUnlock?: (passphrase: string) => Promise<boolean>;
    lockError?: string | null;
}
export default function DashboardPage({ lockMode, onUnlock, lockError }?: DashboardProps): import("react").JSX.Element;
export {};
