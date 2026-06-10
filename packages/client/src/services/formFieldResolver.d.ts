/**
 * Forms Mode — Shared Field Value Resolution
 *
 * Extracts the value-resolution logic from irsFormFiller.ts into a reusable
 * module. Used by both the PDF export pipeline and the live Forms Mode viewer.
 */
import type { TaxReturn, CalculationResult } from '@nimbus/engine';
import type { IRSFieldMapping } from '@nimbus/engine';
/**
 * Walk a dot-path (e.g., "form1040.totalWages") into an object.
 */
export declare function resolvePath(obj: Record<string, unknown>, path: string): unknown;
/**
 * Format a value for insertion into a PDF text field.
 * IRS convention: whole dollar amounts, no $ signs, no commas, blank for zero.
 */
export declare function formatValue(value: unknown, format: IRSFieldMapping['format']): string;
/**
 * Resolve the display value for a single field mapping.
 * Returns { rawValue, displayValue, isChecked } for use in both PDF export and Forms Mode.
 */
export declare function resolveFieldValue(mapping: IRSFieldMapping, taxReturn: TaxReturn, calc: CalculationResult): {
    rawValue: unknown;
    displayValue: string;
    isChecked: boolean;
};
