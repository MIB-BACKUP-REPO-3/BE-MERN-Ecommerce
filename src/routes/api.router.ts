import { Router } from "express";
import testRouter from "./test.router";
import { shopRouter } from "./shop.router";
import { shopAffiliationRouter } from "./shop-affiliation.router";
import { shopAccountRouter } from "./shop-account.router";
import { productRouter } from "./product.router";
import { productCategoryRouter } from "./product-category.router";
import { orderController } from "../controller/order.controller";
import { orderRouter } from "./order.router";
import { internalAccountRouter } from "./internal-account.router";
import { customerAccountRouter } from "./customer-account.router";

const router = Router();
router.use('/',testRouter)
router.use('/auth',testRouter)
router.use('/customer-account',customerAccountRouter)
router.use('/internal-account',internalAccountRouter)
router.use('/order',orderRouter)
router.use('/product-category',productCategoryRouter)
router.use('/product',productRouter)
router.use('/shop-account',shopAccountRouter)
router.use('/shop-affiliation',shopAffiliationRouter)
router.use('/shop',shopRouter)

export default router;