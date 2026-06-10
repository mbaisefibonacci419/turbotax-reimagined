interface AuditRiskGaugeProps {
    score: number;
    maxScore: number;
    level: 'low' | 'moderate' | 'elevated' | 'high';
}
export default function AuditRiskGauge({ score, maxScore, level }: AuditRiskGaugeProps): import("react").JSX.Element;
export {};
