import { Types } from "mongoose";
import { IBaseEntity } from "../../models/base.schema";
import { OrderStatus } from "../../types/order-status.type";
import { PaymentMethod } from "../../types/payment-method.type";
import { PaymentStatus } from "../../types/payment-status.type";

export interface IOrder extends IBaseEntity {
  shopId: Types.ObjectId;
  customerId?: Types.ObjectId;

  orderNumber: string;

  orderStatus:OrderStatus;

  customer: {
    firstName: string;
    lastName: string;
    email: string;
    phone?: string;
  };

  shippingAddress: {
    street: string;
    city: string;
    state?: string;
    country: string;
    postalCode?: string;
  };

  items: {
    productId: Types.ObjectId;
    name: string;
    sku?: string;
    image?: string;
    price: number;
    quantity: number;
    subtotal: number;
  }[];

  totals: {
    subtotal: number;
    shippingFee: number;
    discount: number;
    tax: number;
    total: number;
  };

  payment: {
    method:PaymentMethod;
    status: PaymentStatus;
    transactionId?: string;
  };
  customerNote?: string;
  trackingNumber?: string;
  shippedAt?: Date;
  deliveredAt?: Date;
}