import { type ReactNode, useMemo } from "react";
import { Shell } from "@nimbo-tt/shell";
import { useTaxReturnStore, SECTIONS, WIZARD_STEPS } from "@tax/client/src/store/taxReturnStore";
import { evaluateCondition } from "@nimbus/engine";
import type { NavStatus } from "./ShellContract";

function formatCurrency(amount: number | null | undefined): string {
  if (amount == null) return "$0";
  const abs = Math.abs(amount);
  return `${amount < 0 ? "-" : ""}$${abs.toLocaleString("en-US", { maximumFractionDigits: 0 })}`;
}

function mapSectionToNavStatus(sectionId: string, currentSection: string): NavStatus {
  const sectionOrder = SECTIONS.map((s) => s.id);
  const currentIdx = sectionOrder.indexOf(currentSection);
  const sectionIdx = sectionOrder.indexOf(sectionId);

  if (sectionIdx < currentIdx) return "done";
  if (sectionIdx === currentIdx) return "in-progress";
  return "pending";
}

function mapSectionToShellLabel(sectionId: string): string {
  switch (sectionId) {
    case "my_info": return "My info";
    case "income": return "Federal";
    case "self_employment": return "Federal";
    case "deductions": return "Federal";
    case "credits": return "Federal";
    case "state": return "State";
    case "review": return "Final review";
    case "finish": return "File";
    default: return sectionId;
  }
}

function mapToFederalChild(sectionId: string): string | null {
  switch (sectionId) {
    case "income": return "Income";
    case "deductions": return "Deductions & credits";
    case "credits": return "Deductions & credits";
    case "self_employment": return "Other tax situations";
    default: return null;
  }
}

export function ShellAdapter({ children }: { children: ReactNode }) {
  const taxReturn = useTaxReturnStore((s) => s.taxReturn);
  const calculation = useTaxReturnStore((s) => s.calculation);
  const currentStepIndex = useTaxReturnStore((s) => s.currentStepIndex);

  const visibleSteps = useMemo(() => {
    if (!taxReturn) return WIZARD_STEPS.filter((s) => !s.condition && !s.declarativeCondition);
    return WIZARD_STEPS.filter((s) => {
      if (s.declarativeCondition) return evaluateCondition(s.declarativeCondition, taxReturn, calculation);
      if (s.condition) return s.condition(taxReturn);
      return true;
    });
  }, [taxReturn, calculation]);

  const currentStep = visibleSteps[currentStepIndex] || null;

  const currentSection = currentStep?.section ?? "my_info";

  const selectedNav = useMemo(() => {
    const federalChild = mapToFederalChild(currentSection);
    if (federalChild) return federalChild;
    return mapSectionToShellLabel(currentSection);
  }, [currentSection]);

  const statuses = useMemo(() => {
    const result: Record<string, NavStatus> = {};
    result["My info"] = mapSectionToNavStatus("my_info", currentSection);
    const federalSections = ["income", "self_employment", "deductions", "credits"];
    const federalIdx = SECTIONS.findIndex((s) => federalSections.includes(s.id));
    const currentIdx = SECTIONS.findIndex((s) => s.id === currentSection);
    if (currentIdx > federalIdx + federalSections.length - 1) {
      result["Federal"] = "done";
    } else if (federalSections.includes(currentSection)) {
      result["Federal"] = "in-progress";
    } else if (currentIdx < federalIdx) {
      result["Federal"] = "pending";
    } else {
      result["Federal"] = "pending";
    }
    result["State"] = mapSectionToNavStatus("state", currentSection);
    result["Final review"] = mapSectionToNavStatus("review", currentSection);
    result["File"] = mapSectionToNavStatus("finish", currentSection);
    return result;
  }, [currentSection]);

  const progressPct = useMemo(() => {
    if (visibleSteps.length === 0) return 0;
    return Math.round((currentStepIndex / (visibleSteps.length - 1)) * 100);
  }, [currentStepIndex, visibleSteps.length]);

  const federalRefund = calculation?.results?.refundOrOwed ?? 0;
  const headerRefund = {
    federal: formatCurrency(federalRefund),
    state: "$0",
    stateLabel: undefined as string | undefined,
  };

  const isFederalSection = ["income", "self_employment", "deductions", "credits"].includes(currentSection);

  return (
    <Shell
      selectedNav={selectedNav}
      progressPct={progressPct}
      sku="Free edition"
      federalExpanded={isFederalSection}
      showFooter={currentSection === "finish"}
      headerRefund={headerRefund}
      statuses={statuses}
    >
      {children}
    </Shell>
  );
}
