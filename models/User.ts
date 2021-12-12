import { Model, model, Schema } from "mongoose";
import UserInterface from "../interface/user.interface";

const userSchema = new Schema({
  fullname: { type: String, required: true },
  username: { type: String, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  phone: { type: String },
  address: { type: String },
  gender: { type: String },
  dob: { type: String },
});

const User: Model<UserInterface> = model<UserInterface>("user", userSchema);
export default User;
