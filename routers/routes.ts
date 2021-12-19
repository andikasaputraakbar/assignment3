import { Router } from "express";
import userRouter from "./user.routes";
import productRouter from "./product.routes";


class Routes {
  router: Router;
  constructor() {
    this.router = Router();
    this.routes();
  }

  routes = () => {
    this.router.use("/auth", userRouter);
    this.router.use("/product", productRouter);
  };
}

export default new Routes().router;
