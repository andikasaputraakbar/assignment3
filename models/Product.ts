import { Model, model, Schema } from "mongoose";
import ProductInterface from "../interface/product.interface";

const productSchema = new Schema({
    title:{type:String},
    image:{type:String},
    description:{type:String},
    price:{type:String},
    category:{type:String}
})

const Product: Model<ProductInterface> = model<ProductInterface>(
    "product",
    productSchema
);
export default Product;
