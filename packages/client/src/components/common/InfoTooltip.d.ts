export interface TooltipContent {
    title?: string;
    body: string;
    irsRef?: string;
    irsUrl?: string;
}
interface InfoTooltipProps {
    text: string | TooltipContent;
}
export default function InfoTooltip({ text }: InfoTooltipProps): import("react").JSX.Element;
export {};
