import type { IShopAccount } from "../interface/model/shop-account.interface.js";
import { ShopAffiliation } from "../model/shop-affiliation.schema.js";
import { BaseCrudService } from "./base-crud.service.js";

export class ShopAccountService extends BaseCrudService<IShopAccount>{
    constructor(){
        super(ShopAffiliation)
    }
} 