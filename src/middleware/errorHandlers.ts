import { Request, Response, NextFunction } from "express";

export function notFound(req: Request, res: Response) {
  res.status(404).json({
    message: "Route not found",
    path: req.originalUrl,
  });
}

export function errorHandler(
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) {
  console.error("Unhandled error:", err);

  res.status(500).json({
    message: "Internal server error",
  });
}

export function validateId(req: Request, res: Response, next: NextFunction) {
  const id = Number(req.params.id);

  if (isNaN(id) || id <= 0) {
    return res.status(400).json({
      message: "Invalid seashell ID",
    });
  }

  next();
}
