import { ShopAccountService } from "../service/shop-account.service.js";
import { createCrudControllerFromService } from "../util/create-service-controller.js";

export const shopAccountController = createCrudControllerFromService(ShopAccountService);

