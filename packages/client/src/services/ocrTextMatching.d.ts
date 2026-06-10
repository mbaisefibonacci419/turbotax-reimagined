/**
 * OCR Text Matching — fuzzy matching utilities for OCR-extracted text.
 *
 * Used only when `ocrMode: true` is passed to extraction functions.
 * When ocrMode is false/undefined, the digital PDF exact-match path is used instead.
 *
 * Pure functions, zero dependencies, fully testable.
 */
/**
 * Levenshtein distance between two strings.
 * Standard dynamic-programming implementation — O(n*m) time/space.
 */
export declare function levenshteinDistance(a: string, b: string): number;
/**
 * Fuzzy substring inclusion check.
 * Slides a window of `needle.length` across `haystack`, checking if
 * any window has Levenshtein distance ≤ `maxDistance` from the needle.
 *
 * Used in place of `haystack.includes(needle)` when ocrMode is true.
 */
export declare function fuzzyIncludes(haystack: string, needle: string, maxDistance?: number): boolean;
/**
 * Normalize OCR text to fix common recognition artifacts.
 * Applied to concatenated text before keyword matching.
 */
export declare function normalizeOCRText(text: string): string;
