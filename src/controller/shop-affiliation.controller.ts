import { ShopAffiliationService } from "../service/shop-affiliation.service.js";
import { createCrudControllerFromService } from "../util/create-service-controller.js";

export const shopAffiliationController = createCrudControllerFromService(ShopAffiliationService);