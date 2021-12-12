import { NextFunction, Request, Response } from "express";
import User from "../models/User";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

class UserController {
  static async registerUser(req: Request, res: Response, next: NextFunction) {
    const { fullname, email, password } = req.body;
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(password, salt);

    try {
      const result = await User.create({
        fullname,
        email,
        password: hashedPassword,
      });
      res.status(201).json({ message: "Register successful", data: result });
    } catch (err) {
      next(err);
    }
  }

  static async showUser(req: Request, res: Response, next: NextFunction) {
    try {
      const result = await User.find();
      res.status(200).json({ message: "User show", data: result });
    } catch (err) {
      next(err);
    }
  }

  static async loginUser(req: Request, res: Response, next: NextFunction) {
    const { email, password } = req.body;
    try {
      const result = await User.findOne({ email });
      if (!result) {
        throw { name: "UNAUTHORIZED" };
      }
      const passwordIsValid = bcrypt.compareSync(password, result.password);
      if (!passwordIsValid) {
        throw { name: "UNAUTHORIZED" };
      }
      const token = jwt.sign({ data: result }, "saltacademy", {
        expiresIn: "1h",
      });
      res.status(200).json({
        message: "Login Successful",
        data: result,
        AccessToken: token,
      });
    } catch (err) {
      next(err);
    }
  }
}

export default UserController;
