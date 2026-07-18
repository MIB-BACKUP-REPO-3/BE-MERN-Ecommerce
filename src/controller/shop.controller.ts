import type { UpdateQuery, QueryFilter } from "mongoose";
import type { ICrudController } from "../interface/controller/crud-controller.interface.js";
import type { IShop } from "../interface/model/shop.interface.js";
import { shopCrudResponseMappers } from "../mapper/shop/shop-crud-response.mappers.js";
import { ShopService } from "../service/shop.service.js";
import { createCrudControllerFromService } from "../util/create-service-controller.js";

export const shopController: ICrudController<
  Partial<IShop>,
  UpdateQuery<IShop>,
  QueryFilter<IShop>
> = createCrudControllerFromService(ShopService, shopCrudResponseMappers);
