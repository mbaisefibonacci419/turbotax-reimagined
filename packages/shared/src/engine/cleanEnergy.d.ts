import { CleanEnergyInfo, CleanEnergyResult } from '../types/index.js';
/**
 * Calculate Residential Clean Energy Credit (Form 5695, Part I).
 *
 * The credit is 30% of qualifying clean energy expenditures:
 *   - Solar electric (photovoltaic) systems
 *   - Solar water heating systems
 *   - Small wind energy systems
 *   - Geothermal heat pump systems
 *   - Battery/energy storage (≥3 kWh capacity)
 *   - Fuel cell systems (capped at $500/0.5 kW)
 *
 * No maximum for solar, wind, geothermal, or battery.
 * Fuel cell credit is capped at $500 per 0.5 kW of capacity.
 *
 * This is a non-refundable credit. Unused credit can be carried forward
 * to future years. The carryforward is added to the current year credit
 * before applying the tax limitation (in the orchestrator).
 *
 * Available through tax year 2032 (26% in 2033, 22% in 2034).
 *
 * @authority
 *   IRC: Section 25D — residential clean energy credit
 *   IRC: Section 25D(c) — carryforward of unused credit
 *   IRA: Section 13302 — extension and modification of residential clean energy credit
 *   Form: Form 5695, Part I
 * @scope Residential clean energy credit (30% of qualified costs) with prior-year carryforward
 * @limitations Does not validate property eligibility or certification requirements
 */
export declare function calculateCleanEnergyCredit(info: CleanEnergyInfo): CleanEnergyResult;
