import { ShopAffiliationService } from "../services/shop-affiliation.service.js";
import { createCrudControllerFromService } from "../utils/create-service-controller.js";

export const shopAffiliationController = createCrudControllerFromService(ShopAffiliationService);