/**
 * traceFormLinker — maps engine trace lineIds to Forms Mode formIds and PDF fields.
 *
 * Trace lineIds use dot-prefixed names like "form1040.line1a" or "scheduleC.line31".
 * Forms Mode uses short IDs like "f1040" or "f1040sc". This module bridges the two.
 *
 * Also maps trace lineIds (e.g. "form1040.line1a") to field mapping sourcePaths
 * (e.g. "form1040.totalWages") so the viewer can focus the exact PDF field.
 */
/**
 * Resolve a trace lineId (e.g. "form1040.line1a") to a Forms Mode formId (e.g. "f1040").
 * Returns null for unmappable prefixes (w2, k1, state, etc.).
 */
export declare function resolveFormFromLineId(lineId: string): string | null;
/**
 * Resolve a trace lineId to the sourcePath used in form field mappings.
 * Returns null if no mapping is known (field focus will be skipped).
 */
export declare function resolveSourcePathFromLineId(lineId: string): string | null;
