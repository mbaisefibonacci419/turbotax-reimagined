/**
 * useNudges — reactive hook for proactive AI nudges.
 *
 * Computes nudges from the suggestion engine (deterministic gate),
 * manages dismissed state, and provides actions for enable/go and ask AI.
 */
import { type ProactiveNudge } from '../services/nudgeService';
interface UseNudgesResult {
    /** All nudges for the current return (sorted by priority). */
    allNudges: ProactiveNudge[];
    /** Nudges relevant to the current step (max 2). */
    stepNudges: ProactiveNudge[];
    /** Dismiss a nudge (won't appear again for this return). */
    dismissNudge: (id: string) => void;
    /** Enable the discovery key and navigate to the step. */
    enableAndGo: (nudge: ProactiveNudge) => void;
    /** Open the chat with a pre-filled prompt about the nudge. */
    askAI: (nudge: ProactiveNudge) => void;
}
export declare function useNudges(): UseNudgesResult;
export {};
