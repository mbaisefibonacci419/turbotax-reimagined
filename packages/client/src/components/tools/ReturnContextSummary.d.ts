/**
 * ReturnContextSummary — shows what we know about the user's tax situation.
 *
 * Renders context facts as colored chips/tags. When context is sparse,
 * shows a message encouraging the user to provide more info.
 */
import type { ReturnContext } from '../../services/deductionFinderTypes';
interface Props {
    context: ReturnContext;
    /** 0–1 score of how much context is available. */
    richness: number;
}
export default function ReturnContextSummary({ context, richness }: Props): import("react").JSX.Element;
/**
 * Compute a 0–1 "richness" score for the return context.
 * Used to determine whether to show quick-select bundles.
 */
export declare function computeContextRichness(context: ReturnContext): number;
export {};
