/**
 * Context Slicer
 *
 * Extracts only the TaxReturn fields that the active skill
 * needs to read, keeping the LLM context minimal and focused.
 */
import type { TaxReturn, CalculationResult } from '@nimbus/engine';
import type { SkillRegistryEntry } from './SkillRegistry';
export declare function buildContextSlice(taxReturn: TaxReturn, calculation: CalculationResult | null, skill: SkillRegistryEntry): Record<string, unknown>;
