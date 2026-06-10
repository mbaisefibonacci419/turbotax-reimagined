import { Form4137Result } from '../types/index.js';
/**
 * Calculate Social Security and Medicare Tax on Unreported Tip Income (Form 4137).
 *
 * Employees who receive tips but don't report them to their employer owe the
 * employee share of FICA taxes on those tips. This is the employee's share only
 * (not the employer portion).
 *
 * The SS tax applies only up to the SS wage base ($176,100 for 2025), considering
 * W-2 Social Security wages already reported. Medicare has no wage base cap.
 *
 * Unreported tips also count as earned income for EITC purposes.
 *
 * @authority
 *   IRC: Section 3121(q) — tips treated as wages for FICA purposes
 *   IRC: Section 3101(a) — employee SS rate (6.2%)
 *   IRC: Section 3101(b) — employee Medicare rate (1.45%)
 *   Form: Form 4137
 * @scope Employee FICA on unreported tips with SS wage base coordination
 * @limitations Does not handle Additional Medicare Tax (0.9%) on tips — that is computed separately
 */
export declare function calculateForm4137(unreportedTips: number, w2SocialSecurityWages?: number): Form4137Result;
