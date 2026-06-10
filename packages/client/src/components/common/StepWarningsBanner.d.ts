interface StepWarningsBannerProps {
    stepId: string;
}
/**
 * Displays an amber warning banner at the top of a step when that step has
 * active validation warnings. Used on single-form steps (Expenses, Vehicle,
 * Home Office, etc.) where there are no individual item cards to badge.
 *
 * Renders nothing when the step has no warnings.
 */
export default function StepWarningsBanner({ stepId }: StepWarningsBannerProps): import("react").JSX.Element | null;
export {};
