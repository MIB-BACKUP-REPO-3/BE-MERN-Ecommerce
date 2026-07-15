import { Types } from "mongoose";

export interface IProductCategory {
  name: string;
  parentId?: Types.ObjectId;
  shopId?: Types.ObjectId;
  level: number;
  path?: string;
  isActive: boolean;
  createdBy?: Types.ObjectId;
  modifiedBy?: Types.ObjectId;
  createdAt?: Date;
  modifiedAt?: Date;
}
