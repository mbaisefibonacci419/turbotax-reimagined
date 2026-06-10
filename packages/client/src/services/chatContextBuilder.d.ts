/**
 * Chat Context Builder
 *
 * Builds a PII-safe context object from the current TaxReturn and
 * wizard step. This context is sent to the LLM to provide awareness
 * of where the user is in the workflow without exposing personal data.
 *
 * NEVER includes: names, SSN, addresses, dates of birth, individual amounts.
 * ONLY includes: step position, structural metadata, counts, and aggregate
 * dollar amounts (from calculation traces).
 *
 * Phase 4 additions:
 * - `traceContext`: compact text from calculation traces, letting the AI
 *   answer "why is my tax $X?" with grounded data and IRC citations.
 * - `flowContext`: visible/hidden step descriptions using declarative
 *   conditions, letting the AI explain "why don't I see Schedule C?"
 */
import type { TaxReturn, CalculationResult } from '@nimbus/engine';
import type { ChatContext } from '@nimbus/engine';
import type { WizardStep } from '../store/taxReturnStore';
/**
 * Build a PII-safe context object for the chat assistant.
 *
 * @param taxReturn       Current tax return (or null)
 * @param currentStepId   ID of the current wizard step
 * @param currentSection  Section of the current wizard step
 * @param calculation     Optional CalculationResult (for trace context)
 * @param visibleSteps    Optional visible wizard steps (for flow context)
 * @param allSteps        Optional all wizard steps (for flow context — to know which are hidden)
 */
export declare function buildChatContext(taxReturn: TaxReturn | null, currentStepId: string, currentSection: string, calculation?: CalculationResult | null, visibleSteps?: WizardStep[], allSteps?: WizardStep[]): ChatContext;
