"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cookiehelper = exports.accessTokenCookieOptions = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
exports.accessTokenCookieOptions = {
    maxAge: 900000 * 4, // 15 mins
    httpOnly: true,
    sameSite: "none",
    secure: true,
};
const Cookiehelper = (res, user) => {
    const { password: m } = user, userWithoutPassword = __rest(user, ["password"]);
    const token = jsonwebtoken_1.default.sign(userWithoutPassword, process.env.TOKEN_SECRET, {
        expiresIn: "1h",
    });
    res
        .cookie("accessToken", token, exports.accessTokenCookieOptions)
        .status(200)
        .json({ message: "Login successful", user: userWithoutPassword });
};
exports.Cookiehelper = Cookiehelper;
