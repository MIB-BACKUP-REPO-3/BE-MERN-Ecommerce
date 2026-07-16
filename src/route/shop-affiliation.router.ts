import { shopAffiliationController } from "../controller/shop-affiliation.controller.js";
import { createCrudRoutes } from "./crud-router.factory.js";


export const shopAffiliationRouter =
  createCrudRoutes(shopAffiliationController);