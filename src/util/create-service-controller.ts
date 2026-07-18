import { createCrudController } from "../controller/crud-controller.factory.js";
import type { ICrudController } from "../interface/controller/crud-controller.interface.js";
import type { ICrudResponseMappers } from "../interface/controller/crud-response-mappers.interface.js";
import type { ICrudService } from "../interface/service/crud-service.interface.js";

export const createCrudControllerFromService = <
  Entity,
  CreateDTO,
  UpdateDTO,
  FilterDTO,
>(
  Service: new () => ICrudService<Entity, CreateDTO, UpdateDTO, FilterDTO>,
  mappers?: ICrudResponseMappers<Entity>,
): ICrudController<CreateDTO, UpdateDTO, FilterDTO> => {
  return createCrudController(new Service(), mappers);
};
