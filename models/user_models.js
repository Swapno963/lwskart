import mongoose, { Schema } from "mongoose";

const schema = new Schema({
  firstName: {
    required: false,
    type: String,
  },
  password: {
    required: false,
    type: String,
  },
  email: {
    required: false,
    type: String,
  },
});

export const userModel =
  mongoose.models?.users ?? mongoose.model("users", schema);
