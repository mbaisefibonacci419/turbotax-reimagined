import { type ReactNode } from "react";
import "./shell.css";
type NavStatus = "done" | "in-progress" | "pending";
type ShellProps = {
    children: ReactNode;
    selectedNav?: string;
    progressPct?: number;
    sku?: string;
    federalExpanded?: boolean;
    showFooter?: boolean;
    headerRefund?: {
        federal: string;
        state: string;
        stateLabel?: string;
    };
    statuses?: Record<string, NavStatus>;
};
export declare function Shell({ children, selectedNav, progressPct, sku, federalExpanded, showFooter, headerRefund, statuses, }: ShellProps): import("react").JSX.Element;
export {};
