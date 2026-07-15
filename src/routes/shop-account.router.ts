import { shopAccountController } from "../controller/shop-account.controller";
import { createCrudRoutes } from "./crud-router.factory";


export const shopAccountRouter =
  createCrudRoutes(shopAccountController);