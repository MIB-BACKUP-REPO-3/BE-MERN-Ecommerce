import { ProductService } from "../service/product.service.js";
import { createCrudControllerFromService } from "../util/create-service-controller.js";

export const productController = createCrudControllerFromService(ProductService);

