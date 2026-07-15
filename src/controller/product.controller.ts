import { ProductService } from "../services/product.service";
import { createCrudControllerFromService } from "../utils/create-service-controller";

export const productController = createCrudControllerFromService(ProductService);

