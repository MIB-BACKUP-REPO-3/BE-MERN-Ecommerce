import type { NextFunction, Request, Response } from "express";
import { logger } from "../utils/logger.js";

export const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  logger.error(err.message, {
    path: req.url,
    method: req.method,
    stack: err.stack,
  });
  res.status(500).json({ message: "Something went wrong" });
};
