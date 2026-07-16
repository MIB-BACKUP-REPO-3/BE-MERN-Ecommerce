import type { IShopAffiliation } from "../interface/model/shop-affiliation.interface.js";
import { ShopAffiliation } from "../model/shop-affiliation.schema.js";
import { BaseCrudService } from "./base-crud.service.js";

export class ShopAffiliationService extends BaseCrudService<IShopAffiliation> {
  constructor() {
    super(ShopAffiliation);
  }
}
