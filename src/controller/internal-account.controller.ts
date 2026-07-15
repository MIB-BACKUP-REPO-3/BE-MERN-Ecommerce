import { InternalAccountService } from "../services/internal-account.service";
import { createCrudControllerFromService } from "../utils/create-service-controller";

export const internalAccountController = createCrudControllerFromService(InternalAccountService);

