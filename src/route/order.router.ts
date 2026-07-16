import { orderController } from "../controller/order.controller.js";
import { createCrudRoutes } from "./crud-router.factory.js";


export const orderRouter =
  createCrudRoutes(orderController);