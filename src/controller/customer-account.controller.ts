import { CustomerAccountService } from "../services/customer-account.service";
import { createCrudControllerFromService } from "../utils/create-service-controller";

export const customerAccountController = createCrudControllerFromService(CustomerAccountService);

