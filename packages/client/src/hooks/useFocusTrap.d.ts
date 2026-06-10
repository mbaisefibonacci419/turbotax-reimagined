import { RefObject } from 'react';
/**
 * Traps Tab key focus within a container element.
 * Also locks body scroll and handles Escape to call onClose.
 */
export declare function useFocusTrap(containerRef: RefObject<HTMLElement | null>, active: boolean, onClose?: () => void): void;
