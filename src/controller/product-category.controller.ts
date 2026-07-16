import { ProductCategoryService } from "../service/product-category.service.js";
import { createCrudControllerFromService } from "../util/create-service-controller.js";

export const productCategoryController = createCrudControllerFromService(ProductCategoryService);

