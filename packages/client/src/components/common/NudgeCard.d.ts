/**
 * NudgeCard — proactive AI suggestion card.
 *
 * Wraps CalloutCard styling with actions: Enable & Go, Ask AI, Dismiss.
 * Used by StepNudgesBanner to surface deterministically-gated suggestions.
 */
import type { ProactiveNudge } from '../../services/nudgeService';
interface NudgeCardProps {
    nudge: ProactiveNudge;
    onEnableAndGo: (nudge: ProactiveNudge) => void;
    onAskAI: (nudge: ProactiveNudge) => void;
    onDismiss: (id: string) => void;
}
export default function NudgeCard({ nudge, onEnableAndGo, onAskAI, onDismiss }: NudgeCardProps): import("react").JSX.Element;
export {};
