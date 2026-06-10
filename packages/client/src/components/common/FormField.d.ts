import { ReactNode } from 'react';
import { TooltipContent } from './InfoTooltip';
interface FormFieldProps {
    label: string;
    optional?: boolean;
    notCommon?: boolean;
    helpText?: string;
    tooltip?: string | TooltipContent;
    error?: string;
    warning?: string;
    errorId?: string;
    irsRef?: string;
    fieldId?: string;
    children: ReactNode;
}
export default function FormField({ label, optional, notCommon, helpText, tooltip, error, warning, errorId, irsRef, fieldId, children, }: FormFieldProps): import("react").JSX.Element;
export {};
