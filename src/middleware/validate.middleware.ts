import type { RequestHandler } from "express";
import type { z } from "zod";

export const validate =
  <
    TBody extends z.ZodTypeAny = z.ZodTypeAny,
    TParams extends z.ZodTypeAny = z.ZodTypeAny,
    TQuery extends z.ZodTypeAny = z.ZodTypeAny,
  >({
    body,
    params,
    query,
  }: {
    body?: TBody;
    params?: TParams;
    query?: TQuery;
  }): RequestHandler =>
  (req, _res, next) => {
    if (body) {
      req.body = body.parse(req.body);
    }

    if (params) {
      req.params = params.parse(req.params) as typeof req.params;
    }

    if (query) {
      req.query = query.parse(req.query) as typeof req.query;
    }

    next();
  };