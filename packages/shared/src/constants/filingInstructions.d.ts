/**
 * Filing Instructions Generator
 *
 * Pure function that computes everything a filer needs to know to complete
 * their paper filing: which forms are included, where to mail, what to
 * attach, and whether they owe or are getting a refund.
 *
 * Reuses the same IRSFormTemplate condition logic used by irsFormFiller.ts
 * so the forms list stays in sync with the actual PDF output.
 */
import type { TaxReturn, CalculationResult } from '../types/index.js';
import type { StateMailingAddress } from './stateMailingAddresses.js';
export interface FilingInstructions {
    /** IRS forms included in this return (formId + display name) */
    formsIncluded: {
        formId: string;
        displayName: string;
    }[];
    /** IRS mailing address lines */
    mailingAddress: string[];
    /** Documents to attach / include in the envelope */
    attachments: string[];
    /** Signature instruction text */
    signatureLines: string;
    /** Amount owed to IRS (0 if refund or break-even) */
    owesAmount: number;
    /** Refund amount (0 if balance due or break-even) */
    refundAmount: number;
    /** Whether the filer has state return(s) to file separately */
    hasStateReturn: boolean;
    /** Full names of states being filed */
    stateNames: string[];
    /** Payment guidance (only present when filer owes) */
    paymentNote?: string;
    /** Filing deadline */
    deadline: string;
    /** Per-state filing info (mailing addresses, form names) */
    stateFilingInfo: {
        stateCode: string;
        stateName: string;
        mailingAddress: StateMailingAddress | null;
    }[];
    /** Estimated tax payment info for next year (only present when recommended) */
    estimatedPaymentInfo?: {
        recommended: boolean;
        quarterlyAmount: number;
        annualAmount: number;
        firstDueDate: string;
        reasons: string[];
        note: string;
    };
}
/**
 * Generate complete filing instructions from a tax return and its calculation result.
 */
export declare function getFilingInstructions(taxReturn: TaxReturn, calc: CalculationResult): FilingInstructions;
