/**
 * BracketComparison — overlaid bracket bars showing how a scenario
 * changes the taxpayer's position across tax brackets.
 *
 * Baseline brackets are solid, scenario brackets are 50% opacity overlay.
 * Reuses BRACKET_COLORS from BracketChart.tsx.
 * Pure HTML/CSS flex divs.
 */
import type { FilingStatus } from '@nimbus/engine';
import type { ScenarioColor } from '../types';
interface BracketComparisonProps {
    baseTaxableIncome: number;
    scenarioTaxableIncome: number;
    filingStatus: FilingStatus;
    scenarioFilingStatus?: FilingStatus;
    scenarioName?: string;
    scenarioColor?: ScenarioColor;
}
export default function BracketComparison({ baseTaxableIncome, scenarioTaxableIncome, filingStatus, scenarioFilingStatus, scenarioName, scenarioColor, }: BracketComparisonProps): import("react").JSX.Element | null;
export {};
