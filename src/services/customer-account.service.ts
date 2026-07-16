import { CustomerSchema, type ICustomer } from "../models/customer-account.schema.js";
import { BaseCrudService } from "./base-crud.service.js";

export class CustomerAccountService extends BaseCrudService<ICustomer>{
    constructor(){
        super(CustomerSchema)
    }
}