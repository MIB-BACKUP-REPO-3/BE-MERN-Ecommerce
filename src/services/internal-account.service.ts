import type { IInternalAccount } from "../interfaces/model/internal-account.interface.js";
import { InternalAccount } from "../models/internal-account.schema.js";
import { BaseCrudService } from "./base-crud.service.js";

export class InternalAccountService extends BaseCrudService<IInternalAccount>{
    constructor(){
        super(InternalAccount)
    }
}