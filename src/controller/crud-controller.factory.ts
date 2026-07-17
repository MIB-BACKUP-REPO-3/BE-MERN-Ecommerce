import type { ICrudController } from "../interface/controller/crud-controller.interface.js";
import type { ICrudService } from "../interface/service/crud-service.interface.js";
import { asyncHandler } from "../util/async-handler.js";
import { extractPageRequest } from "../util/pagination/extract-page-request.js";

export const createCrudController = <T, CreateDTO, UpdateDTO, FilterDTO>(
  service: ICrudService<T, CreateDTO, UpdateDTO, FilterDTO>,
): ICrudController<CreateDTO, UpdateDTO, FilterDTO> => ({
  getAll: asyncHandler(async (req, res) => {
    const data = await service.getAllPaginated( req.query,
      extractPageRequest(req.query));
    res.status(200).json(data);
  }),

  getOne: asyncHandler(async (req, res) => {
    const data = await service.getOne(req.params.id);
    res.status(200).json(data);
  }),

  create: asyncHandler(async (req, res) => {
    const data = await service.create(req.body);
    res.status(201).json(data);
  }),

  update: asyncHandler(async (req, res) => {
    const data = await service.update(req.params.id, req.body);
    res.status(200).json(data);
  }),

  remove: asyncHandler(async (req, res) => {
    await service.remove(req.params.id);
    res.status(204).send();
  }),
});
