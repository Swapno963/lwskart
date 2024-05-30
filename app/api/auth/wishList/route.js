import { NextResponse } from "next/server";

import { wishModel } from "@/models/wishList_model";
import dbConnect from "@/service/mongo";
import mongoose from "mongoose";

export const POST = async (request) => {
  const { userId, productId } = await request.json();

  console.log(userId, productId);

  await dbConnect();

  const payload = {
    productId: new mongoose.Types.ObjectId(productId),
    userId: new mongoose.Types.ObjectId(userId),
  };

  console.log(payload);

  try {
    await wishModel.create(payload);
    return new NextResponse("A New Cart item has been Created", {
      status: 201,
    });
  } catch (err) {
    return new NextResponse(err.message, {
      status: 500,
    });
  }
};
