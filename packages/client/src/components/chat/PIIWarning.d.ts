/**
 * PII Warning Banner — shown above the chat input when PII is detected.
 *
 * Displays what was detected and offers three options:
 *   1. Send the sanitized version (PII replaced with placeholders)
 *      — any extractable field values are saved directly to the local return
 *   2. Edit the message (dismiss warning, keep text in input)
 *   3. Cancel (dismiss warning, clear text)
 */
import { type PIIWarningState } from '../../store/chatStore';
interface Props {
    warning: PIIWarningState;
}
export default function PIIWarning({ warning }: Props): import("react").JSX.Element;
export {};
