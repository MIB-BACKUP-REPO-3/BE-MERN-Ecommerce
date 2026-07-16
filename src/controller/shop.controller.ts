import { ShopService } from "../services/shop.service.js";
import { createCrudControllerFromService } from "../utils/create-service-controller.js";

export const shopController = createCrudControllerFromService(ShopService);

