import { ShopAccountService } from "../services/shop-account.service";
import { createCrudControllerFromService } from "../utils/create-service-controller";

export const shopAccountController = createCrudControllerFromService(ShopAccountService);

