
import type { IProductCategory } from "../interfaces/model/product-category.interface.js";
import { ProductCategory } from "../models/product-category.schema.js";
import { BaseCrudService } from "./base-crud.service.js";

export class ProductCategoryService extends BaseCrudService<IProductCategory>{
    constructor(){
        super(ProductCategory)
    }
}