import { InternalAccountService } from "../service/internal-account.service.js";
import { createCrudControllerFromService } from "../util/create-service-controller.js";

export const internalAccountController = createCrudControllerFromService(InternalAccountService);

