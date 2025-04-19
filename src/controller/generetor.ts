import { fill_franchise } from "../helper.js";
import { Request, Response } from "express";

export async function generate_franchise(req: Request, res: Response) {
  await fill_franchise();
  res.json({ success: true });
}
