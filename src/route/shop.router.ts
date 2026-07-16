import { shopController } from "../controller/shop.controller.js";
import { createCrudRoutes } from "./crud-router.factory.js";

export const shopRouter =
  createCrudRoutes(shopController);