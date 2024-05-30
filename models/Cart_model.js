import { ObjectId } from "mongodb";
import mongoose, { Schema } from "mongoose";

const cartSchema = new Schema({
  productId: {
    required: true,
    type: ObjectId,
  },
  userEmail: {
    required: true,
    type: String,
  },
});

export const cartModel =
  mongoose.models.cart ?? mongoose.model("cart", cartSchema);
