import { customerAccountController } from "../controller/customer-account.controller.js";
import { createCrudRoutes } from "./crud-router.factory.js";


export const customerAccountRouter =
  createCrudRoutes(customerAccountController);