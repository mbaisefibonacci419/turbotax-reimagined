/**
 * Conversations Sidebar — Agent Mode
 *
 * Lists navigable conversation sessions derived from the chat history so the
 * user can jump back into earlier parts of the conversation when they return
 * to a session. Also shows the live refund/owed ticker and mode-switch links.
 */

import { useMemo } from 'react';
import { useChatStore } from '../../store/chatStore';
import { useTaxReturnStore } from '../../store/taxReturnStore';
import {
  deriveConversationSessions,
  scrollToChatMessage,
} from '../../services/agent/conversationSessions';
import { formatCurrency } from '../../utils/format';
import { ArrowUpRight, ArrowDownRight } from 'lucide-react';

interface ReturnSummarySidebarProps {
  onSwitchToInterview: () => void;
  onSwitchToForms: () => void;
}

/** Compact relative time label for the conversation list. */
function relativeTime(ts: number): string {
  const diff = Date.now() - ts;
  const min = Math.round(diff / 60000);
  if (min < 1) return 'just now';
  if (min < 60) return `${min}m ago`;
  const hr = Math.round(min / 60);
  if (hr < 24) return `${hr}h ago`;
  const day = Math.round(hr / 24);
  if (day < 7) return `${day}d ago`;
  return new Date(ts).toLocaleDateString(undefined, { month: 'short', day: 'numeric' });
}

export default function ReturnSummarySidebar({
  onSwitchToInterview,
  onSwitchToForms,
}: ReturnSummarySidebarProps) {
  const messages = useChatStore((s) => s.messages);
  const { calculation } = useTaxReturnStore();

  const sessions = useMemo(
    () => deriveConversationSessions(messages),
    [messages],
  );

  const f = calculation?.form1040;
  const isRefund = f && f.refundAmount > 0;
  const amount = f ? (isRefund ? f.refundAmount : f.amountOwed) : 0;

  return (
    <div
      className="h-full flex flex-col text-sm"
      style={{ background: 'var(--color-container-background-accent)', color: 'var(--color-text-primary)' }}
    >
      <div className="flex-1 overflow-y-auto py-2">
        <div
          className="px-3 py-1 text-[10px] font-semibold uppercase tracking-wider"
          style={{ color: 'var(--color-text-secondary)' }}
        >
          Conversations
        </div>
        {sessions.length === 0 ? (
          <p className="px-3 py-1.5 text-xs" style={{ color: 'var(--color-text-tertiary)' }}>
            No conversations yet. Ask the assistant a question to get started.
          </p>
        ) : (
          sessions.map((session) => (
            <button
              key={session.id}
              onClick={() => scrollToChatMessage(session.anchorMessageId)}
              className="w-full text-left flex items-start gap-2 px-3 py-1.5 rounded-md hover:bg-telos-blue-600/10 transition-colors"
              title={session.title}
            >
              <span
                className="w-3 h-3 mt-0.5 shrink-0 rounded-full"
                style={{ backgroundColor: 'var(--color-text-tertiary)' }}
              />
              <span className="min-w-0 flex-1">
                <span
                  className="block text-xs truncate"
                  style={{ color: 'var(--color-text-primary)' }}
                >
                  {session.title}
                </span>
                <span
                  className="block text-[10px]"
                  style={{ color: 'var(--color-text-tertiary)' }}
                >
                  {relativeTime(session.startedAt)} · {session.messageCount} message{session.messageCount === 1 ? '' : 's'}
                </span>
              </span>
            </button>
          ))
        )}
      </div>

      {/* Refund/Owed ticker */}
      {f && (
        <div className="px-3 py-3 border-t border-slate-700/60">
          <div className={`rounded-lg px-3 py-2.5 text-center ${
            isRefund ? 'bg-emerald-500/10 border border-emerald-500/20' : 'bg-amber-500/10 border border-amber-500/20'
          }`}>
            <div className="text-[10px] uppercase tracking-wider mb-0.5" style={{ color: 'var(--color-text-secondary)' }}>
              {isRefund ? 'Estimated Refund' : 'Estimated Owed'}
            </div>
            <div className={`text-lg font-bold flex items-center justify-center gap-1 ${
              isRefund ? 'text-emerald-400' : 'text-amber-400'
            }`}>
              {isRefund
                ? <ArrowUpRight className="w-4 h-4" />
                : <ArrowDownRight className="w-4 h-4" />
              }
              {formatCurrency(amount)}
            </div>
          </div>
        </div>
      )}

      {/* Mode switches */}
      <div className="px-3 pb-3 flex flex-col gap-1.5">
        <button
          onClick={onSwitchToInterview}
          className="w-full text-xs py-1.5 px-2 rounded hover:bg-surface-700 transition-colors text-left"
          style={{ color: 'var(--color-text-secondary)' }}
        >
          Switch to Interview
        </button>
        <button
          onClick={onSwitchToForms}
          className="w-full text-xs py-1.5 px-2 rounded hover:bg-surface-700 transition-colors text-left"
          style={{ color: 'var(--color-text-secondary)' }}
        >
          Switch to Forms
        </button>
      </div>
    </div>
  );
}
