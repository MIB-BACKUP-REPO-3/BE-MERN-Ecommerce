import type { IInternalAccount } from "../interface/model/internal-account.interface.js";
import { InternalAccount } from "../model/internal-account.schema.js";
import { BaseCrudService } from "./base-crud.service.js";

export class InternalAccountService extends BaseCrudService<IInternalAccount>{
    constructor(){
        super(InternalAccount)
    }
}