/**
 * Forms Mode — Store-to-PDF Field Population
 *
 * Populates Syncfusion PDF Viewer form fields from the Zustand store.
 * Handles both initial population and reactive updates for computed fields.
 *
 * Field name normalization: pdf-lib uses top-down XFA hierarchy
 * (topmostSubform[0].Page1[0].f1_14[0]) while Syncfusion reverses it
 * (f1_14[0].Page1[0].topmostSubform[0]) and flattens checkbox names
 * (c120Page10topmostSubform0). We normalize by reversing segments and
 * stripping non-alphanumeric characters to match both conventions.
 */
import type { PdfViewer } from '@syncfusion/ej2-pdfviewer';
import type { TaxReturn, CalculationResult } from '@nimbus/engine';
import type { IRSFormTemplate } from '@nimbus/engine';
import type { ClassifiedField } from '@nimbus/engine';
/**
 * Normalize a field name by stripping all non-alphanumeric characters.
 * Used to match pdf-lib names against Syncfusion's different naming format.
 * Exported for use in PdfFormViewer's focusOut handler.
 */
export declare function normalizeSyncfusionName(name: string): string;
/**
 * Convert a pdf-lib field name to its Syncfusion-compatible normalized key.
 * Reverses the dot-separated hierarchy then strips non-alphanumeric chars.
 *
 * pdf-lib:    topmostSubform[0].Page1[0].f1_14[0]
 * Reversed:   f1_14[0].Page1[0].topmostSubform[0]
 * Normalized: f1140Page10topmostSubform0
 *
 * This matches both Syncfusion's dotted text field names and its
 * flattened checkbox names (e.g., c120Page10topmostSubform0).
 * Exported so PdfFormViewer can key its fieldMap the same way.
 */
export declare function pdfLibToNormalizedKey(pdfLibName: string): string;
/**
 * Populate all form fields in the PDF viewer from the current tax data.
 * Called on `documentLoaded`.
 */
export declare function populateFormFields(viewer: PdfViewer, template: IRSFormTemplate, taxReturn: TaxReturn, calc: CalculationResult, classifiedFields: ClassifiedField[]): void;
/**
 * Enforce read-only state on computed fields via direct DOM manipulation.
 * Syncfusion's updateFormField silently ignores isReadOnly when the value is
 * empty, leaving computed fields editable. This function patches the DOM
 * elements directly as a safety net.
 */
export declare function enforceReadOnlyDOM(viewer: PdfViewer, classifiedFields: ClassifiedField[]): void;
/**
 * Update only computed (read-only) fields after a recalculation.
 * Never overwrites editable fields to prevent cursor-reset mid-edit.
 */
export declare function updateComputedFields(viewer: PdfViewer, template: IRSFormTemplate, taxReturn: TaxReturn, calc: CalculationResult, classifiedFields: ClassifiedField[]): void;
