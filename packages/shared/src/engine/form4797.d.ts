import { Form4797Property, Form4797Result } from '../types/index.js';
/**
 * Calculate Form 4797 — Sales of Business Property.
 *
 * Handles the three main depreciation recapture provisions:
 *   1. Section 1245 — Personal property (equipment, vehicles, furniture).
 *      All depreciation is recaptured as ordinary income up to the gain amount.
 *   2. Section 1250 — Real property (buildings, improvements).
 *      Only "excess" depreciation (above straight-line) is recaptured as ordinary income.
 *      The straight-line depreciation portion is "unrecaptured §1250 gain" taxed at 25%.
 *   3. Section 1231 — After recapture, remaining gain/loss is netted across all properties.
 *      Net gain → treated as long-term capital gain (flows to Schedule D).
 *      Net loss → treated as ordinary loss (deductible against ordinary income).
 *
 * @authority
 *   IRC: Section 1231 — Property used in trade or business gain/loss netting
 *   IRC: Section 1245 — Gain from disposition of depreciable personal property
 *   IRC: Section 1250 — Gain from disposition of depreciable real property
 *   IRC: Section 1(h)(1)(E) — 25% rate on unrecaptured Section 1250 gain
 *   Form: Form 4797 — Sales of Business Property
 * @scope Section 1231/1245/1250 depreciation recapture for sold business property
 * @limitations
 *   Does not model Section 1231 lookback (5-year ordinary loss recapture rule)
 *   Does not model installment sale method (§453)
 *   Does not model like-kind exchanges (§1031) interaction
 *   Does not model casualty/theft gains (Part III special rules)
 */
export declare function calculateForm4797(properties: Form4797Property[]): Form4797Result;
