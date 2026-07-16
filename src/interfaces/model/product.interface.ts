import { Types } from "mongoose";
import type { ProductStatus } from "../../types/product-status.type.js";

export interface IProduct {
  shopId: Types.ObjectId;
  categoryId: Types.ObjectId;
  name: string;
  slug: string;
  description?: string;
  price: number;
  currency?: string;
  trackInventory: boolean;
  stock: number;
  lowStockThreshold?: number;
  sku?: string;
  status: ProductStatus;
  images: string[];
  isFeatured: boolean;
  createdBy?: Types.ObjectId;
  modifiedBy?: Types.ObjectId;
  createdAt?: Date;
  modifiedAt?: Date;
}
