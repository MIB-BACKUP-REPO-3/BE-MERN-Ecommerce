import { Router } from "express";
import { ICrudController } from "../interfaces/controller/crud-controller.interface";

export const createCrudRoutes = (controller: ICrudController) => {
  const router = Router();
  router.get("/", controller.getAll);
  router.get("/:id", controller.getOne);
  router.post("/", controller.create);
  router.put("/:id", controller.update);
  router.delete("/:id", controller.remove);
  return router;
};