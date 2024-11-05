import crypto from "crypto";
import dotenv from "dotenv";

dotenv.config();

const algorithm = "aes-256-cbc";
const encryptionKey = Buffer.from(process.env.ENCRYPTION_KEY, "hex");

// Encrypt function with a unique IV for each message
export function encrypt(text) {
    const iv = crypto.randomBytes(16); // Generate a unique IV each time
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
