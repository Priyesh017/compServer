"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.adminAuthCheckFn = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const adminAuthCheckFn = (req, res, next) => {
    const { accessToken } = req.cookies;
    if (!accessToken) {
        res.json({ message: "not valid user" });
        return;
    }
    const user = jsonwebtoken_1.default.verify(accessToken, process.env.TOKEN_SECRET);
    if (user.role === "admin") {
        req.myProp = user.id;
        next();
    }
    else
        res.json({ message: "not admin user" });
};
exports.adminAuthCheckFn = adminAuthCheckFn;
