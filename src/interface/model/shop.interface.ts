import { Types } from "mongoose";
import type { ShopStatus } from "../../type/shop-status.type.js";

export interface IShop {
  name: string;
  slug: string;
  description?: string;
  email?: string;
  contactNumber?: string;
  address?: {
    line1?: string;
    city?: string;
    state?: string;
    country?: string;
    postalCode?: string;
  };
  location?: {
    latitude?: number;
    longitude?: number;
  };
  status: ShopStatus;

  logo?: string;
  coverImage?: string;

  settings?: {
    currency?: string;
    timezone?: string;
  };

  openedAt?: Date;
  deletedAt?: Date;

  createdBy?: Types.ObjectId;
  modifiedBy?: Types.ObjectId;
  createdAt?: Date;
  modifiedAt?: Date;
  ownerId:Types.ObjectId
}