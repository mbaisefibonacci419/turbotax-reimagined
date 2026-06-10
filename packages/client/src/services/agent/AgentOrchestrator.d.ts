/**
 * Agent Mode Orchestrator
 *
 * State machine that manages the agent-led tax interview.
 * Selects skills, tracks completion, handles topic detours,
 * and builds the minimal LLM context for each skill.
 */
import type { TaxReturn, CalculationResult } from '@nimbus/engine';
import type { ChatAction } from '@nimbus/engine';
export type AgentPhase = 'onboarding' | 'income' | 'self_employment' | 'deductions' | 'credits' | 'state' | 'review' | 'finish';
export interface AgentSkillCompletion {
    completedAt: string;
    turnCount: number;
}
export interface AgentState {
    phase: AgentPhase;
    activeSkill: string | null;
    completed: Record<string, AgentSkillCompletion>;
    skipped: string[];
    blocked: string[];
    currentTurnCount: number;
    totalTurnCount: number;
    detourSkill: string | null;
    returnToSkill: string | null;
}
export declare function createInitialAgentState(): AgentState;
export declare class AgentOrchestrator {
    private state;
    constructor(state?: AgentState);
    getState(): AgentState;
    /**
     * Scan the TaxReturn and auto-mark skills whose completion
     * criteria are already met (e.g., user filled data in Interview mode).
     */
    syncCompletionFromReturn(taxReturn: TaxReturn): void;
    /**
     * Select the next skill to activate. Returns null when all done.
     */
    selectNextSkill(taxReturn: TaxReturn): string | null;
    /**
     * Activate a skill — called when the orchestrator picks one.
     */
    activateSkill(skillId: string): void;
    /**
     * Record a conversational turn within the active skill.
     */
    recordTurn(): void;
    /**
     * Mark the active skill as complete.
     */
    completeActiveSkill(): void;
    /**
     * Skip the active skill.
     */
    skipActiveSkill(): void;
    /**
     * Handle a user message that might trigger a topic switch.
     * Returns the detour skill ID or null if no switch detected.
     */
    handleTopicSwitch(message: string, taxReturn: TaxReturn): string | null;
    /**
     * Build the system prompt for the active skill's LLM call.
     */
    buildPrompt(taxReturn: TaxReturn, calculation: CalculationResult | null, skillPromptText: string): string;
    /**
     * Validate that a set of actions comply with the active skill's contract.
     */
    validateActions(actions: ChatAction[]): {
        valid: ChatAction[];
        rejected: ChatAction[];
    };
    /**
     * Build a proactive transition message for advancing to the next skill.
     * Returns null if all skills are complete.
     */
    buildTransitionMessage(taxReturn: TaxReturn): {
        message: string;
        options?: Array<{
            label: string;
            value: string;
            description?: string;
        }>;
    } | null;
    /**
     * Check if the current skill might be stuck (over 2x expected turns).
     */
    isSkillStuck(): boolean;
    private isSkillComplete;
    private determinePhase;
    private buildOrchestratorFrame;
    private buildReturnSummary;
    private summarizeCompletedSkills;
    /**
     * Build explicit instructions telling the LLM how to signal that a section
     * is complete, especially for the "user has nothing" path.
     */
    private buildCompletionInstructions;
    private buildActionSchemas;
}
