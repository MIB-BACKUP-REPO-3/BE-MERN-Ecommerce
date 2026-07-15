import { shopAffiliationController } from "../controller/shop-affiliation.controller";
import { createCrudRoutes } from "./crud-router.factory";


export const shopAffiliationRouter =
  createCrudRoutes(shopAffiliationController);