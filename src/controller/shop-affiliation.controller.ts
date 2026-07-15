import { ShopAffiliationService } from "../services/shop-affiliation.service";
import { createCrudControllerFromService } from "../utils/create-service-controller";

export const shopAffiliationController = createCrudControllerFromService(ShopAffiliationService);