import { connectMongoDB } from "@/libs/MongoConnect";
import Product from "@/libs/models/Product";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await connectMongoDB();
    const data = await Product.find();
    return NextResponse.json(data);
  } catch (err) {
    return NextResponse.json(
      {
        err,
        msg: "Something went wrong!",
      },
      { status: 400 }
    );
  }
}
