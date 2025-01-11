import { UnauthenticatedError } from "../errors/customErrors.js";
import { verifyJWT } from "../utils/tokenUtils.js";
import { StatusCodes } from "http-status-codes";

export const authenticateUser = (req, res, next) => {
    const { token } = req.cookies;
    if (!token) {
        return res.status(StatusCodes.UNAUTHORIZED).json({ msg: "Authentication required" });
    }
    try {
        const { userId, role } = verifyJWT(token);
        req.user = { userId, role };
        next();
    } catch (error) {
        return res.status(StatusCodes.UNAUTHORIZED).json({ msg: "Authentication invalid" });
    }
};

export const authorizePermissions = (...roles) => {
    return (req, res, next) => {
        if (!roles.includes(req.user.role)) {
            throw new UnauthenticatedError("Unauthorized to access this route");
        }
        next();
    };
};
