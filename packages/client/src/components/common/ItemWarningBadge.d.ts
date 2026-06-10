import type { ValidationWarning } from '../../services/warningService';
interface ItemWarningBadgeProps {
    warnings?: ValidationWarning[];
}
/**
 * Amber warning badge for individual item cards.
 * Shows an AlertCircle icon when the item has validation warnings.
 * Hover tooltip displays the warning messages.
 *
 * Renders nothing when there are no warnings.
 */
export default function ItemWarningBadge({ warnings }: ItemWarningBadgeProps): import("react").JSX.Element | null;
export {};
