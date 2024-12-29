// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
//lib
import { connectToDatabase } from "@/lib/db";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const client = await connectToDatabase();

  const db = client.db();

  if (req.method === "POST") {
    const data = req.body;

    const { userId, productId, colour, productSize, count } = data;

    const findProduct = await db.collection("wishList").findOne({
      productId,
    });

    if (findProduct) {
      res.status(409).json({
        message: "Product is already added in WishList!",
        findProduct,
      });
      client.close();
      return;
    } else {
      const result = await db.collection("wishList").insertOne({
        userId,
        productId,
        colour,
        productSize,
        count,
      });
      res
        .status(201)
        .json({ message: "Product successfully added to wishList!", result });
      client.close();
    }
  }
}
