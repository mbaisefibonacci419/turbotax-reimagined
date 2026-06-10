/**
 * Client-side encryption utilities using Web Crypto API.
 *
 * Encrypts TaxReturn data at rest in localStorage using AES-256-GCM
 * with a key derived from a user passphrase via PBKDF2.
 *
 * Key management:
 * - The user's passphrase is never stored
 * - A random salt is generated on first setup and stored in localStorage
 * - The CryptoKey is derived on unlock and held in memory only
 * - On lock/timeout, the key reference is cleared from memory
 */
export declare function getActiveKey(): CryptoKey | null;
export declare function setActiveKey(key: CryptoKey | null): void;
export declare function isUnlocked(): boolean;
export declare function lock(): void;
/** Returns true if encryption has been set up (salt + verify token exist). */
export declare function isEncryptionSetup(): boolean;
/**
 * First-time setup: derive key from passphrase, store salt + encrypted verify token.
 * Returns the derived CryptoKey (also sets it as active).
 */
export declare function setupEncryption(passphrase: string): Promise<CryptoKey>;
/**
 * Unlock: derive key from passphrase and verify against stored token.
 * Returns true if passphrase is correct, false otherwise.
 */
export declare function unlock(passphrase: string): Promise<boolean>;
/** Encrypt a string using AES-256-GCM. Returns a base64-like JSON payload. */
export declare function encrypt(plaintext: string, key?: CryptoKey): Promise<string>;
/** Decrypt a payload encrypted with encrypt(). */
export declare function decrypt(payload: string, key?: CryptoKey): Promise<string>;
/**
 * Check if a stored value is encrypted (JSON with iv + ct keys)
 * vs plaintext (JSON with id, taxYear, etc. keys).
 * Accepts both legacy format (iv + ct only) and v1+ format (v + iv + ct).
 */
export declare function isEncryptedPayload(raw: string): boolean;
