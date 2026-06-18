/**
 * Conversation Sessions — derives a list of navigable "sessions" from the
 * single flat chat message history (chatStore.messages).
 *
 * The app stores one chat timeline per tax return; it has no first-class
 * multi-thread concept. To let users jump back into earlier parts of a
 * conversation, we segment the timeline into sessions wherever there is a
 * meaningful idle gap between consecutive messages. Each session is titled by
 * its first user message and anchored to that message's id so the UI can
 * scroll to it.
 */

import type { ChatMessageUI } from '../../store/chatStore';

/** Idle gap (ms) that starts a new session. */
const SESSION_GAP_MS = 30 * 60 * 1000; // 30 minutes

export interface ConversationSession {
  /** Stable id for the session (the anchor message id). */
  id: string;
  /** Message id to scroll to when the session is opened. */
  anchorMessageId: string;
  /** Short human-readable title (from first user message). */
  title: string;
  /** Timestamp of the first message in the session. */
  startedAt: number;
  /** Number of messages in the session. */
  messageCount: number;
}

function titleFromMessages(messages: ChatMessageUI[]): string {
  const firstUser = messages.find((m) => m.role === 'user' && m.content.trim().length > 0);
  const source = firstUser ?? messages.find((m) => m.content.trim().length > 0);
  if (!source) return 'Conversation';
  const text = source.content.trim().replace(/\s+/g, ' ');
  return text.length > 48 ? `${text.slice(0, 47)}…` : text;
}

/**
 * Segment a flat message timeline into sessions by idle gap.
 * Returned newest-first for display.
 */
export function deriveConversationSessions(messages: ChatMessageUI[]): ConversationSession[] {
  if (messages.length === 0) return [];

  const groups: ChatMessageUI[][] = [];
  let current: ChatMessageUI[] = [];

  for (const msg of messages) {
    if (current.length === 0) {
      current.push(msg);
      continue;
    }
    const prev = current[current.length - 1];
    if (msg.timestamp - prev.timestamp > SESSION_GAP_MS) {
      groups.push(current);
      current = [msg];
    } else {
      current.push(msg);
    }
  }
  if (current.length > 0) groups.push(current);

  return groups
    .map((group) => {
      const anchor =
        group.find((m) => m.role === 'user') ?? group[0];
      return {
        id: anchor.id,
        anchorMessageId: anchor.id,
        title: titleFromMessages(group),
        startedAt: group[0].timestamp,
        messageCount: group.length,
      };
    })
    .reverse();
}

/** Scroll the chat timeline to a given message id. */
export function scrollToChatMessage(messageId: string): void {
  if (typeof document === 'undefined') return;
  const el = document.getElementById(`chat-msg-${messageId}`);
  if (!el) return;
  el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  el.classList.add('chat-msg-flash');
  window.setTimeout(() => el.classList.remove('chat-msg-flash'), 1200);
}
