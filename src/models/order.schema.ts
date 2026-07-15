import { model, Types } from "mongoose";
import { createBaseSchema, IBaseEntity } from "./base.schema";
import { IOrder } from "../interfaces/order.interface";


export const OrderSchema = createBaseSchema<IOrder>({
  shopId: {
    type: Types.ObjectId,
    ref: "Shop",
    required: true,
  },

  customerId: {
    type: Types.ObjectId,
    ref: "Customer",
  },

  orderNumber: {
    type: String,
    required: true,
    trim: true,
  },

  orderStatus: {
    type: String,
    enum: [
      "pending",
      "confirmed",
      "processing",
      "completed",
      "cancelled",
    ],
    default: "pending",
    required: true,
  },

  customer: {
    firstName: {
      type: String,
      required: true,
      trim: true,
    },

    lastName: {
      type: String,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
    },

    phone: {
      type: String,
      trim: true,
    },
  },

  shippingAddress: {
    street: {
      type: String,
      required: true,
    },

    city: {
      type: String,
      required: true,
    },

    state: String,

    country: {
      type: String,
      required: true,
    },

    postalCode: String,
  },

  items: [
    {
      productId: {
        type: Types.ObjectId,
        ref: "Product",
        required: true,
      },

      name: {
        type: String,
        required: true,
      },

      sku: String,

      image: String,

      price: {
        type: Number,
        required: true,
        min: 0,
      },

      quantity: {
        type: Number,
        required: true,
        min: 1,
      },

      subtotal: {
        type: Number,
        required: true,
        min: 0,
      },
    },
  ],

  totals: {
    subtotal: {
      type: Number,
      required: true,
      min: 0,
    },

    shippingFee: {
      type: Number,
      default: 0,
      min: 0,
    },

    discount: {
      type: Number,
      default: 0,
      min: 0,
    },

    tax: {
      type: Number,
      default: 0,
      min: 0,
    },

    total: {
      type: Number,
      required: true,
      min: 0,
    },
  },

  payment: {
    method: {
      type: String,
      enum: ["cod", "stripe", "paypal", "bank_transfer"],
      required: true,
    },

    status: {
      type: String,
      enum: ["pending", "paid", "failed", "refunded"],
      default: "pending",
      required: true,
    },

    transactionId: String,
  },

  customerNote: String,
  trackingNumber: String,
  shippedAt: Date,
  deliveredAt: Date,
});

OrderSchema.index({
  shopId: 1,
  orderNumber: 1,
}, {
  unique: true,
});

OrderSchema.index({
  shopId: 1,
  customerId: 1,
});

OrderSchema.index({
  shopId: 1,
  orderStatus: 1,
});

OrderSchema.index({
  "payment.status": 1,
});

export const Order = model<IOrder>("Order", OrderSchema);