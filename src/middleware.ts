import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { prisma } from "./client";

interface iuserWithoutPassword {
  id: string;
  email: string;
  name: string;
  role: "ADMIN" | "CENTER";
}

export const centerAuthCheckFn = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { accessToken } = req.signedCookies;

  if (!accessToken) {
    res.json({ message: "not valid user" });
    return;
  }

  const user = jwt.verify(
    accessToken,
    process.env.TOKEN_SECRET!
  ) as iuserWithoutPassword;
  if (user.role === "CENTER") {
    req.Role = user.role;

    const centerId = await prisma.center.findFirst({
      where: {
        adminid: parseInt(user.id),
      },
      select: {
        id: true,
      },
    });

    if (!centerId) {
      res.json({ message: "center not found for this admin" });
      return;
    }
    req.centerId = centerId.id;

    next();
  } else if (user.role === "ADMIN") {
    req.Role = user.role;
    next();
  } else {
    res.json({ message: "not center admin user" });
  }
};
