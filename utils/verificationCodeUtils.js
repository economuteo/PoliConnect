import crypto from "crypto";

export const generateVerificationCode = () => {
    const code = crypto.randomBytes(2).toString("hex").toLowerCase();
    return code;
};

export const isVerificationCodeValid = (codeObject) => {
    const { expiresAt } = codeObject;
    if (Date.now() > expiresAt) {
        return false;
    }
    return true;
};
