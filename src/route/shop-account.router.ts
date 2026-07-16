import { shopAccountController } from "../controller/shop-account.controller.js";
import { createCrudRoutes } from "./crud-router.factory.js";


export const shopAccountRouter =
  createCrudRoutes(shopAccountController);