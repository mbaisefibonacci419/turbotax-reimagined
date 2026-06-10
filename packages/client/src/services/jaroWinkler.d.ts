/**
 * Jaro-Winkler String Similarity
 *
 * Pure utility for fuzzy merchant name matching in the Deduction Finder.
 * Returns a similarity score between 0 (no match) and 1 (identical).
 *
 * Standard Jaro-Winkler algorithm with:
 *   - Prefix scale factor p = 0.1
 *   - Max common prefix length = 4
 *
 * Zero external dependencies.
 */
/**
 * Compute Jaro-Winkler similarity between two strings.
 * Boosts the Jaro score for strings that share a common prefix (up to 4 chars).
 */
export declare function jaroWinklerSimilarity(s1: string, s2: string): number;
