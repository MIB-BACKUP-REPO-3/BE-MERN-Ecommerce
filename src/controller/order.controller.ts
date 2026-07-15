import { OrderService } from "../services/order.service";
import { createCrudControllerFromService } from "../utils/create-service-controller";

export const orderController = createCrudControllerFromService(OrderService);

