import { FilingStatus } from '../types/index.js';
/**
 * Calculate Additional Medicare Tax on W-2 wages (Form 8959).
 *
 * 0.9% Additional Medicare Tax applies on wages above the threshold:
 *   - $200,000 for Single/HoH/QSS
 *   - $250,000 for MFJ
 *   - $125,000 for MFS
 *
 * When a filer has BOTH W-2 wages and SE income, the threshold is shared.
 * This function computes the Additional Medicare on W-2 wages only.
 * The SE portion is already handled by scheduleSE.ts.
 *
 * To avoid double-counting, we compute the combined amount and subtract
 * what was already computed in Schedule SE.
 *
 * @authority
 *   IRC: Section 3101(b)(2) — additional hospital insurance tax on employees
 *   ACA: Section 9015 — additional Medicare tax
 *   Form: Form 8959
 * @scope 0.9% Additional Medicare Tax on W-2 wages
 * @limitations None
 */
export declare function calculateAdditionalMedicareTaxW2(w2MedicareWages: number, seNetEarnings: number, filingStatus: FilingStatus): number;
