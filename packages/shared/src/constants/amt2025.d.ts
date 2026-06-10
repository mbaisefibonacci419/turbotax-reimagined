/**
 * Alternative Minimum Tax (AMT) Constants — Tax Year 2025
 *
 * @authority
 *   IRC: Section 55 — Alternative Minimum Tax imposed
 *   IRC: Section 56 — Adjustments in computing AMTI
 *   IRC: Section 57 — Items of tax preference
 *   IRC: Section 58 — Denial of certain losses
 *   Form: Form 6251
 *   Rev Proc 2024-40 — 2025 inflation-adjusted amounts
 */
export declare const AMT_2025: {
    readonly EXEMPTION: {
        readonly SINGLE: 88100;
        readonly MFJ: 137000;
        readonly MFS: 68500;
        readonly HOH: 88100;
    };
    readonly PHASE_OUT: {
        readonly SINGLE: 626350;
        readonly MFJ: 1252700;
        readonly MFS: 626350;
        readonly HOH: 626350;
    };
    readonly RATES: {
        readonly LOW: 0.26;
        readonly HIGH: 0.28;
    };
    readonly RATE_THRESHOLD: {
        readonly SINGLE: 239100;
        readonly MFJ: 239100;
        readonly MFS: 119550;
        readonly HOH: 239100;
    };
    readonly CHILD_UNEARNED_INCOME_AMT_THRESHOLD: 2900;
};
