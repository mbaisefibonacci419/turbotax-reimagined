import { HouseholdEmployeeInfo, ScheduleHResult } from '../types/index.js';
/**
 * Calculate Schedule H — Household Employee ("Nanny") Tax.
 *
 * If you paid any single household employee cash wages of $2,800+ in 2025,
 * you owe BOTH the employer's AND employee's share of Social Security and
 * Medicare taxes. The employer reports and pays the full combined amount
 * on Schedule H, which is added to Form 1040 total tax.
 *
 * FUTA tax applies if you paid $1,000+ in any calendar quarter.
 *
 * Social Security: 12.4% combined (6.2% employer + 6.2% employee) on wages up to $176,100
 * Medicare: 2.9% combined (1.45% employer + 1.45% employee) on all wages
 * FUTA: 0.6% on first $7,000 per employee (employer only)
 *
 * Per IRS Schedule H instructions: Line 2 = wages × 12.4%, Line 4 = wages × 2.9%.
 * The employer may withhold the employee's share from wages, but reports and remits
 * the full combined amount on Schedule H.
 *
 * @authority
 *   IRC: Section 3111(a) — employer SS tax rate (6.2%)
 *   IRC: Section 3101(a) — employee SS tax rate (6.2%)
 *   IRC: Section 3111(b) — employer Medicare tax rate (1.45%)
 *   IRC: Section 3101(b) — employee Medicare tax rate (1.45%)
 *   IRC: Section 3301 — rate of FUTA tax
 *   IRC: Section 3121(x) — domestic service employment threshold
 *   Form: Schedule H (Form 1040), Lines 2 and 4
 * @scope Household employee tax (combined SS + Medicare + FUTA)
 * @limitations None
 */
export declare function calculateScheduleH(info: HouseholdEmployeeInfo): ScheduleHResult;
