export interface HelpSearchItem {
    id: string;
    label: string;
    stepId: string;
    keywords: string[];
}
/** Extracts searchable items from HELP_CONTENT callouts and IRS-referenced fields. */
export declare function buildHelpItems(): HelpSearchItem[];
export interface CommonQuestion {
    id: string;
    label: string;
    stepId: string;
    keywords: string[];
}
export declare const COMMON_QUESTIONS: CommonQuestion[];
