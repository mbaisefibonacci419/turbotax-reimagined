/**
 * CGDS icons — inlined SVG path data (no runtime network dependency).
 *
 * Permanent source files live in src/icons/*.svg (see src/icons/README.md).
 * Path data below is copied from those SVGs with these transforms:
 *   1. Hardcoded fill colors → `fill="currentColor"` so icons inherit CSS color context
 *   2. Aspect-ratio-preserving height computed from size prop + original viewBox
 *
 * Original Figma assets were pulled from the TurboTax nav/shell reference
 * (fileKey: NgH5R352SZm0RmAoyWzEpj, node 11668:163737). Those URLs expire after 7 days —
 * hence the inlined + saved-to-disk pattern.
 *
 * Each icon accepts a `size` prop (applied as width; height preserves aspect).
 *
 * To add a new icon: see .claude/skills/prototype/reference.md → "Pulling new CGDS icons".
 */
type IconProps = {
    size?: number;
    className?: string;
};
export declare function TurboTaxDIYLogo({ size, className }: IconProps): import("react").JSX.Element;
export declare function SearchIcon({ size, className }: IconProps): import("react").JSX.Element;
export declare function NotificationIcon({ size, className }: IconProps): import("react").JSX.Element;
export declare function QuestionIcon({ size, className }: IconProps): import("react").JSX.Element;
export declare function ChevronLeftIcon({ size, className }: IconProps): import("react").JSX.Element;
export declare function ChevronDownIcon({ size, className }: IconProps): import("react").JSX.Element;
export {};
