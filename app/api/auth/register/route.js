import { userModel } from "@/models/user_models";
import { dbConnect } from "@/service/mongo";
import { NextResponse } from "next/server";

export const POST = async (request) => {
  const { name, email, password } = await request.json();

  console.log(name, email, password);

  await dbConnect();

  const newUser = {
    name
    email,
    password,
  };

  console.log(newUser);

  try {
    await userModel.create(newUser);
    return new NextResponse("User has been created", {
      status: 201,
    });
  } catch (err) {
    return new NextResponse(err.message, {
      status: 500,
    });
  }
};
