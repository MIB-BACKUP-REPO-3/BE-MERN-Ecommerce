import { ShopAccountService } from "../services/shop-account.service.js";
import { createCrudControllerFromService } from "../utils/create-service-controller.js";

export const shopAccountController = createCrudControllerFromService(ShopAccountService);

