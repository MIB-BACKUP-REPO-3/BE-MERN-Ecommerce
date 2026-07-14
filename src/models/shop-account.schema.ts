import { model, Types } from "mongoose";
import { createBaseSchema } from "./base.schema";
import { AccountStatus } from "../types/account-status.type";

export interface IShopAccount {
  email: string;
  password: string;
  contactNumber: string;
  status: AccountStatus;
  lastLoginAt?: Date;
  createdBy?: Types.ObjectId;
  modifiedBy?: Types.ObjectId;
  createdAt?: Date;
  modifiedAt?: Date;
}

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