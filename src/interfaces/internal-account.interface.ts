import { Types } from "mongoose";
import { AccountStatus } from "../types/account-status.type";
import { InternalAccountRole } from "../types/internal-account.type";

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