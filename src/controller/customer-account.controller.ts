import { CustomerAccountService } from "../services/customer-account.service.js";
import { createCrudControllerFromService } from "../utils/create-service-controller.js";

export const customerAccountController = createCrudControllerFromService(CustomerAccountService);

