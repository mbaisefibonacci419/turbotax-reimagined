/**
 * Prior Year Template Builder
 *
 * Extracts individual income items from a prior-year TaxReturn and creates
 * zero-amount "template" items preserving payer/employer names. Users select
 * which items to import, and the builder creates current-year placeholders
 * so they don't have to re-type the same payer names every year.
 *
 * Only works with JSON imports (which contain full TaxReturn data).
 * PDF imports only have summary numbers — no individual items to template.
 *
 * Intentionally excludes:
 * - 1099-B / 1099-DA individual transactions (trade-specific, not recurring)
 * - SSA-1099 (single global entry, not per-payer)
 * - W-2G (gambling winnings are not recurring)
 */
import type { TaxReturn } from '@nimbus/engine';
export interface TemplateItem {
    /** Income type key: 'w2', '1099int', '1099div', etc. */
    type: string;
    /** Display label: "Acme Corp (W-2)" */
    label: string;
    /** Human-friendly type label: "W-2", "1099-INT", etc. */
    typeLabel: string;
    /** Original payer/employer name */
    payerName: string;
    /** Zero-amount data ready for import (names preserved, amounts zeroed) */
    templateData: Record<string, unknown>;
    /** Whether the user wants to import this item (default: true) */
    selected: boolean;
}
export interface TemplateImportManifest {
    /** All template items */
    items: TemplateItem[];
    /** Items grouped by income type */
    byType: Record<string, TemplateItem[]>;
    /** Total number of template items */
    totalCount: number;
    /** Source tax year */
    sourceYear: number;
    /** Schedule C businesses (separate from income items) */
    businesses: BusinessTemplate[];
}
export interface BusinessTemplate {
    /** Display name */
    label: string;
    /** Template data for creating a new BusinessInfo */
    templateData: Record<string, unknown>;
    /** Whether selected for import */
    selected: boolean;
}
export declare function buildTemplateItems(priorReturn: TaxReturn): TemplateImportManifest;
/**
 * Returns human-readable type label for display.
 * e.g., '1099int' → '1099-INT'
 */
export declare function getTypeLabel(type: string): string;
