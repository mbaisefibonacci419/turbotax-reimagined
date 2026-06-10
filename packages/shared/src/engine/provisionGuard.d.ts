/**
 * Provision guards — check whether year-specific legislative features are active.
 *
 * Engine modules use these guards instead of hardcoded year checks.
 * Currently only 2025 is registered; future years will have different flags.
 */
/** Known provisions that vary by tax year */
export type ProvisionKey = 'schedule1A' | 'scholarshipCredit' | 'expandedSALTCap' | 'tcja' | 'seniorDeductionBonus' | 'tipsOvertimeExclusion';
/** Check if a provision is active for a given tax year */
export declare function isProvisionActive(taxYear: number, provision: ProvisionKey): boolean;
/** Get all provision flags for a tax year */
export declare function getProvisionFlags(taxYear: number): Record<ProvisionKey, boolean>;
