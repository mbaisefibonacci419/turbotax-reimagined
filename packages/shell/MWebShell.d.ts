import { type ReactNode } from "react";
import "./mweb-shell.css";
type MWebShellProps = {
    children: ReactNode;
    progressPct?: number;
    headerRefund?: {
        federal: string;
        state: string;
        stateLabel?: string;
    };
    title?: string;
    raceMode?: {
        elapsed?: string;
        total?: string;
        activeSection?: "my-info" | "federal" | "state" | "review";
    };
};
export declare function MWebShell({ children, progressPct, title, raceMode, }: MWebShellProps): import("react").JSX.Element;
export {};
