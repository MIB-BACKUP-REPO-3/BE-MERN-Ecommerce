import type { IOrder } from "../interfaces/model/order.interface.js";
import { Order } from "../models/order.schema.js";
import { BaseCrudService } from "./base-crud.service.js";

export class OrderService extends BaseCrudService<IOrder>{
    constructor(){
        super(Order)
    }
}