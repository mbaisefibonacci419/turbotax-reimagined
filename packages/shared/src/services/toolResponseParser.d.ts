import type { ChatResponse } from '../types/chat.js';
export interface ToolUseBlock {
    type: 'tool_use';
    id: string;
    name: string;
    input: Record<string, unknown>;
}
export interface TextBlock {
    type: 'text';
    text: string;
}
export type ContentBlock = ToolUseBlock | TextBlock;
/**
 * Parse Anthropic tool_use response content blocks into a ChatResponse.
 * Extracts the text message from text blocks and actions from tool_use blocks.
 */
export declare function parseToolUseResponse(content: ContentBlock[]): ChatResponse;
