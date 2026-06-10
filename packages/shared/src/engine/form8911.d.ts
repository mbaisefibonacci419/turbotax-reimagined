import { EVRefuelingCreditInfo, EVRefuelingCreditResult } from '../types/index.js';
/**
 * Calculate Alternative Fuel Vehicle Refueling Property Credit (Form 8911).
 *
 * The credit is 30% of the cost of qualified alternative fuel vehicle refueling property
 * (e.g., EV chargers, hydrogen fueling stations), subject to per-property caps:
 *   - Personal use property: $1,000 per property (IRC §30C(e)(1))
 *   - Business/investment use property: $100,000 per property (IRC §30C(e)(2))
 *
 * The credit is non-refundable for personal-use property. Business-use property
 * generates a general business credit (Form 3800), which is outside scope.
 *
 * For personal-use property:
 *   Credit = sum of min(30% × cost, $1,000) for each property
 *   Limited to income tax liability (non-refundable)
 *
 * The property must be placed in service during the tax year and located in an
 * eligible census tract (low-income community or non-urban area). For simplicity,
 * we assume the user has verified eligibility and only include qualifying properties.
 *
 * @authority
 *   IRC: Section 30C — Alternative fuel vehicle refueling property credit
 *   IRA: Section 13404 — Extension and modification of alternative fuel refueling property credit
 *   Form: Form 8911 — Alternative Fuel Vehicle Refueling Property Credit
 * @scope Personal-use EV refueling property credit (30% of cost, $1,000/property cap)
 * @limitations Does not compute business-use credit (Form 3800 integration). Assumes user verifies census tract eligibility.
 */
export declare function calculateEVRefuelingCredit(info: EVRefuelingCreditInfo): EVRefuelingCreditResult;
