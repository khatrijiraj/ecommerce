import { connectMongoDB } from "@/libs/MongoConnect";
import Product from "@/libs/models/Product";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { imgSrc, fileKey, name, category, price } = body;
    await connectMongoDB();
    const data = await Product.create({
      imgSrc,
      fileKey,
      name,
      category,
      price,
    });
    return NextResponse.json({ msg: "Product Added Successfully!" }, data);
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
