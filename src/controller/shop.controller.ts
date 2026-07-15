import { ShopService } from "../services/shop.service";
import { createCrudControllerFromService } from "../utils/create-service-controller";

export const shopController = createCrudControllerFromService(ShopService);

