/**
 * Chat Panel — right drawer containing the full chat experience.
 *
 * Slides in from the right edge. Contains:
 * - Header with title, mode indicator, settings gear, and close button
 * - Privacy disclaimer (first open only, mode-aware)
 * - PII warning banner (when PII detected in cloud modes)
 * - Scrollable message area with auto-scroll
 * - Loading indicator (pulsing dots)
 * - Error display
 * - Sticky input at bottom
 */

import { X, Sparkles, Trash2, ArrowDown } from 'lucide-react';
import { useRef, useEffect, useState, useCallback } from 'react';
import { useChatStore } from '../../store/chatStore';
import { useTaxReturnStore } from '../../store/taxReturnStore';
import { getStarterPrompts, type NudgePrompt } from '../../data/starterPrompts';
import { useNudges } from '../../hooks/useNudges';
import PrivacyDisclaimer from './PrivacyDisclaimer';
import ChatMessage from './ChatMessage';
import ChatInput from './ChatInput';
import PIIWarning from './PIIWarning';
import ThinkingIndicator from './ThinkingIndicator';
import ResizeHandle from '../common/ResizeHandle';


interface ChatPanelProps {
  panelWidth?: number;
  isDragging?: boolean;
  onResizeStart?: (e: React.MouseEvent | React.TouchEvent) => void;
  onResizeReset?: () => void;
  topOffset?: number;
  /** When true, renders as inline content instead of a fixed right drawer. Used by AgentLayout. */
  embedded?: boolean;
}

