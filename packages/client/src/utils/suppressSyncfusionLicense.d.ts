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
export declare function suppressSyncfusionLicense(): void;
