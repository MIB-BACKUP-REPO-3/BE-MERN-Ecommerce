import { CustomerAccountService } from "../service/customer-account.service.js";
import { createCrudControllerFromService } from "../util/create-service-controller.js";

export const customerAccountController = createCrudControllerFromService(CustomerAccountService);

