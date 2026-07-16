import { Types } from "mongoose";
import type { ShopAccountRole } from "../../type/shop-account-role.type.js";
import type { ShopAffiliationStatus } from "../../type/shop-affiliation-status.type.js";

export interface IShopAffiliation {
  shopId: Types.ObjectId;
  shopAccountId: Types.ObjectId;

  role: ShopAccountRole;
  status: ShopAffiliationStatus;

  createdBy?: Types.ObjectId;
  modifiedBy?: Types.ObjectId;
  createdAt?: Date;
  modifiedAt?: Date;
}
