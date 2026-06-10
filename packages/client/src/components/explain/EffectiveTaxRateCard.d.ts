/**
 * EffectiveTaxRateCard — compares effective vs marginal tax rate.
 *
 * Shows a visual gauge and plain-English explanation of the difference
 * between the marginal bracket rate and the actual effective rate.
 */
import type { Form1040Result } from '@nimbus/engine';
interface EffectiveTaxRateCardProps {
    form1040: Form1040Result;
}
export default function EffectiveTaxRateCard({ form1040: f }: EffectiveTaxRateCardProps): import("react").JSX.Element;
export {};
