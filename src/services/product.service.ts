
import { BaseCrudService } from "./base-crud.service.js";
import type { IProduct } from "../interfaces/model/product.interface.js";
import { Product } from "../models/product.schema.js";

export class ProductService extends BaseCrudService<IProduct>{
    constructor(){
        super(Product)
    }
}