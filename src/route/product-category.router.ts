import { productCategoryController } from "../controller/product-category.controller.js";
import { createCrudRoutes } from "./crud-router.factory.js";

export const productCategoryRouter =
  createCrudRoutes(productCategoryController);