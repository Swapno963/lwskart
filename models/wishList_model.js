import { ObjectId } from "mongodb";
import mongoose, { Schema } from "mongoose";

const wishSchema = new Schema({
  productId: {
    required: true,
    type: ObjectId,
  },
  userId: {
    required: true,
    type: ObjectId,
  },
});

export const wishModel =
  mongoose.models.wishList ?? mongoose.model("wishList", wishSchema);
