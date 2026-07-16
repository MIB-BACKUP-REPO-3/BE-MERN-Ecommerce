import { productController } from "../controller/product.controller.js";
import { createCrudRoutes } from "./crud-router.factory.js";


export const productRouter =
  createCrudRoutes(productController);