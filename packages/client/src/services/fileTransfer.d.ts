/**
 * Encrypted file transfer — export/import TaxReturn as a portable .nimbus file.
 *
 * File format: JSON with { format, version, exportedAt, salt, iv, ct }
 * Encryption: AES-256-GCM with PBKDF2-derived key (600k iterations, SHA-256)
 *
 * The decrypted ciphertext is a JSON-stringified TaxReturn.
 */
import type { TaxReturn } from '@nimbus/engine';
declare const FORMAT_MARKER = "nimbus-transfer";
export interface NimbusFile {
    format: typeof FORMAT_MARKER;
    version: number;
    exportedAt: string;
    salt: number[];
    iv: number[];
    ct: number[];
}
/** Encrypt a TaxReturn into a downloadable .nimbus Blob. */
export declare function exportReturnToFile(taxReturn: TaxReturn, password: string): Promise<Blob>;
export type ImportResult = {
    ok: true;
    taxReturn: TaxReturn;
} | {
    ok: false;
    error: 'invalid_file' | 'wrong_password' | 'corrupted' | 'read_error';
    message: string;
};
/** Read and decrypt a .nimbus file. Returns the TaxReturn or an error. */
export declare function importReturnFromFile(file: File, password: string): Promise<ImportResult>;
export {};
