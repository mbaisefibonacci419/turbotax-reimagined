/**
 * Chat Input — unified input box with textarea, model picker, mic, and send.
 *
 * Single rounded container inspired by Claude / ChatGPT / Gemini:
 * - Top: auto-growing textarea
 * - Bottom toolbar: model picker (left), char count + mic + send (right)
 *
 * Enter to send, Shift+Enter for newline. 2 000-char limit.
 * Mic button uses the Web Speech API for hands-free dictation.
 */
interface Props {
    onSend: (text: string) => void;
    onAttachFile?: (file: File) => void;
    disabled: boolean;
    /** Whether a message is currently in-flight (shows stop button). */
    isLoading?: boolean;
    /** Called when the user clicks the stop button to abort the in-flight request. */
    onStop?: () => void;
}
export default function ChatInput({ onSend, onAttachFile, disabled, isLoading, onStop }: Props): import("react").JSX.Element;
export {};
