/**
 * ToolViewWrapper — shared layout for standalone tool views.
 *
 * Provides a "Back to [step]" header and consistent spacing.
 * When the user clicks Back, they return to the wizard step they were on.
 */
import { ReactNode } from 'react';
interface ToolViewWrapperProps {
    children: ReactNode;
}
export default function ToolViewWrapper({ children }: ToolViewWrapperProps): import("react").JSX.Element;
export {};
