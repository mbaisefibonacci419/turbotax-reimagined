/**
 * Privacy Disclaimer — shown on first chat open.
 *
 * Mode-aware: shows different privacy information based on the active AI mode.
 *   - Private: minimal disclaimer (data stays local)
 *   - BYOK: explains server proxy + user's Anthropic API key
 */
interface Props {
    onAccept: () => void;
}
export default function PrivacyDisclaimer({ onAccept }: Props): import("react").JSX.Element;
export {};
