import { type ReactNode } from "react";
import "./tooltip.css";
type TooltipAlign = "left" | "center" | "right";
type TooltipPlacement = "top" | "bottom";
type TooltipProps = {
    children: ReactNode;
    content: ReactNode;
    align?: TooltipAlign;
    placement?: TooltipPlacement;
};
export declare function Tooltip({ children, content, align, placement, }: TooltipProps): import("react").JSX.Element;
export {};
