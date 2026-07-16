import type { IShop } from "../interface/model/shop.interface.js";
import { Shop } from "../model/shop.schema.js";
import { BaseCrudService } from "./base-crud.service.js";

export class ShopService extends BaseCrudService<IShop> {
  constructor() {
    super(Shop);
  }
}
