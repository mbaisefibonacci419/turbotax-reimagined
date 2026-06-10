/**
 * Progressive-Tax State Constants — Tax Year 2025
 *
 * Configuration for all states that use the progressive bracket factory.
 * Each state's brackets, deductions, and exemptions are sourced from
 * official state DOR publications for TY2025.
 *
 * States included (20):
 *   VA, MN, OR, MO, SC, MS, KS, OK, AR, ID,
 *   ND, RI, WV, ME, NM, MT, NE, VT, DE, DC
 *
 * Rate Sources:
 *   VA:  Va. Code §58.1-320 (2025) — 4 brackets, top 5.75%
 *   MN:  Minn. Stat. §290.06 (2025) — 4 brackets, top 9.85%
 *   OR:  ORS §316.037 (2025) — 4 brackets, top 9.9%; $256 exemption credit (ORS §316.085)
 *   MO:  Mo. Rev. Stat. §143.011 (2025) — 5 brackets, top 4.7%
 *   SC:  S.C. Code §12-6-510 (2025) — 3 brackets, top 6.2%
 *   MS:  Miss. Code §27-7-5 (2025) — 2 brackets (zero + 4.4%)
 *   KS:  K.S.A. §79-32,110 (2025) — 2 brackets (5.2%/5.58%)
 *   OK:  68 O.S. §2355 (2025) — 6 brackets, top 4.75%
 *   AR:  Ark. Code §26-51-201 (2025) — 5 brackets, top 3.9%
 *   ID:  Idaho Code §63-3024 (2025) — 2 brackets (zero + 5.3%)
 *   ND:  N.D.C.C. §57-38-30.3 (2025) — 3 brackets, top 2.5%
 *   RI:  R.I.G.L. §44-30-2.6 (2025) — 3 brackets, top 5.99%
 *   WV:  W. Va. Code §11-21-4e (2025) — 5 brackets, top 4.82%
 *   ME:  36 M.R.S.A. §5111 (2025) — 3 brackets, top 7.15%
 *   NM:  N.M. Stat. §7-2-7 (2025) — 6 brackets, top 5.9%
 *   MT:  Mont. Code §15-30-2103 (2025) — 2 brackets, top 5.9%
 *   NE:  Neb. Rev. Stat. §77-2715.03 (2025) — 4 brackets, top 5.2%
 *   VT:  32 V.S.A. §5822 (2025) — 4 brackets, top 8.75%
 *   DE:  30 Del. C. §1102 (2025) — 7 brackets, top 6.6%
 *   DC:  D.C. Code §47-1806.03 (2025) — 7 brackets, top 10.75%
 */
import type { ProgressiveTaxStateConfig } from '../../engine/state/progressiveTax.js';
export declare const VA_CONFIG: ProgressiveTaxStateConfig;
export declare const MN_CONFIG: ProgressiveTaxStateConfig;
export declare const OR_CONFIG: ProgressiveTaxStateConfig;
export declare const MO_CONFIG: ProgressiveTaxStateConfig;
export declare const SC_CONFIG: ProgressiveTaxStateConfig;
export declare const MS_CONFIG: ProgressiveTaxStateConfig;
export declare const KS_CONFIG: ProgressiveTaxStateConfig;
export declare const OK_CONFIG: ProgressiveTaxStateConfig;
export declare const AR_CONFIG: ProgressiveTaxStateConfig;
export declare const ID_CONFIG: ProgressiveTaxStateConfig;
export declare const ND_CONFIG: ProgressiveTaxStateConfig;
export declare const RI_CONFIG: ProgressiveTaxStateConfig;
export declare const WV_CONFIG: ProgressiveTaxStateConfig;
export declare const ME_CONFIG: ProgressiveTaxStateConfig;
export declare const NM_CONFIG: ProgressiveTaxStateConfig;
export declare const MT_CONFIG: ProgressiveTaxStateConfig;
export declare const NE_CONFIG: ProgressiveTaxStateConfig;
export declare const VT_CONFIG: ProgressiveTaxStateConfig;
export declare const DE_CONFIG: ProgressiveTaxStateConfig;
export declare const DC_CONFIG: ProgressiveTaxStateConfig;
export declare const PROGRESSIVE_TAX_CONFIGS: Record<string, ProgressiveTaxStateConfig>;
