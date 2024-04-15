import connectDB from "@/app/mongoDb/connectDb";
import User from "@/app/mongoDb/userModel";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    await connectDB();
    const requestData = await req.json();
    const { email, field, password } = requestData;
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return NextResponse.json(
        { error: "email already exists" },
        { status: 400 }
      );
    }
    const newUser = new User({ email, field, password });
    await newUser.save();
    console.log("signup success")
    return NextResponse.json(
      { message: "account created" },
      { success: true },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "fatal error" },
      { success: false },
      { status: 404 }
    );
  }
}