import type { IOrder } from "../interface/model/order.interface.js";
import { Order } from "../model/order.schema.js";
import { BaseCrudService } from "./base-crud.service.js";

export class OrderService extends BaseCrudService<IOrder>{
    constructor(){
        super(Order)
    }
}