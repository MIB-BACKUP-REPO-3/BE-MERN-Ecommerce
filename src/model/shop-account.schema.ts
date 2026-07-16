import { model} from "mongoose";
import { createBaseSchema } from "./base.schema.js";
import type { IShopAccount } from "../interface/model/shop-account.interface.js";

export const ShopAccountSchema = createBaseSchema<IShopAccount>({
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
  },

  password: {
    type: String,
    required: true,
  },

  contactNumber: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },

  status: {
    type: String,
    enum: ["active", "inactive", "suspended"],
    default: "active",
    required: true,
  },

  lastLoginAt: {
    type: Date,
    default: null,
  },
});

export const ShopAccount = model<IShopAccount>(
  "ShopAccount",
  ShopAccountSchema,
);