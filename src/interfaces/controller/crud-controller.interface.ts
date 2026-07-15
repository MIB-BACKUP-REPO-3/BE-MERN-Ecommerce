import { RequestHandler } from "express";

export interface ICrudController {
  getAll: RequestHandler;
  getOne: RequestHandler;
  create: RequestHandler;
  update: RequestHandler;
  remove: RequestHandler;
}