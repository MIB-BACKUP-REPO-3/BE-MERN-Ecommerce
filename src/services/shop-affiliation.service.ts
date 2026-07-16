import type { IShopAffiliation } from "../interfaces/model/shop-affiliation.interface.js";
import { ShopAffiliation } from "../models/shop-affiliation.schema.js";
import { BaseCrudService } from "./base-crud.service.js";

export class ShopAffiliationService extends BaseCrudService<IShopAffiliation> {
  constructor() {
    super(ShopAffiliation);
  }
}
