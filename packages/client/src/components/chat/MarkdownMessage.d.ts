/**
 * MarkdownMessage — renders assistant chat messages as sanitized Markdown.
 *
 * Uses react-markdown (renders MD → React elements, never dangerouslySetInnerHTML)
 * with rehype-sanitize as defense-in-depth against prompt injection attacks that
 * could embed HTML in the LLM's JSON `message` field.
 *
 * Security: images are stripped. Links are only rendered as clickable for internal
 * navigation fragments (#step-- and #tool--). All other links render as plain text
 * — the LLM should not generate arbitrary clickable URLs.
 */
interface Props {
    content: string;
}
export default function MarkdownMessage({ content }: Props): import("react").JSX.Element;
export {};
