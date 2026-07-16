import { Types } from "mongoose";
import type { AccountStatus } from "../../types/account-status.type.js";

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
