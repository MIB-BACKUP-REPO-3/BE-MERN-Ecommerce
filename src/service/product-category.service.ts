
import type { IProductCategory } from "../interface/model/product-category.interface.js";
import { ProductCategory } from "../model/product-category.schema.js";
import { BaseCrudService } from "./base-crud.service.js";

export class ProductCategoryService extends BaseCrudService<IProductCategory>{
    constructor(){
        super(ProductCategory)
    }
}