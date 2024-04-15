import connectDB from "@/app/mongoDb/connectDb";
import User from "@/app/mongoDb/userModel";
import { NextResponse } from "next/server";

export async function POST(req) {
  if (req.method === "POST") {
    const { email, password } = await req.json();

    try {
      await connectDB();
      const user = await User.findOne({ email, password });
      if (!user) {
        return NextResponse.json(
          { message: "email or password incorrect" },
          { status: 404 }
        );
      }
      console.log(user);
      return NextResponse.json(
        { message: "login success", user },
        { status: 201 }
      );
    } catch (error) {
      console.error("Error logging in user:", error);
      console.error("Error stack trace:", error.stack);
      return NextResponse.json({ message: "404 Internal Server Error" });
    }
  }
}
