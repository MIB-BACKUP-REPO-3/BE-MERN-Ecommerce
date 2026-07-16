import { OrderService } from "../service/order.service.js";
import { createCrudControllerFromService } from "../util/create-service-controller.js";

export const orderController = createCrudControllerFromService(OrderService);

