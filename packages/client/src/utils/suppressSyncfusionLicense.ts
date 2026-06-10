/**
 * Suppresses Syncfusion's unlicensed "Claim your FREE account" license banner
 * and full-screen modal overlay.
 *
 * Syncfusion's ej2-base injects two nodes directly into <body>:
 *   1. A fixed top banner   (style includes `z-index: 999999999`)
 *   2. A full-screen modal  (style includes `z-index: 99999` + rgba(0,0,0,0.5),
 *      content includes "Claim your FREE account" + a syncfusion.com/account link)
 *
 * Rather than scrape them out after they paint (fragile, causes a flash), we
 * intercept the body insertion calls so the nodes never render, and add a CSS
 * safety net plus an observer fallback for defense in depth.
 */

const LICENSE_MARKERS = [
  'claim-license-key',
  'claim your free account',
  'syncfusion.com/account',
  'z-index: 999999999',
];

function isSyncfusionLicenseNode(node: unknown): boolean {
  if (!(node instanceof HTMLElement)) return false;
  const markup = (node.outerHTML || '').toLowerCase();
  if (LICENSE_MARKERS.some((m) => markup.includes(m))) return true;
  // Full-screen overlay: translucent backdrop + Syncfusion's dialog z-index.
  return markup.includes('z-index: 99999') && markup.includes('rgba(0, 0, 0, 0.5)');
}

let installed = false;

export function suppressSyncfusionLicense(): void {
  if (installed || typeof document === 'undefined') return;
  installed = true;

  // 1) CSS safety net — hides the nodes even if an insertion path is missed.
  const style = document.createElement('style');
  style.setAttribute('data-suppress-syncfusion', 'true');
  style.textContent = `
    body > div[style*="z-index: 999999999"],
    div[style*="z-index: 99999"][style*="rgba(0, 0, 0, 0.5)"] {
      display: none !important;
      visibility: hidden !important;
      pointer-events: none !important;
    }
  `;
  (document.head || document.documentElement).appendChild(style);

  // 2) Intercept body insertions so the license nodes never enter the DOM.
  const proto = HTMLElement.prototype as unknown as {
    appendChild: <T extends Node>(node: T) => T;
    insertBefore: <T extends Node>(node: T, ref: Node | null) => T;
  };
  const originalAppendChild = proto.appendChild;
  const originalInsertBefore = proto.insertBefore;

  proto.appendChild = function patchedAppendChild<T extends Node>(this: HTMLElement, node: T): T {
    if (this === document.body && isSyncfusionLicenseNode(node)) return node;
    return originalAppendChild.call(this, node) as T;
  };

  proto.insertBefore = function patchedInsertBefore<T extends Node>(
    this: HTMLElement,
    node: T,
    ref: Node | null,
  ): T {
    if (this === document.body && isSyncfusionLicenseNode(node)) return node;
    return originalInsertBefore.call(this, node, ref) as T;
  };

  // 3) Observer fallback — removes anything that still slips through.
  const sweep = (): void => {
    document.querySelectorAll<HTMLElement>('body > div').forEach((el) => {
      if (isSyncfusionLicenseNode(el)) el.remove();
    });
  };
  const observer = new MutationObserver(sweep);
  observer.observe(document.documentElement, { childList: true, subtree: true });
  sweep();
}
