import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

export interface iuserWithoutPassword {
  id: string;
  email: string;
  name: string;
  role: "admin" | "normal";
}
export const adminAuthCheckFn = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { accessToken } = req.cookies;

  if (!accessToken) {
    res.json({ message: "not valid user" });
    return;
  }

  const user = jwt.verify(
    accessToken,
    process.env.TOKEN_SECRET!
  ) as iuserWithoutPassword;
  if (user.role === "admin") {
    req.myProp = user.id;
    next();
  } else res.json({ message: "not admin user" });
};
