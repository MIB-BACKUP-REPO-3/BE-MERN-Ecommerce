import { model, Types } from "mongoose";
import { createBaseSchema } from "./base.schema.js";
import type { IShop } from "../interface/model/shop.interface.js";

export const ShopSchema = createBaseSchema<IShop>({
  ownerId: {
    type: Types.ObjectId,
    ref: "ShopAccount",
    required: true,
  },

  name: {
    type: String,
    required: true,
    trim: true,
  },

  slug: {
    type: String,
    required: true,
    lowercase: true,
    trim: true,
  },

  description: {
    type: String,
    default: null,
  },

  email: {
    type: String,
    lowercase: true,
    trim: true,
  },

  contactNumber: {
    type: String,
    trim: true,
  },

  address: {
    add: {
      type: String,
      trim: true,
    },

    city: {
      type: String,
      trim: true,
    },

    state: {
      type: String,
      trim: true,
    },

    country: {
      type: String,
      trim: true,
    },

    postalCode: {
      type: String,
      trim: true,
    },
  },

  location: {
    latitude: {
      type: Number,
    },

    longitude: {
      type: Number,
    },
  },
  status: {
    type: String,
    enum: ["active", "inactive", "suspended", "pending"],
    default: "pending",
    required: true,
  },

  logo: {
    type: String,
    default: null,
  },

  coverImage: {
    type: String,
    default: null,
  },

  settings: {
    currency: {
      type: String,
      default: "PKR",
    },

    timezone: {
      type: String,
      default: "Asia/Karachi",
    },
  },

  openedAt: {
    type: Date,
    default: null,
  },

  deletedAt: {
    type: Date,
    default: null,
  },
});

ShopSchema.index(
  {
    slug: 1,
  },
  {
    unique: true,
  },
);

ShopSchema.index({
  status: 1,
});

export const Shop = model<IShop>("Shop", ShopSchema);
