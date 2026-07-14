import { model, Types } from "mongoose";
import { createBaseSchema } from "./base.schema";
import { ShopAffiliationStatus } from "../types/shop-affiliation-status.type";
import { ShopAccountRole } from "../types/shop-account-role.type";



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

export const ShopAffiliationSchema =
  createBaseSchema<IShopAffiliation>({
    shopId: {
      type: Types.ObjectId,
      ref: "Shop",
      required: true,
    },

    shopAccountId: {
      type: Types.ObjectId,
      ref: "ShopAccount",
      required: true,
    },

    role: {
      type: String,
      enum: ["owner", "employee"],
      required: true,
    },

    status: {
      type: String,
      enum: ["active", "inactive", "removed"],
      default: "active",
      required: true,
    },
  });


ShopAffiliationSchema.index(
  {
    shopId: 1,
    shopAccountId: 1,
  },
  {
    unique: true,
  },
);

ShopAffiliationSchema.index(
  {
    shopId: 1,
    role: 1,
  },
  {
    unique: true,
    partialFilterExpression: {
      role: "owner",
    },
  },
);

export const ShopAffiliation = model<IShopAffiliation>(
  "ShopAffiliation",
  ShopAffiliationSchema,
);