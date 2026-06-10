/**
 * Pre-export readiness checks.
 *
 * Distinguishes two severity levels:
 *   BLOCKER  — Missing data that makes the return un-fileable (e.g., no name,
 *              no filing status). Blocks PDF/IRS export until resolved.
 *   WARNING  — Existing advisory warnings from warningService.ts.
 *              Surfaced in the export gate but do NOT block download.
 *
 * The readiness check runs every time ExportPdfStep renders and feeds
 * into a pre-export validation panel.
 */
import type { TaxReturn } from '@nimbus/engine';
export interface ReadinessIssue {
    severity: 'blocker' | 'warning';
    section: string;
    stepId: string;
    message: string;
}
export interface ReadinessResult {
    ready: boolean;
    blockers: ReadinessIssue[];
    blockerCount: number;
}
export declare function checkExportReadiness(taxReturn: TaxReturn): ReadinessResult;
