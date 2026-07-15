import { shopController } from "../controller/shop.controller";
import { createCrudRoutes } from "./crud-router.factory";


export const shopRouter =
  createCrudRoutes(shopController);