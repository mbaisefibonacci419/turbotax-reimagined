/**
 * Document → Chat Actions — converts PDFExtractResult into a ChatResponse.
 *
 * Used in two scenarios:
 * 1. Private mode (no LLM) — generates a synthetic response with add_income actions.
 * 2. Fallback when LLM is unavailable.
 *
 * The extraction pipeline (pdfImporter) does the hard work; this module just
 * shapes the result into the chat action format.
 */
import type { ChatResponse } from '@nimbus/engine';
import type { PDFExtractResult } from './pdfImporter';
/**
 * Build a ChatResponse from a PDFExtractResult.
 * Returns proposed add_income actions and a human-readable summary.
 */
export declare function buildActionsFromExtraction(result: PDFExtractResult): ChatResponse;
/**
 * Build a text summary of extraction results for the LLM context.
 * Sent as part of the user message in BYOK modes so the LLM
 * can propose actions and answer follow-up questions.
 */
export declare function buildExtractionContextText(result: PDFExtractResult): string;
