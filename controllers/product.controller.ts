import { NextFunction, Request, Response } from "express";
import Product from "../models/Product";

class ProductController {
  static async showProduct(req: Request, res: Response, next: NextFunction) {
    try {
      const result = await Product.find();

      res.status(200).json({ message: "Product shown", data: result });
    } catch (err) {
      next(err);
    }
  }

  static async createProduct(req: Request, res: Response, next: NextFunction) {
    const { title, image, description, price, category } = req.body;

    try {
      const result = await Product.create({
        title,
        image,
        description,
        price,
        category,
      });
      res.status(201).json({ message: "Product created", data: result });
    } catch (err) {
      next(err);
    }
  }

  static async findProduct(req: Request, res: Response, next: NextFunction) {
    const { title } = req.params;
    try {
      const result = await Product.findOne({ title });
      console.log(result);
      if (!result) {
        throw { name: "NOT_FOUND_SPECIFIC" };
      } else {
        res.status(200).json({ message: `Product found`, data: result });
      }
    } catch (err) {
      next(err);
    }
  }
}

export default ProductController;
