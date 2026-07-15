import { productCategoryController } from "../controller/product-category.controller";
import { createCrudRoutes } from "./crud-router.factory";


export const productCategoryRouter =
  createCrudRoutes(productCategoryController);