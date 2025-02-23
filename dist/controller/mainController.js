"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginFunc = loginFunc;
exports.signupFunc = signupFunc;
exports.loginCheckFunc = loginCheckFunc;
exports.logoutfunc = logoutfunc;
exports.enrollCheck = enrollCheck;
exports.createEnrollment = createEnrollment;
exports.ActivateEnrollment = ActivateEnrollment;
exports.deActivateEnrollment = deActivateEnrollment;
exports.createCenter = createCenter;
exports.AllEnrollments = AllEnrollments;
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const client_1 = require("../client");
const helper_1 = require("../helper");
function loginFunc(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { email, password } = req.body;
            // Find the user
            const user = yield client_1.prisma.user.findFirst({
                where: {
                    email,
                },
            });
            if (!user) {
                res.status(200).json({ error: "User not found" });
                return;
            }
            if (!user.password) {
                res.status(200).json({ error: "plz login with your google account" });
                return;
            }
            // Compare passwords
            const isPasswordValid = yield bcryptjs_1.default.compare(password, user.password);
            if (!isPasswordValid) {
                res.status(200).json({ error: "Invalid credentials" });
                return;
            }
            (0, helper_1.Cookiehelper)(res, user);
        }
        catch (error) {
            res.status(500).json({ error: "Login failed" });
        }
    });
}
function signupFunc(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { name, email, password } = req.body;
            // check if user is already exists
            const user = yield client_1.prisma.user.findFirst({
                where: {
                    email,
                },
            });
            if (user) {
                res.status(400).json({ message: "User already exists" });
                return;
            }
            // Hash the password
            const hashedPassword = yield bcryptjs_1.default.hash(password, 10);
            // Save the user to the database
            const newUser = yield client_1.prisma.user.create({
                data: {
                    email,
                    password: hashedPassword,
                    name,
                },
            });
            res.status(201).json({ message: "User registered successfully" });
        }
        catch (error) {
            console.log(error);
            res.status(400).json({ message: "User registration failed" });
        }
    });
}
function loginCheckFunc(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { accessToken } = req.cookies;
            if (!accessToken) {
                res.json({ loggedIn: false });
                return;
            }
            const user = jsonwebtoken_1.default.verify(accessToken, process.env.TOKEN_SECRET);
            res.json({ loggedIn: true, user });
        }
        catch (err) {
            res.json({ loggedIn: false }).status(401);
        }
    });
}
function logoutfunc(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            res
                .clearCookie("accessToken", Object.assign(Object.assign({}, helper_1.accessTokenCookieOptions), { maxAge: 0 }))
                .json({ success: true });
        }
        catch (error) {
            console.log(error);
        }
    });
}
function enrollCheck(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const no = req.query.id;
        const val = client_1.prisma.enrollment.findFirst({
            where: {
                no,
            },
        });
        res.json(val);
    });
}
function createEnrollment(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        //check if its from any center
        const { name, dob, father, mother, address, mobNo, wpno, coursename, qualification, } = req.body;
    });
}
function ActivateEnrollment(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { id } = req.body;
        const val = client_1.prisma.enrollment.update({
            where: {
                id,
            },
            data: {
                activated: true,
            },
        });
        res.json(val);
    });
}
function deActivateEnrollment(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { id } = req.body;
        const val = client_1.prisma.enrollment.update({
            where: {
                id,
            },
            data: {
                activated: false,
            },
        });
        res.json(val);
    });
}
function createCenter(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { locationX, locationY } = req.body;
        const data = client_1.prisma.center.create({
            data: {
                locationX,
                locationY,
            },
        });
        res.json(data);
    });
}
function AllEnrollments(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        // by admin
        const page = parseInt(req.query.page) || 1; // Default to page 1
        const limit = parseInt(req.query.limit) || 10; // Default limit 10
        const skip = (page - 1) * limit; // Calculate offset
        try {
            const enrollments = yield client_1.prisma.enrollment.findMany({
                skip,
                take: limit,
            });
            res.json(enrollments);
        }
        catch (error) {
            res.status(500).json({ error: "Failed to fetch enrollments" });
        }
    });
}
