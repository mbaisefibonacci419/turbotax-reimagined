/**
 * Competitor tax provider metadata and export instructions.
 *
 * Used by the CompetitorImportPanel to show provider-specific guidance
 * and auto-detect providers from uploaded 1040 PDFs.
 */
export interface CompetitorProvider {
    id: string;
    name: string;
    instructions: string[];
    pdfHints: string[];
}
export declare const COMPETITOR_PROVIDERS: CompetitorProvider[];
/**
 * Detect which provider generated a 1040 PDF from its text content.
 * Returns the provider ID or undefined if not detected.
 */
export declare function detectProvider(fullText: string): string | undefined;
/**
 * Get a provider by its ID. Returns the "Other" provider as fallback.
 */
export declare function getProvider(id: string): CompetitorProvider;
