/**
 * Ohio State Tax Constants — Tax Year 2025
 *
 * Sources:
 *   - Ohio Rev. Code §5747.02 — Ohio income tax rates
 *   - Ohio Rev. Code §5747.025 — Personal exemption and phase-out
 *   - Ohio IT 1040 Instructions — Ohio Individual Income Tax Return
 *   - Ohio Department of Taxation — Tax Rate Schedule
 *
 * Key Ohio characteristics:
 *   - No standard deduction
 *   - AGI-phased personal exemption ($2,400 at AGI ≤ $40K, phases to $0 above $80K)
 *   - Social Security fully exempt
 *   - 3 effective brackets (0%, 2.75%, 3.5%)
 */
import { StateTaxBracket } from '../../types/index.js';
export declare const OH_BRACKETS: Record<string, StateTaxBracket[]>;
export declare const OH_PERSONAL_EXEMPTION_AMOUNT = 2400;
/** AGI at or below this threshold: full exemption */
export declare const OH_EXEMPTION_PHASEOUT_START = 40000;
/** AGI above this threshold: exemption is $0 */
export declare const OH_EXEMPTION_PHASEOUT_END = 80000;
