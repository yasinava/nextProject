import users from "@/models/users";
import connect from "@/utils/db";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";
export const POST = async (request) => {
  const { name, email, password } = await request.json();
  console.log(name);

  await connect();
  try {
    const hashedPassword = await bcrypt.hash(password, 5);

    const newUser = new users({
      name,
      email,
      password: hashedPassword,
    });

    try {
      await newUser.save();
      console.log(newUser);
      return new NextResponse("User has been created", {
        status: 201,
      });
    } catch (error) {
      return new NextResponse(error.massage, {
        status: 500,
      });
    }
  } catch (error) {
    console.log("not connect");
    throw new Error("not connect");
  }
};
