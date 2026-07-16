import type { IShop } from "../interfaces/model/shop.interface.js";
import { Shop } from "../models/shop.schema.js";
import { BaseCrudService } from "./base-crud.service.js";

export class ShopService extends BaseCrudService<IShop> {
  constructor() {
    super(Shop);
  }
}
