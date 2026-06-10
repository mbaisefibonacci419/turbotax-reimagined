export interface FieldHelp {
    tooltip?: string;
    helpText?: string;
    irsRef?: string;
    irsUrl?: string;
}
export interface StepCallout {
    type: 'info' | 'warning' | 'tip';
    title: string;
    body: string;
    irsUrl?: string;
}
export interface StepHelp {
    fields: Record<string, FieldHelp>;
    callouts?: StepCallout[];
}
export declare const HELP_CONTENT: Record<string, StepHelp>;
export interface ContextualHelp {
    label: string;
    title: string;
    explanation: string;
    irsUrl?: string;
}
export declare const CONTEXTUAL_HELP: Record<string, ContextualHelp>;
