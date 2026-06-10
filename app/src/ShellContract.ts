export type NavStatus = "done" | "in-progress" | "pending";

export interface WizardSection {
  id: string;
  label: string;
  status: NavStatus;
  children?: { id: string; label: string }[];
}

export interface ShellContract {
  currentStepId: string;
  currentStepLabel: string;
  sectionProgress: { completed: number; total: number };
  refundAmount: number | null;
  stateAmount: number | null;
  isCalculating: boolean;
  wizardSections: WizardSection[];
  statuses: Record<string, NavStatus>;

  onNavigateToStep: (stepId: string) => void;
  onNavigateToSection: (sectionId: string) => void;
  onOpenAssist: () => void;
}
