import { Types } from "mongoose";
import { ShopAffiliationStatus } from "../../types/shop-affiliation-status.type";
import { ShopAccountRole } from "../../types/shop-account-role.type";

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
