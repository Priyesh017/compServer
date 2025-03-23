import { NextFunction, Request, Response } from "express";

type htype = (req: Request, res: Response, next: NextFunction) => Promise<void>;

export const ErrorHandler =
  (handler: htype) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      await handler(req, res, next);
    } catch (error) {
      res
        .status(500)
        .json({ success: false, message: "Some error happened", error });
    }
  };
