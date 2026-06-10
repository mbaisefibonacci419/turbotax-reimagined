/**
 * Forms Mode — Field Editability Classifier
 *
 * Determines which PDF form fields can be edited by the user in Forms Mode
 * and which are read-only (auto-calculated). Uses a rule-based approach:
 *
 * 1. source === 'calculationResult' → read-only (computed by engine)
 * 2. source === 'taxReturn' + non-empty sourcePath + no transform → editable
 * 3. Has transform + has inverseTransform → editable
 * 4. Explicit editable: true override → editable
 * 5. Everything else → read-only
 */
import type { IRSFieldMapping } from '../types/irsFormMappings.js';
export interface ClassifiedField {
    mapping: IRSFieldMapping;
    isEditable: boolean;
    /** Dot-path to write back to TaxReturn (undefined for read-only fields) */
    writePath: string | undefined;
    /** Why this field is read-only (undefined if editable) */
    readOnlyReason: string | undefined;
}
/**
 * Classify an array of field mappings into editable / read-only.
 */
export declare function classifyFields(fields: IRSFieldMapping[]): ClassifiedField[];
/**
 * Classify a single field mapping.
 */
export declare function classifyField(mapping: IRSFieldMapping): ClassifiedField;
