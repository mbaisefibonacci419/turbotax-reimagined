import { EnergyEfficiencyInfo, EnergyEfficiencyResult } from '../types/index.js';
/**
 * Calculate Energy Efficient Home Improvement Credit (Form 5695, Part II).
 *
 * 30% credit on qualifying energy efficiency improvements, subject to annual limits:
 *
 * Category A — Heat pump items ($2,000 annual limit):
 *   - Heat pumps (space heating/cooling)
 *   - Heat pump water heaters
 *   - Biomass stoves and boilers
 *
 * Category B — Non-heat-pump items ($1,200 annual limit, with sub-limits):
 *   - Central air conditioning
 *   - Non-HP water heaters (gas, oil, propane)
 *   - Furnaces/boilers (gas, propane, oil)
 *   - Insulation and air sealing materials
 *   - Windows/skylights ($600 limit)
 *   - Doors ($500 limit)
 *   - Electrical panel upgrades ($600 limit)
 *   - Home energy audits ($150 limit)
 *
 * Overall aggregate annual limit: $3,200
 * (i.e. up to $2,000 from heat pump + up to $1,200 from non-HP = $3,200 max)
 *
 * @authority
 *   IRC: Section 25C — energy efficient home improvement credit
 *   IRA: Section 13301 — extension, increase, and modifications of nonbusiness energy property credit
 *   Form: Form 5695, Part II
 * @scope Energy efficient home improvement credit with annual limits
 * @limitations None
 */
export declare function calculateEnergyEfficiencyCredit(info: EnergyEfficiencyInfo): EnergyEfficiencyResult;
