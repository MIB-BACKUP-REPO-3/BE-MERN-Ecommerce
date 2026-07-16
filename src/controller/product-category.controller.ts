import { ProductCategoryService } from "../services/product-category.service.js";
import { createCrudControllerFromService } from "../utils/create-service-controller.js";

export const productCategoryController = createCrudControllerFromService(ProductCategoryService);

