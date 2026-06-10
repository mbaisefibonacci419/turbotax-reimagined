/**
 * Skill Registry
 *
 * Maps each skill to its metadata: phase, ordering, prerequisites,
 * relevance conditions, completion criteria, and allowed actions.
 *
 * This is the runtime representation of the skill markdown files.
 * The markdown files are the source of truth for prompt content;
 * this module encodes the structural contracts.
 */
import type { TaxReturn } from '@nimbus/engine';
import type { AgentPhase } from './AgentOrchestrator';
export type InteractionMode = 'fast-capture' | 'exploratory' | 'confirmation' | 'half-sheet';
export interface SkillRegistryEntry {
    id: string;
    domain: string;
    phase: AgentPhase;
    order: number;
    prerequisites: string[];
    expectedTurns: number;
    interactionMode: InteractionMode;
    allowedActionTypes: string[];
    /** Exact TaxReturn field names this skill may write via update_field. */
    writableFields: string[];
    isRelevant: (taxReturn: TaxReturn) => boolean;
    isComplete: (taxReturn: TaxReturn) => boolean;
}
export declare const SKILL_REGISTRY: SkillRegistryEntry[];
