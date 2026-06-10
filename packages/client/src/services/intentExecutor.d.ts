/**
 * Intent Executor
 *
 * Translates LLM-returned ChatAction objects into calls to the existing
 * client API functions (addIncomeItem, updateField, upsertItemized, etc.).
 *
 * Each action is executed independently; partial failures don't block other
 * actions. Returns a summary of what was applied and what failed.
 */
import type { ChatAction } from '@nimbus/engine';
export interface ActionResult {
    action: ChatAction;
    success: boolean;
    summary: string;
    error?: string;
}
export interface ExecutionResult {
    results: ActionResult[];
    successCount: number;
    failureCount: number;
}
/**
 * Execute an array of ChatActions against the current tax return.
 *
 * Each action is executed independently — a failure in one action does
 * not prevent subsequent actions from being attempted.
 *
 * After all data mutations, refreshes the store from localStorage
 * to keep the UI in sync.
 */
export declare function executeActions(actions: ChatAction[], returnId: string): ExecutionResult;
/**
 * Generate a human-readable summary string from an ExecutionResult.
 */
export declare function summarizeExecution(result: ExecutionResult): string;
