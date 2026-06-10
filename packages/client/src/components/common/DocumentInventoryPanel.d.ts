/**
 * Document Inventory Panel — shows all entered forms organized by type
 * with completeness indicators, entry details, and navigation.
 *
 * Structure:
 *   OverallProgressHeader   – Completeness bar with stats
 *   PendingAlert            – Amber card for discovered-but-not-entered
 *   IncomeFormGroupCard[]   – Expandable card per form type
 *     FormEntryRow[]        – Per-entry with status + Edit button
 *   NonIncomeSectionCard[]  – Personal info, filing, dependents, deductions, credits
 */
export default function DocumentInventoryPanel(): import("react").JSX.Element;
