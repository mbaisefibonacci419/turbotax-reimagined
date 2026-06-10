import type { LucideIcon } from 'lucide-react';
import type { TaxReturn } from '@nimbus/engine';
export interface SidebarTool {
    id: string;
    label: string;
    icon: LucideIcon;
    type: 'standalone' | 'navigate';
    /** Step ID to navigate to (only for type: 'navigate') */
    stepId?: string;
    /** Whether this tool requires minimum income data to be useful */
    needsData?: boolean;
    /** Search keywords for the command palette (Cmd+K) */
    keywords?: string[];
}
export declare const SIDEBAR_TOOLS: SidebarTool[];
/** Returns true when the return has at least one income source entered. */
export declare function hasMinimumIncomeData(taxReturn: TaxReturn | null): boolean;
