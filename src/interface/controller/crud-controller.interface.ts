import type { RequestHandler } from "express";
import type { PaginationQuery } from "../../type/pagination-query.type.js";

export interface ICrudController<
  CreateDTO = any,
  UpdateDTO = any,
  FilterDTO = any
> {
  getAll: RequestHandler<{}, any, any, FilterDTO & PaginationQuery>;
  getOne: RequestHandler<{ id: string }>;
  create: RequestHandler<{}, any, CreateDTO>;
  update: RequestHandler<{ id: string }, any, UpdateDTO>;
  remove: RequestHandler<{ id: string }>;
}