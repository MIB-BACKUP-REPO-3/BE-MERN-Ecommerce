
import { BaseCrudService } from "./base-crud.service.js";
import type { IProduct } from "../interface/model/product.interface.js";
import { Product } from "../model/product.schema.js";

export class ProductService extends BaseCrudService<IProduct>{
    constructor(){
        super(Product)
    }
}