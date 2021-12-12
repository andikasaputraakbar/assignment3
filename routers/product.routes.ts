import { Router } from "express";
import productController from "./../controllers/product.controller";

class ProductRouter {
  productRouter: Router;
  constructor() {
    this.productRouter = Router();
    this.routes();
  }
  routes = () => {
    this.productRouter.get("/a", (req, res) => {
      res.send("tes");
    });
    this.productRouter.get("/", productController.showProduct);
    this.productRouter.post(
      "/",

      productController.createProduct
    );
    this.productRouter.get(
      "/",

      productController.findProduct
    );
  };
}

export default new ProductRouter().productRouter;
