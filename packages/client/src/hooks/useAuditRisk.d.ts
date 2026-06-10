import { AuditRiskAssessment } from '../services/auditRiskService';
/**
 * Hook that computes the audit risk assessment for the current tax return.
 * Memoized — only recomputes when taxReturn or calculation changes.
 */
export declare function useAuditRisk(): AuditRiskAssessment | null;
