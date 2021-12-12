import { Router } from "express";
import userController from "./../controllers/user.controller";

class UserRouter {
  userRouter: Router;
  constructor() {
    this.userRouter = Router();
    this.routes();
  }
  routes = () => {
    this.userRouter.get("/a", (req, res) => {
      res.send("tes");
    });
    this.userRouter.get("/", userController.showUser);
    this.userRouter.post("/register", userController.registerUser);
    this.userRouter.post("/login", userController.loginUser);
  };
}

export default new UserRouter().userRouter;
