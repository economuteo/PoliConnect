import crypto from "crypto";

const algorithm = "aes-256-cbc";
const encryptionKey = crypto.randomBytes(32); // 32 bytes key for AES-256
const iv = crypto.randomBytes(16); // Initialization vector

// Encrypt function
export function encrypt(text) {
    const cipher = crypto.createCipheriv(algorithm, encryptionKey, iv);
    let encrypted = cipher.update(text, "utf8", "hex");
    encrypted += cipher.final("hex");
    return { iv: iv.toString("hex"), content: encrypted };
}

// Decrypt function
export function decrypt(encryptedText, ivHex) {
    const ivBuffer = Buffer.from(ivHex, "hex");
    const decipher = crypto.createDecipheriv(algorithm, encryptionKey, ivBuffer);
    let decrypted = decipher.update(encryptedText, "hex", "utf8");
    decrypted += decipher.final("utf8");
    return decrypted;
}
