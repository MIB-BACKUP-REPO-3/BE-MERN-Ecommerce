import { ProductCategoryService } from "../services/product-category.service";
import { createCrudControllerFromService } from "../utils/create-service-controller";

export const productCategoryController = createCrudControllerFromService(ProductCategoryService);

