import type { ICrudController } from "../interface/controller/crud-controller.interface.js";
import type { ICrudService } from "../interface/service/crud-service.interface.js";
import { asyncHandler } from "../util/async-handler.js";

export const createCrudController = <T, CreateDTO, UpdateDTO, FilterDTO>(
  service: ICrudService<T, CreateDTO, UpdateDTO, FilterDTO>,
): ICrudController => ({
  getAll: asyncHandler(async (req, res) => {
    const data = await service.getAll(req.query as FilterDTO);
    res.status(200).json(data);
  }),

  getOne: asyncHandler(async (req, res) => {
    const data = await service.getOne(req.params.id as string);
    res.status(200).json(data);
  }),

  create: asyncHandler(async (req, res) => {
    const data = await service.create(req.body as CreateDTO);
    res.status(201).json(data);
  }),

  update: asyncHandler(async (req, res) => {
    const data = await service.update(
      req.params.id as string,
      req.body as UpdateDTO,
    );
    res.status(200).json(data);
  }),

  remove: asyncHandler(async (req, res) => {
    await service.remove(req.params.id as string);
    res.status(204).send();
  }),
  
});
