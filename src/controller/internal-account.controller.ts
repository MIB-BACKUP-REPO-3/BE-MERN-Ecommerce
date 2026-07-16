import { InternalAccountService } from "../services/internal-account.service.js";
import { createCrudControllerFromService } from "../utils/create-service-controller.js";

export const internalAccountController = createCrudControllerFromService(InternalAccountService);

