interface StepNavigationProps {
    onContinue?: () => void | Promise<void>;
    continueLabel?: string;
    showBack?: boolean;
    disabled?: boolean;
}
export default function StepNavigation({ onContinue, continueLabel, showBack, disabled, }: StepNavigationProps): import("react").JSX.Element;
export {};
