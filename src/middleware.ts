import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { prisma } from "./client.js";
import rateLimit from "express-rate-limit";
import logger from "./logger.js";

interface iuserWithoutPassword {
  id: string;
  email: string;
  name: string;
  role: "ADMIN" | "CENTER";
}
export const adminAuthCheckFn = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { accessToken } = req.signedCookies;

    if (!accessToken) {
      res.status(401).json({ message: "Unauthorized: No token provided" });
      return;
    }

    const user = jwt.verify(
      accessToken,
      process.env.TOKEN_SECRET!
    ) as iuserWithoutPassword;

    req.Role = user.role;

    if (user.role !== "ADMIN") {
      res.status(403).json({ message: "Forbidden: Not a admin user" });
      return;
    }

    next();
  } catch (error) {
    logger.error("some error happed from adminAuthCheckFn");
  }
};

export const centerAuthCheckFn = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { accessToken } = req.signedCookies;

    if (!accessToken) {
      res.status(401).json({ message: "Unauthorized: No token provided" });
      return;
    }

    const user = jwt.verify(
      accessToken,
      process.env.TOKEN_SECRET!
    ) as iuserWithoutPassword;

    req.Role = user.role;

    if (user.role === "CENTER") {
      const center = await prisma.center.findFirst({
        where: {
          adminid: parseInt(user.id),
        },
        select: {
          id: true,
        },
      });

      if (!center) {
        res
          .status(403)
          .json({ message: "Forbidden: No center found for this admin" });
        return;
      }

      req.centerId = center.id;
      return next();
    }

    if (user.role === "ADMIN") {
      return next();
    }

    res.status(403).json({ message: "Forbidden: Not a center admin user" });
    return;
  } catch (error) {
    console.error("Auth Middleware Error:", error);
    res.status(401).json({ message: "Unauthorized: Invalid or expired token" });
    return;
  }
};

// emn akta route jeta admin access pabe but center na
export const otpLimiter = rateLimit({
  windowMs: 60 * 1000, // 1 minute
  max: 2, // Limit each IP to 3 requests per minute
  message: { error: "Too many OTP requests. Try again later." },
});
