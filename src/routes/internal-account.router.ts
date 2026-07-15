import { internalAccountController } from "../controller/internal-account.controller";
import { createCrudRoutes } from "./crud-router.factory";


export const internalAccountRouter =
  createCrudRoutes(internalAccountController);