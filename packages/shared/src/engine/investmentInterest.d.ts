import { InvestmentInterestInfo, InvestmentInterestResult } from '../types/index.js';
/**
 * Calculate Investment Interest Expense deduction (Form 4952).
 *
 * Investment interest = interest paid on debt used to purchase investment property
 * (typically margin interest from brokerage accounts).
 *
 * Deduction limited to net investment income (NII). Excess carries forward.
 *
 * Net Investment Income = interest + ordinary (non-qualified) dividends
 *   + (optionally) qualified dividends and net LTCG if taxpayer elects
 *
 * If taxpayer elects to include qualified dividends/LTCG in NII, those amounts
 * lose preferential rate treatment and are taxed at ordinary rates.
 *
 * @authority
 *   IRC: Section 163(d) — limitation on investment interest
 *   Form: Form 4952
 * @scope Investment interest expense deduction limited to NII
 * @limitations None
 *
 * @param info - Investment interest expense data
 * @param interestIncome - Total interest income (from 1099-INT + K-1)
 * @param ordinaryDividends - Total ordinary dividends (from 1099-DIV + K-1)
 * @param qualifiedDividends - Total qualified dividends (subset of ordinary)
 * @param netLTCG - Net long-term capital gains (Schedule D + K-1)
 */
export declare function calculateInvestmentInterest(info: InvestmentInterestInfo, interestIncome: number, ordinaryDividends: number, qualifiedDividends: number, netLTCG: number): InvestmentInterestResult;
