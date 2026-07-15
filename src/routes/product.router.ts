import { productController } from "../controller/product.controller";
import { createCrudRoutes } from "./crud-router.factory";


export const productRouter =
  createCrudRoutes(productController);