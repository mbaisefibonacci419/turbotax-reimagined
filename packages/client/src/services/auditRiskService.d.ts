/**
 * Audit Risk Scoring Service
 *
 * Evaluates a tax return for IRS audit risk factors and produces a
 * plain-English assessment with mitigation tips. This is presentation-level
 * logic — it consumes existing engine outputs and plausibility warnings.
 *
 * Pure function, no side effects.
 *
 * ─── Source Authority ────────────────────────────────────────────────
 * Every factual claim in this service is sourced from one of the following:
 *
 *  [DB24]  IRS Data Book 2024 (Publication 55B), Table 17 — Examination
 *          Coverage by Type and Size of Return, Tax Year 2022.
 *          https://www.irs.gov/statistics/soi-tax-stats-examination-coverage-and-recommended-additional-tax-after-examination-by-type-and-size-of-return-irs-data-book-table-17
 *
 *  [GAO22] GAO-22-104960 — "Tax Compliance: Trends of IRS Audit Rates
 *          and Results for Individual Taxpayers by Income," May 2022.
 *          https://www.gao.gov/products/gao-22-104960
 *
 *  [GAP22] IRS Publication 5869 (Rev. 10-2024) — "Federal Tax Compliance
 *          Research: Tax Gap Projections for Tax Year 2022."
 *          https://www.irs.gov/pub/irs-pdf/p5869.pdf
 *
 *  [GAO23] GAO-24-105281 — "Sole Proprietor Compliance: Treasury and IRS
 *          Have Opportunities to Reduce the Tax Gap," October 2023.
 *          https://www.gao.gov/assets/gao-24-105281.pdf
 *
 *  [TIGTA] TIGTA Report 2025-400-025 — "Assessment of Fiscal Year 2024
 *          Compliance With Improper Payment Reporting Requirements."
 *          https://www.tigta.gov
 *
 *  [NTA]   National Taxpayer Advocate Annual Report — Most Litigated Issues:
 *          Passive Activity Losses Under IRC §469.
 *          https://www.taxpayeradvocate.irs.gov
 *
 *  [IRM]   Internal Revenue Manual, Section 4.1.2.6 — DIF Overview.
 *          https://www.irs.gov/irm/part4/irm_04-001-002
 *
 *  [D6209] IRS Document 6209, Section 12 — Examination: describes DIF as
 *          assigning "weights to certain basic return characteristics" and
 *          ranking returns by composite score.
 *          https://www.irs.gov/pub/irs-6209/6209_section%2012_2014.pdf
 *
 *  [VITA]  IRS Link & Learn Taxes (VITA training) — "Schedule C Situations
 *          that Raise a 'Red Flag'."
 *          https://apps.irs.gov/app/vita/content/09s/09_08_010.jsp?level=advanced
 *
 *  [TIGTA-AOTC]  TIGTA Report 2024-40-026 — "Assessment of FY 2023 Compliance
 *                with PIIA." AOTC improper payment rate: 31.6% ($1.7B).
 *                https://www.tigta.gov
 *
 *  [GAO-AOTC]  GAO-16-475 — "Refundable Tax Credits: Comprehensive Compliance
 *              Strategy..." (May 2016). Average AOTC overclaims: $5.0B/year.
 *              https://www.gao.gov/products/gao-16-475
 *
 *  [TIGTA-FEIE]  TIGTA Report 2014-30-098 — "More Scrutiny Needed for Tax
 *                Returns of Taxpayers Claiming the Foreign Earned Income
 *                Exclusion" (Dec 2013). 99% of audited Form 2555 returns not
 *                referred to international examiners.
 *                https://www.tigta.gov
 *
 *  [LBI-FEIE]  IRS LB&I Compliance Campaign — "Foreign Earned Income Exclusion"
 *              (announced Nov 3, 2017). Active examination campaign.
 *              https://www.irs.gov/businesses/irs-lbi-compliance-campaigns-nov-3-2017
 *
 *  [GAO-FEIE]  GAO-14-387 — "Tax Policy: Economic Benefits of Income Exclusion
 *              for U.S. Citizens Working Abroad Are Uncertain" (May 2014).
 *              $4.4B tax expenditure; 445K filers.
 *              https://www.gao.gov/products/gao-14-387
 *
 *  [TIGTA-HOBBY]  TIGTA Report 2016-30-031 — "Opportunities Exist to Identify
 *                 and Examine Individual Taxpayers Who Deduct Potential Hobby
 *                 Losses" (April 2016). 88% of sampled returns showed hobby
 *                 indicators; $70.9M estimated improper deductions.
 *                 https://www.tigta.gov
 *
 *  [P5558]  IRS Publication 5558 (Rev. Sep 2021) — "Audit Technique Guide:
 *           IRC Section 183, Activities Not Engaged in for Profit."
 *           https://www.irs.gov/pub/irs-pdf/p5558.pdf
 *
 *  [TIGTA-NONCASH]  TIGTA Report 2013-40-009 — "Many Taxpayers Are Still Not
 *                   Complying With Noncash Charitable Contribution Reporting
 *                   Requirements" (Feb 2013). 60% noncompliance rate on >$5K
 *                   claims; $3.8B erroneous.
 *                   https://www.tigta.gov
 *
 *  [TIGTA-EV]  TIGTA Audit #202340825 — "Inflation Reduction Act: Implementation
 *              of the Clean Vehicle Tax Credits" (~Sep 2024). 97% of flagged
 *              returns confirmed noncompliant.
 *              https://www.tigta.gov
 *
 *  [TIGTA-EV19]  TIGTA Report 2019-30-011 — identified 16,510 returns receiving
 *                $73.8M in erroneous plug-in electric vehicle credits.
 *                https://www.tigta.gov
 *
 *  [TIGTA-5329]  TIGTA Report #2024-10-0065 — "Millions of Taxpayers Took Early
 *                Retirement Distributions but Some Did Not Pay the Additional Tax"
 *                (Sep 30, 2024). 2.8M taxpayers, $12.9B, ~$1.29B potential tax.
 *                https://www.tigta.gov
 *
 *  [GAO-K1]  GAO-14-453 — "Partnerships and S Corporations: IRS Needs to Improve
 *            Information to Address Tax Noncompliance" (May 2014). Estimated $91B
 *            annual misreporting.
 *            https://www.gao.gov/products/gao-14-453
 *
 *  [LBI-K1]  IRS LB&I Compliance Campaign — "Partnership Losses in Excess of
 *            Partner's Basis" (Feb 8, 2023).
 *            https://www.irs.gov/businesses/corporations/lbi-active-campaigns
 *
 *  [TIGTA-PTC]  TIGTA Report 2024-40-026 — FY 2023: Net Premium Tax Credit
 *               improper payment rate was 26.0%, representing approximately
 *               $1.0 billion. Part of $21.4 billion across four refundable credits.
 *               https://www.tigta.gov
 *
 *  [GAO-PTC]  GAO-26-108742 — "Preliminary Results Suggest Fraud Risks in the
 *             Advance Premium Tax Credit Persist" (Dec 2025). Over $21 billion
 *             in APTC paid for plan year 2023 could not be reconciled with IRS
 *             tax records. Nearly one-third of enrollees unreconciled.
 *             https://www.gao.gov/products/gao-26-108742
 *
 *  [TIGTA-DA]  TIGTA Report 2024-30-030 — "Virtual Currency Tax Compliance
 *              Enforcement Can Be Improved" (Jul 2024). Of 365,000+ SB/SE
 *              examinations, only 1,144 (0.31%) included digital asset review.
 *              https://www.tigta.gov
 *
 *  [LBI-DA]  IRS LB&I Compliance Campaign — "Virtual Currency Compliance."
 *            Active campaign with examination treatment stream.
 *            https://www.irs.gov/businesses/corporations/lbi-active-campaigns
 *
 *  [GAO-DA]  GAO-20-188 — "Virtual Currencies: Additional Information Reporting
 *            and Clarified Guidance Could Improve Tax Compliance" (Feb 2020).
 *            https://www.gao.gov/products/gao-20-188
 *
 * Statutory citations use standard IRC/Treas. Reg. format.
 *
 * ─── What DIF scores are and are not ────────────────────────────────
 * The IRS Discriminant Index Function (DIF) system assigns a numerical
 * score to every return based on statistical comparison to norms derived
 * from National Research Program (NRP) audit data [IRM 4.1.2.6, D6209].
 * The specific formulas, weights, and thresholds are classified. This
 * service identifies characteristics that publicly available data shows
 * correlate with higher examination rates or enforcement focus. The point
 * values and level thresholds are our own heuristic weighting — they do
 * not represent IRS scoring and should not be presented as such.
 */
import type { TaxReturn, CalculationResult } from '@nimbus/engine';
export type RiskLevel = 'low' | 'moderate' | 'elevated' | 'high';
export type RiskCategory = 'income' | 'deduction' | 'credit' | 'structural';
export interface RiskFactor {
    id: string;
    category: RiskCategory;
    points: number;
    label: string;
    explanation: string;
    mitigation: string;
    triggered: boolean;
}
export interface AuditRiskAssessment {
    level: RiskLevel;
    score: number;
    maxPossibleScore: number;
    triggeredFactors: RiskFactor[];
    summary: string;
}
export declare function assessAuditRisk(taxReturn: TaxReturn, calculation: CalculationResult): AuditRiskAssessment;
