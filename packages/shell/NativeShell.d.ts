import { type ReactNode } from "react";
import "./native-shell.css";
export type Refund = {
    label: string;
    amount: string;
    tone?: "positive" | "neutral";
};
type TabKey = "home" | "documents" | "learn" | "more";
type NativeShellProps = {
    children: ReactNode;
    platform?: "ios" | "android";
    mode?: "tax-home" | "tax-prep";
    refunds?: Refund[];
    activeTab?: TabKey;
    onBack?: () => void;
    onHelp?: () => void;
    raceMode?: {
        elapsed?: string;
        total?: string;
        progress?: number;
        sections?: number;
    };
};
export declare function NativeShell({ children, platform, mode, refunds, activeTab, onBack, onHelp, raceMode, }: NativeShellProps): import("react").JSX.Element;
export declare function ChevronLeftIcon(): import("react").JSX.Element;
export {};
