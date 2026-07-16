import { createCrudController } from "../controller/crud-controller.factory.js";
import type { ICrudService } from "../interfaces/service/crud-service.interface.js";

export const createCrudControllerFromService = <T extends ICrudService<unknown>>(
  Service: new () => T
) => {
  return createCrudController(new Service());
};