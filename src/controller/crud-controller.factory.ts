import { ICrudController } from "../interfaces/controller/crud-controller.interface";
import { ICrudService } from "../interfaces/service/crud-service.interface";
import { asyncHandler } from "../utils/async-handler";

export const createCrudController = (service: ICrudService): ICrudController => {
  return {
    getAll: asyncHandler(async (req, res) => {
      const data = await service.getAll(req);
      res.status(200).json(data);
    }),
    getOne: asyncHandler(async (req, res) => {
      const data = await service.getOne(req);
      res.status(200).json(data);
    }),
    create: asyncHandler(async (req, res) => {
      const data = await service.create(req);
      res.status(201).json(data);
    }),
    update: asyncHandler(async (req, res) => {
      const data = await service.update(req);
      res.status(200).json(data);
    }),
    remove: asyncHandler(async (req, res) => {
      await service.remove(req);
      res.status(204).send();
    }),
  };
};
