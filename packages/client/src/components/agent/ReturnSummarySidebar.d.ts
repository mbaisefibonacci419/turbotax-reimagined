/**
 * Return Summary Sidebar — Agent Mode
 *
 * Shows a live summary of the return organized by skill/phase,
 * with completion status, key data points, and a refund ticker.
 */
import type { AgentState } from '../../services/agent/AgentOrchestrator';
interface ReturnSummarySidebarProps {
    agentState: AgentState;
    onSwitchToInterview: () => void;
    onSwitchToForms: () => void;
}
export default function ReturnSummarySidebar({ agentState, onSwitchToInterview, onSwitchToForms, }: ReturnSummarySidebarProps): import("react").JSX.Element;
export {};
