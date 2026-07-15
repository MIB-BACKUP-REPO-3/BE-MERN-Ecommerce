import { customerAccountController } from "../controller/customer-account.controller";
import { createCrudRoutes } from "./crud-router.factory";


export const customerAccountRouter =
  createCrudRoutes(customerAccountController);