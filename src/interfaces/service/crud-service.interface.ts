import { Request } from "express-serve-static-core";

export interface ICrudService<T = unknown> {
  getAll(request:Request): Promise<T[]>;
  getOne(request:Request): Promise<T | null>;
  create(request:Request): Promise<T>;
  update(request:Request): Promise<T | null>;
  remove(request:Request): Promise<T | null>;
}