export default function ChatPanel({ panelWidth, isDragging, onResizeStart, onResizeReset, topOffset = 0, embedded = false }: ChatPanelProps) {
  const {
    messages,
    isOpen,
    isLoading,
    streamingContent,
    hasAcceptedDisclaimer,
    error,
    piiWarning,
    closePanel,
    acceptDisclaimer,
    sendMessage,
    sendDocumentMessage,
    markActionsApplied,
    markActionsDismissed,
    undoActions,
    setMessageFeedback,
    regenerateLastResponse,
    editAndResend,
    retryMessage,
    clearHistory,
    clearError,
    abortMessage,
  } = useChatStore();


  const messagesEndRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const [showScrollDown, setShowScrollDown] = useState(false);

  // Check if user is scrolled near the bottom
  const checkScrollPosition = useCallback(() => {
    const el = scrollContainerRef.current;
    if (!el) return;
    const distanceFromBottom = el.scrollHeight - el.scrollTop - el.clientHeight;
    setShowScrollDown(distanceFromBottom > 100);
  }, []);

  // Auto-scroll to bottom when new messages arrive or streaming content updates
  useEffect(() => {
    const el = scrollContainerRef.current;
    if (!el) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
      return;
    }
    const distanceFromBottom = el.scrollHeight - el.scrollTop - el.clientHeight;
    if (distanceFromBottom < 150 || isLoading) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isLoading, streamingContent]);

  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  // Scroll to most recent message when chat panel opens
  useEffect(() => {
    if (isOpen && messages.length > 0) {
      // Use requestAnimationFrame to ensure the panel has rendered
      requestAnimationFrame(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'instant' });
      });
    }
  }, [isOpen]);

  // Escape key: abort in-flight request (panel closed via X or sparkle button only)
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen && isLoading) {
        abortMessage();
      }
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, isLoading, abortMessage]);


  // Contextual starter prompts based on current step or tool view + active nudges
  const activeToolId = useTaxReturnStore((s) => s.activeToolId);
  const currentStep = useTaxReturnStore((s) => s.getCurrentStep());
  const stepId = activeToolId || currentStep?.id || 'unknown';
  const section = activeToolId ? 'tools' : (currentStep?.section || 'unknown');
  const { stepNudges } = useNudges();
  const nudgePrompts: NudgePrompt[] = stepNudges.map((n) => ({
    prompt: n.chatPrompt,
    benefitLabel: n.estimatedBenefit ? `~$${n.estimatedBenefit.toLocaleString()}` : undefined,
  }));
  const starterPrompts = getStarterPrompts(stepId, section, nudgePrompts);

  // Identify the last assistant message (for regenerate button)
  const lastAssistantId = [...messages].reverse().find((m) => m.role === 'assistant')?.id;

  const visible = embedded || isOpen;

  return (
    <>
      {/* Backdrop overlay (mobile) — skip in embedded mode */}
      {!embedded && isOpen && (
        <div
          className="fixed inset-0 bg-black/20 z-30 lg:hidden"
          onClick={closePanel}
        />
      )}

      {/* Panel */}
      <div
        ref={panelRef}
        data-testid="chat-panel"
        aria-hidden={!visible}
        style={{
          ...(panelWidth && !embedded ? { width: panelWidth } : undefined),
          background: 'var(--color-container-background-primary)',
          borderLeft: embedded ? undefined : '1px solid var(--color-container-border-primary)',
        }}
        className={embedded
          ? 'w-full h-full flex flex-col'
          : `fixed right-0 top-0 h-full w-full ${!panelWidth ? 'sm:w-96' : ''} z-40
                    shadow-2xl flex flex-col
                    ${!isDragging ? 'transition-transform duration-300 ease-in-out' : ''}
                    ${isOpen ? 'translate-x-0' : 'translate-x-full invisible'}`}
      >
        {/* Resize handle on left edge — desktop only, hidden in embedded mode */}
        {!embedded && onResizeStart && (
          <div className="absolute left-0 top-0 bottom-0 -translate-x-1/2 z-50">
            <ResizeHandle
              isDragging={isDragging ?? false}
              onMouseDown={onResizeStart}
              onDoubleClick={onResizeReset ?? (() => {})}
            />
          </div>
        )}
        <>
            {/* ─── Header ─────────────────────────────── */}
            <div
              className="flex items-center justify-between px-4"
              style={{ borderBottom: '1px solid var(--color-container-border-primary)', ...(topOffset ? { height: topOffset } : { padding: '0.75rem 1rem' }) }}
            >
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4" style={{ color: 'var(--color-action-standard)' }} />
                <h2 className="text-sm font-semibold" style={{ color: 'var(--color-text-primary)' }}>
                  Intuit Assist
                </h2>
              </div>
              <div className="flex items-center gap-1">
                {messages.length > 0 && hasAcceptedDisclaimer && (
                  <button
                    onClick={clearHistory}
                    className="p-1.5 rounded-md transition-colors"
                    style={{ color: 'var(--color-text-tertiary)' }}
                    aria-label="Clear chat history"
                    title="Clear history"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                )}
                {!embedded && (
                  <button
                    onClick={closePanel}
                    className="p-1.5 rounded-md transition-colors"
                    style={{ color: 'var(--color-text-tertiary)' }}
                    aria-label="Close chat panel"
                  >
                    <X className="w-5 h-5" />
                  </button>
                )}
              </div>
            </div>

            {/* ─── Content ────────────────────────────── */}
            {!hasAcceptedDisclaimer ? (
              <PrivacyDisclaimer onAccept={acceptDisclaimer} />
            ) : (
              <>
                {/* Messages area */}
                <div
                  ref={scrollContainerRef}
                  onScroll={checkScrollPosition}
                  className="flex-1 overflow-y-auto px-4 py-4 relative"
                >
                  {messages.length === 0 && !isLoading && (
                    <div className="flex flex-col items-center justify-center h-full text-center">
                      <p className="text-sm mb-4" style={{ color: 'var(--color-text-secondary)' }}>
                        How can I help with your taxes?
                      </p>
                      <div className="space-y-2 w-full max-w-[85%]">
                        {starterPrompts.map((prompt) => (
                          <button
                            key={prompt}
                            onClick={() => sendMessage(prompt)}
                            className="w-full text-left text-xs px-3 py-2.5 rounded-lg
                                       transition-all duration-150"
                            style={{ background: 'var(--color-container-background-accent)', border: '1px solid var(--color-container-border-primary)', color: 'var(--color-text-secondary)' }}
                          >
                            &ldquo;{prompt}&rdquo;
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {messages.map((msg) => (
                    <ChatMessage
                      key={msg.id}
                      message={msg}
                      isLastAssistant={msg.id === lastAssistantId}
                      onActionsApplied={markActionsApplied}
                      onActionsDismissed={markActionsDismissed}
                      onUndoActions={undoActions}
                      onFeedback={setMessageFeedback}
                      onRegenerate={regenerateLastResponse}
                      onFollowUp={sendMessage}
                      onEditAndResend={editAndResend}
                      onRetry={retryMessage}
                    />
                  ))}

                  {/* Streaming response — shows tokens as they arrive */}
                  {isLoading && streamingContent ? (
                    <div className="flex justify-start mb-3">
                      <div className="max-w-[85%] rounded-xl px-3.5 py-2.5" style={{ background: 'var(--color-container-background-accent)', border: '1px solid var(--color-container-border-primary)' }}>
                        <p className="text-sm whitespace-pre-wrap" style={{ color: 'var(--color-text-primary)' }}>{streamingContent}<span className="inline-block w-1.5 h-4 animate-pulse ml-0.5 align-text-bottom rounded-sm" style={{ background: 'var(--color-action-standard)' }} /></p>
                      </div>
                    </div>
                  ) : isLoading && (
                    <ThinkingIndicator
                      userMessage={messages.filter((m) => m.role === 'user').pop()?.content}
                      section={section}
                    />
                  )}

                  {/* Error display */}
                  {error && (
                    <div className="flex justify-start mb-3">
                      <div className="max-w-[85%] rounded-xl px-3.5 py-2.5 bg-red-500/10 border border-red-500/30">
                        <p className="text-xs text-red-400">{error}</p>
                        <button
                          onClick={clearError}
                          className="text-[10px] text-red-400/60 hover:text-red-400 mt-1 underline"
                        >
                          Dismiss
                        </button>
                      </div>
                    </div>
                  )}

                  <div ref={messagesEndRef} />
                </div>

                {/* Scroll to bottom button */}
                {showScrollDown && (
                  <div className="flex justify-center -mt-5 mb-1 relative z-10">
                    <button
                      onClick={scrollToBottom}
                      className="flex items-center justify-center w-8 h-8 rounded-full
                                 transition-all shadow-lg"
                      style={{ background: 'var(--color-container-background-primary)', border: '1px solid var(--color-container-border-primary)', color: 'var(--color-text-secondary)' }}
                      aria-label="Scroll to latest message"
                      title="Scroll to bottom"
                    >
                      <ArrowDown className="w-4 h-4" />
                    </button>
                  </div>
                )}

                {/* PII Warning (shown above input when PII detected) */}
                {piiWarning && <PIIWarning warning={piiWarning} />}

                {/* Input (includes model picker in toolbar) */}
                <ChatInput
                  onSend={sendMessage}
                  onAttachFile={sendDocumentMessage}
                  disabled={isLoading}
                  isLoading={isLoading}
                  onStop={abortMessage}
                />
              </>
            )}
        </>
      </div>
    </>
  );
}
