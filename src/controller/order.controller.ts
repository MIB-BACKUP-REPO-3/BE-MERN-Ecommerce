import { OrderService } from "../services/order.service.js";
import { createCrudControllerFromService } from "../utils/create-service-controller.js";

export const orderController = createCrudControllerFromService(OrderService);

