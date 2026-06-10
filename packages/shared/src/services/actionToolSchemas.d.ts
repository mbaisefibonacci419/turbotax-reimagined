/**
 * Anthropic Tool Schemas — generated from ChatAction types.
 *
 * These can be passed to Anthropic's `tools` parameter to get
 * structured tool_use responses instead of free-form JSON.
 * Currently used for validation only; production still uses
 * JSON mode via system prompt instructions.
 */
export interface ToolDefinition {
    name: string;
    description: string;
    input_schema: {
        type: 'object';
        properties: Record<string, unknown>;
        required: string[];
    };
}
/** Known income types for add_income (aligned with system prompt + wizard). */
export declare const ADD_INCOME_TYPES: readonly ["w2", "1099nec", "1099k", "1099int", "1099oid", "1099div", "1099r", "1099g", "1099misc", "1099b", "1099da", "1099sa", "1099q", "1099c", "w2g", "k1", "ssa1099", "rental-properties"];
export declare const FILING_STATUS_VALUES: readonly ["single", "married_filing_jointly", "mfj", "married_filing_separately", "mfs", "head_of_household", "hoh", "qualifying_surviving_spouse", "qss"];
export declare const BUSINESS_EXPENSE_CATEGORIES: readonly ["advertising", "car_truck", "commissions_fees", "contract_labor", "depreciation", "insurance", "interest_other", "legal_professional", "office_expense", "pension", "rent_property", "rent_equipment", "repairs_maintenance", "supplies", "taxes_licenses", "travel", "meals", "utilities", "wages", "other_expenses"];
export declare const ACTION_TOOL_SCHEMAS: ToolDefinition[];
