import { TaxReturn, CalculationResult } from '@nimbus/engine';
import type { StepCondition } from '@nimbus/engine';
/** Immediately flush any pending auto-save (used before explicit saves and on page unload). */
export declare function flushAutoSave(): void;
export interface WizardStep {
    id: string;
    label: string;
    section: string;
    /** Legacy imperative condition (kept for migration). */
    condition?: (taxReturn: TaxReturn) => boolean;
    /** Declarative condition — preferred over `condition` when both are present.
     *  Can be serialized, inspected by the AI chat, and described in documentation. */
    declarativeCondition?: StepCondition;
}
export declare const SECTIONS: readonly [{
    readonly id: "my_info";
    readonly label: "My Info";
    readonly icon: "User";
}, {
    readonly id: "income";
    readonly label: "Income";
    readonly icon: "DollarSign";
}, {
    readonly id: "self_employment";
    readonly label: "Self-Employment";
    readonly icon: "Briefcase";
}, {
    readonly id: "deductions";
    readonly label: "Deductions";
    readonly icon: "Scissors";
}, {
    readonly id: "credits";
    readonly label: "Credits";
    readonly icon: "Award";
}, {
    readonly id: "state";
    readonly label: "State Taxes";
    readonly icon: "MapPin";
}, {
    readonly id: "review";
    readonly label: "Review";
    readonly icon: "ClipboardCheck";
}, {
    readonly id: "finish";
    readonly label: "Finish";
    readonly icon: "Download";
}];
export declare const WIZARD_STEPS: WizardStep[];
export type SaveState = 'idle' | 'saving' | 'saved';
interface TaxReturnState {
    returnId: string | null;
    taxReturn: TaxReturn | null;
    calculation: CalculationResult | null;
    currentStepIndex: number;
    /** Highest step index the user has organically reached (for nav guard). */
    highestStepVisited: number;
    startTime: number | null;
    saveState: SaveState;
    /** Set when user jumps ahead of their furthest progress — cleared on navigation. */
    jumpAheadWarning: boolean;
    /** When set, the tool view is shown instead of the current wizard step. */
    activeToolId: string | null;
    /** Current view mode: wizard interview or forms mode PDF viewer */
    viewMode: 'wizard' | 'forms' | 'agent';
    /** Active form in Forms Mode */
    activeFormId: string;
    activeInstanceIndex: number;
    /** When set, PdfFormViewer will focus this lineId's field after loading. */
    pendingFocusLineId: string | null;
    /** Multi-select form keys ("formId:instanceIndex") for batch view/print/download */
    selectedFormKeys: Set<string>;
    setReturn: (taxReturn: TaxReturn) => void;
    setReturnId: (id: string) => void;
    setCalculation: (calc: CalculationResult | null) => void;
    updateField: (field: string, value: unknown) => void;
    /** Set a value at a deep dot-path (e.g., "directDeposit.routingNumber") */
    updateDeepField: (path: string, value: unknown) => void;
    setCurrentStep: (index: number) => void;
    setStartTime: (time: number) => void;
    setSaveState: (state: SaveState) => void;
    dismissJumpWarning: () => void;
    setActiveTool: (toolId: string | null) => void;
    setViewMode: (mode: 'wizard' | 'forms' | 'agent') => void;
    setActiveForm: (formId: string, instanceIndex: number) => void;
    /** Switch to Forms Mode and navigate to the given form, optionally focusing a line. */
    navigateToFormLine: (formId: string, lineId?: string) => void;
    clearPendingFocus: () => void;
    toggleFormSelection: (key: string) => void;
    selectAllForms: (keys: string[]) => void;
    clearFormSelection: () => void;
    getVisibleSteps: () => WizardStep[];
    getCurrentStep: () => WizardStep | null;
    goNext: () => void;
    goPrev: () => void;
    goToStep: (stepId: string) => void;
}
export declare const useTaxReturnStore: import("zustand").UseBoundStore<import("zustand").StoreApi<TaxReturnState>>;
export {};
