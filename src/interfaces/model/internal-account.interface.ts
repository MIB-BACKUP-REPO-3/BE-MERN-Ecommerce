import { Types } from "mongoose";
import type { InternalAccountRole } from "../../types/internal-account.type.js";
import type { AccountStatus } from "../../types/account-status.type.js";

export interface IInternalAccount {
  email: string;
  password: string;
  contactNumber: string;

  role: InternalAccountRole;
  status: AccountStatus;

  lastLoginAt?: Date;

  createdBy?: Types.ObjectId;
  modifiedBy?: Types.ObjectId;
  createdAt?: Date;
  modifiedAt?: Date;
}