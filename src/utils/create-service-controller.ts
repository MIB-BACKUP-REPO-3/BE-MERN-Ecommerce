import { createCrudController } from "../controller/crud-controller.factory";
import { ICrudService } from "../interfaces/service/crud-service.interface";

export const createCrudControllerFromService = <T extends ICrudService<unknown>>(
  Service: new () => T
) => {
  return createCrudController(new Service());
};