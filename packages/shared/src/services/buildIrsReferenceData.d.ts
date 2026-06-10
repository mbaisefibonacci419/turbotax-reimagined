/**
 * Dynamic IRS Reference Data Builder
 *
 * Generates a personalized block of IRS thresholds/limits for the AI chat
 * system prompt. Instead of hardcoding all constants, this pulls from the
 * engine's tax2025.ts based on the user's filing status, current section,
 * and enabled income/deduction/credit types.
 *
 * Benefits:
 *   - Always in sync with the engine (single source of truth)
 *   - ~40-60% fewer tokens than embedding everything
 *   - Higher signal-to-noise → better model responses
 */
export interface IrsReferenceDataOptions {
    taxYear?: number;
    filingStatus?: string;
    currentSection?: string;
    incomeDiscovery?: Record<string, string>;
    deductionMethod?: string;
    dependentCount?: number;
}
/**
 * Build a personalized IRS reference data block for the AI system prompt.
 * Pulls directly from the engine's tax2025 constants.
 */
export declare function buildIrsReferenceData(options: IrsReferenceDataOptions): string;
