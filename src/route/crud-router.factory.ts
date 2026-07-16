import { Router } from "express";
import type { ICrudController } from "../interface/controller/crud-controller.interface.js";
import type { ICrudValidation } from "../interface/validation/crud-validation.interface.js";
import { validate } from "../middleware/validate.middleware.js";

export const createCrudRoutes = (
  controller: ICrudController,
  validationSchemas?: ICrudValidation,
) => {
  const router = Router();

  router.get(
    "/",
    ...(validationSchemas?.filters
      ? [validate({ query: validationSchemas.filters })]
      : []),
    controller.getAll,
  );

  router.get(
    "/:id",
    ...(validationSchemas?.params
      ? [validate({ params: validationSchemas.params })]
      : []),
    controller.getOne,
  );

  router.post(
    "/",
    ...(validationSchemas?.create
      ? [validate({ body: validationSchemas.create })]
      : []),
    controller.create,
  );

  router.patch(
    "/:id",
    ...(validationSchemas?.params
      ? [validate({ params: validationSchemas.params })]
      : []),
    ...(validationSchemas?.update
      ? [validate({ body: validationSchemas.update })]
      : []),
    controller.update,
  );

  router.delete(
    "/:id",
    ...(validationSchemas?.params
      ? [validate({ params: validationSchemas.params })]
      : []),
    controller.remove,
  );

  return router;
};