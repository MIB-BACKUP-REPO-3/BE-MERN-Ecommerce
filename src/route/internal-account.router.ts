import { internalAccountController } from "../controller/internal-account.controller.js";
import { createCrudRoutes } from "./crud-router.factory.js";


export const internalAccountRouter =
  createCrudRoutes(internalAccountController);