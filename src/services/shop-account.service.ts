import type { IShopAccount } from "../interfaces/model/shop-account.interface.js";
import { ShopAffiliation } from "../models/shop-affiliation.schema.js";
import { BaseCrudService } from "./base-crud.service.js";

export class ShopAccountService extends BaseCrudService<IShopAccount>{
    constructor(){
        super(ShopAffiliation)
    }
} 