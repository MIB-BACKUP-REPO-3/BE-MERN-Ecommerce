import { ProductService } from "../services/product.service.js";
import { createCrudControllerFromService } from "../utils/create-service-controller.js";

export const productController = createCrudControllerFromService(ProductService);

