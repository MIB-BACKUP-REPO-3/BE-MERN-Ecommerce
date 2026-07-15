import { orderController } from "../controller/order.controller";
import { createCrudRoutes } from "./crud-router.factory";


export const orderRouter =
  createCrudRoutes(orderController);